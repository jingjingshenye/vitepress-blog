# webrtc

- WebRTC（Web Real-Time Communication），一个可以让用户用自己流量 实现音视频实时通信的框架（APIs），支持浏览器（Firefox、Chrome、safari）以及 iOS、Android 原生系统。

- getUserMedia: 获取麦克风和摄像头的许可，使得 WebRTC 可以拿到本地媒体流；
- RTCPeerConnection: 建立点对点连接的关键，提供了创建，保持，监控，关闭连接的方法的实现。像媒体协商、收集候选地址都需要它来完成；
- RTCDataChannel: 支持点对点数据传输，可用于传输文件、文本消息等。

## 音视频引擎

有了 WebRTC，我们可以很方便的实现音视频通信；而如果没有 WebRTC 的情况下，我们想要实现音视频通信，就需要去了解音视频编码器相关技术。

WebRTC 内置了强大的音视频引擎，可以对媒体流进行编解码、回声消除、降噪、防止视频抖动等处理，我们使用者大可不用去关心如何实现 。主要使用的音视频编解码器有:

- OPUS: 一个开源的低延迟音频编解码器，WebRTC 默认使用；
- G711: 国际电信联盟 ITU-T 定制出来的一套语音压缩标准，是主流的波形声音编解码器；
- VP8: VP8，VP9，都是 Google 开源的视频编解码器，现在主要用于 WebRTC 视频编码；
- H264: 视频编码领域的通用标准，提供了高效的视频压缩编码，之前 WebRTC 最先支持的是自己家的 VP8，后面也支持了 H264、H265 等。

还有像回声消除`AEC(Acoustic Echo Chancellor)`、背景噪音抑制`ANS(Automatic Noise Suppression)`和`Jitter buffer`用来防止视频抖动，这些问题在 WebRTC 中也提供了非常成熟、稳定的算法，并且提供图像增加处理，例如美颜，贴图，滤镜处理等。

## 网络 IO

WebRTC 传输层用的是 UDP 协议，因为音视频传输对及时性要求更高，如果使用 TCP 当传输层协议的话，如果发生丢包的情况下，因为 TCP 的可靠性，就会尝试重连，如果第七次之后仍然超时，则断开 TCP 连接。而如果第七次收到消息，那么传输的延迟就会达到 2 分钟。在延迟高的情况下，想做到正常的实时通讯显然是不可能的，此时 TCP 的可靠性反而成了弊端。
而 UDP 则正好相反，它只负责有消息就传输，不管有没有收到，这里从底层来看是满足 WebRTC 的需求的，所以 WebRTC 是采用 UDP 来当它的传输层协议的。

这里主要用到以下几种协议/技术：

- RTP/SRTP: 传输音视频数据流时，我们并不直接将音视频数据流交给 UDP 传输，而是先给音视频数据加个 RTP 头，然后再交给 UDP 进行，但是由于浏览器对安全性要求比较高，增加了加密这块的处理，采用 SRTP 协议；
- RTCP：通过 RTCP 可以知道各端的网络质量，这样对方就可以做流控处理；
- P2P(ICE + STUN + TURN): 这是 WebRTC 最核心的技术，利用 ICE、STUN、TURN 等技术，实现了浏览器之间的直接点对点连接，解决了 NAT 穿透问题，实现了高质量的网络传输。

除了以上三部分，WebRTC 还需要一个信令服务做会话管理，但 WebRTC 规范里没有包含信令协议，需要自行实现。

## 通信过程

基于以上，我们来思考下 WebRTC 实现一对一通信需要哪些基本条件？

- WebRTC 终端（两个）：本地和远端，负责音视频采集、编解码、NAT 穿越以及音视频数据传输等；
- Signal 信令服务器：自行实现的信令服务，负责信令处理，如加入房间、离开房间、媒体协商消息的传递等；
- STUN/TURN 服务器：负责获取 WebRTC 终端在公网的 IP 地址，以及 NAT 穿越失败后的数据中转服务。

通信过程如下：

- 本地（WebRTC 终端）启动后，检测设备可用性，如果可用后开始进行音视频采集工作；
- 本地就绪后，发送“加入房间”信令到 Signal 服务器；
- Signal 服务器创建房间，等待加入；
- 对端（WebRTC 终端）同样操作，加入房间，并通知另一端；
- 双端创建媒体连接对象 RTCPeerConnection，进行媒体协商；
- 双端进行连通性测试，最终建立连接；
- 将采集到的音视频数据通过 RTCPeerConnection 对象进行编码，最终通过 P2P 传送给对端/本地，再进行解码、展示。

> 第 6 步在建立连接进行 P2P 穿越时很有可能失败。当 P2P 穿越失败时，为了保障音视频数据仍然可以互通，则需要通过 TURN 服务器进行音视频数据中转。后面会讲到 TURN 服务是什么，以及如何搭建 TURN 服务。

## 音视频三大架构

### mesh

Mesh 架构是利用 Webrtc 对等连接，在参与会议的各方之间两两 P2P 连接，即 P2P2P2P，形成一个网状结构。

优势 👆

实现简单，只需要 ICE 服务器用于实现 P2P 穿越就行；

不需要服务器中转数据，节省开发和成本；

充分利用了客户端的带宽资源。

缺陷 👇

每端都需要将自己的媒体流发送到其他各端，并从其他各端获取流，占用带宽较多，参与人越多，占用的带宽就越大，所以对带宽的要求极高，Mesh 架构在真实的应用场景中几乎没有人使用。

### MCU

MCU（Multipoint Conferencing Unit）架构由一个中心化的 MCU 服务器（对媒体流进行编码、转码、解码、混合处理）和多个终端组成一个星形结构。各终端将自己要共享的音视频流发送给服务器，服务端进行混合后再将复合流发到各端。

