<template>
  <div>
      <van-button type="info">信息按钮</van-button>
      <div style="height: 2rem;width: 2rem;border: 0.01rem solid #666"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
    created() {
        axios.get('http://localhost:9000/business/test')
            .then(_d => {
                console.info(_d.data);
            })
    }
}
</script>

