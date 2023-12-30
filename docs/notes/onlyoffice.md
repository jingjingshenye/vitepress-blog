# 接入 onlyoffice

## docker 安装 onlyoffice 镜像

```bash
sudo docker run -i -t -d -p 8701:80 onlyoffice/documentserver

# 注意这里要将 id 替换成自己的
docker exec -it id /bin/bash

# 启动所有的内置服务
supervisorctl restart all
# 退出容器
exit
```

## vue3 接入

```bash
yarn add @onlyoffice/document-editor-vue
```

```js
<template>
  <div class="wrap">
    <DocumentEditor
      id="docEditor"
      :documentServerUrl="documentServiceAddress"
      :config="config"
      :events_onDocumentReady="onDocumentReady"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DocumentEditor } from '@onlyoffice/document-editor-vue';
import axios from 'axios';

export default defineComponent({
  name: 'ExampleComponent',
  components: {
    DocumentEditor,
  },
  data() {
    return {
      documentServiceAddress: import.meta.env.VITE_ONLYOFFICE_DOCUMENTSERVER_HOST,
      config: {
        document: {
          fileType: 'docx',
          key: 'Khirz6zTPdfd7',
          title: 'Example Document Title.docx',
          url: 'https://example.com/url-to-example-document.docx',
        },
        documentType: 'word',
        editorConfig: {
          callbackUrl: 'https://example.com/url-to-callback.ashx',
        },
      },
    };
  },
  methods: {
    onDocumentReady() {
      console.log('Document is loaded');
    },
  },
  mounted() {
    console.log('Component is mounted');
    axios
      .get(import.meta.env.VITE_ONLYOFFICE_NODE_HOST + '/editor-config?fileName=1.pptx')
      .then((response) => {
        console.log(response.data);
        this.config = response.data;
      });
  },
});
</script>
```

## 注意事项

开启 JWT 后，需要 token 验证，要请求自建的后端服务获取 token。

这里建议 config 和 token 一起下发，后端配置更加灵活，不需要前端发版