优势 👆

每个终端只需发送一份媒体流，再接收单个复合流，减少客户端带宽压力；

接收的复合流，所有参与人看到的是相同的画面，客户体验非常好。

缺陷 👇

需要一台强大的机器来解码、合成和重新编码这些大量运算的工作，对 CPU 资源的消耗很大。

### SFU

SFU（Selective Forwarding Unit）架构同 MCU ，也是由一个中心化的服务器和多个终端组成，但与 MCU 不同的是，SFU 服务器不对音视频进行编码、解码、混流等算力较高的工作，只负责转发媒体或者存储媒体，实际上就是一个音视频路由转发器。
SFU 是最近几年流行的新架构，目前 WebRTC 多方通信媒体服务器大多都是 SFU 架构。

优势 👆

服务端压力相对较小，由于是数据包直接转发，不需要编码、解码，对 CPU 资源消耗很小；

直接转发也极大地降低了延迟，提高了实时性；

对客户端的宽带要求适中：针对低延迟、高带宽媒体转发进行了优化。

缺陷 👇

由于是数据包直接转发，参与人观看多路视频的时候可能会出现不同步；相同的视频流，不同的参与人看到的画面也可能不一致。

综合来说：SFU 是三种架构方案中优势最明显而劣势相对较少，是目前最优的一种多方通信架构方案。

开源实现

SFU 架构有一些比较流行的开源项目，像： Licode、Janus-gateway、MediaSoup、Medooze 等，感兴趣的小伙伴可以去了解。

## webrtc 实现步骤

## 1.创建数据

```js
// 创建数据源
const localStream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
// 显示数据源，localVideo 是 html 中的 video 标签
localVideo.srcObject = localStream;
localVideo.onloadedmetadata = () => {
  localVideo.play();
};
```

## 2.创建发送数据实例

用于发送步骤一中创建的数据：

```js
// 本地实例
const pc1 = new RTCPeerConnection();
// 对端实例
const pc2 = new RTCPeerConnection();
```

## 3.配置实例

做这一步的目的是为了交换两端的信息 icecandidate  和  SDP

icecandidate： 包含通信协议(TCP/UDP)和通信 IP，STUN 和 TURN 协议中描述网络信息的格式规范，解决双方网络链接问题；

SDP： 浏览器能力，包括不限于音视频编码格式，带宽，流控策略等；解决前置思考中，双方能力不匹配问题，通过交换双方 SDP 浏览器会自动选择双方都支持的视频编码格式。

```js
// 告诉对端，本端地址
pc1.addEventListener("icecandidate", async (e) => {
  // 发送给对端
  // 对端添加本端地址
  if (e.candidate) {
    await pc2.addIceCandidate(e.candidate);
  }
});

pc2.addEventListener("icecandidate", async (e) => {
  // 发送给本端
  // 本端添加对端地址
  if (e.candidate) {
    await pc1.addIceCandidate(e.candidate);
  }
});

// 创建本端SDP,告诉本端浏览器支持哪些能力
const offer = await pc1.createOffer();
pc1.setLocalDescription(offer);
// 创建远端SDP,告诉远端浏览器支持哪些能力
const answer = await pc2.createAnswer();
pc2.setLocalDescription(answer);
// 。。。。发送远端SDP给本端
// 接收远端sdp,告诉远端浏览器支持哪些能力
pc1.setRemoteDescription(answer);
// 接收客户端sdp,告诉远端浏览器支持哪些能力
pc2.setRemoteDescription(offer);
```

## 4. 发送数据

```js
localStream.getTracks().forEach((track) => pc1.addTrack(track, localStream));
```

## 5.接收数据

```js
// 接收远端数据
pc2.addEventListener("track", (e) => {
  remoteVideo.srcObject = e.streams[0];
});
```

## 6.关闭连接

```js
// 关闭连接
pc1.close();
pc2.close();
```

## 完整代码

```ts
const pc1 = new RTCPeerConnection();
pc1.addEventListener("icecandidate", async (e) => {
  if (e.candidate) {
    await pc2.addIceCandidate(e.candidate);
  }
});
pc1.addEventListener("iceconnectionstatechange", (e) => {
  console.log("pc1: iceconnectionstatechange", e);
});

const pc2 = new RTCPeerConnection();
pc2.addEventListener("icecandidate", async (e) => {
  if (e.candidate) {
    await pc1.addIceCandidate(e.candidate);
  }
});

pc2.addEventListener("iceconnectionstatechange", (e) => {
  console.log("pc2: iceconnectionstatechange", e);
});

pc2.addEventListener("track", (e) => {
  if (e.streams.length > 0) {
    remoteVideo.srcObject = e.streams[0];
  }
});

const remoteVideo = document.querySelector("#remoteVideo") as HTMLVideoElement;
const localVideo = document.querySelector("#localVideo") as HTMLVideoElement;

async function pushStream(answer: RTCSessionDescriptionInit) {
  pc1.setRemoteDescription(answer);
}

async function pullStream(offer: RTCSessionDescriptionInit): Promise<void> {
  pc2.setRemoteDescription(offer);
  const answer = await pc2.createAnswer();
  pc2.setLocalDescription(answer);
  console.warn("answer", answer);
  pushStream(answer);
}

window.onload = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  localVideo.srcObject = localStream;
  localStream.getTracks().forEach((track) => pc1.addTrack(track, localStream));

  const offer = await pc1.createOffer();
  pc1.setLocalDescription(offer);
  console.warn("pc1 offer", offer);
  pullStream(offer);
};
```
