<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Logan from 'logan-web'

export default {
  name: 'About',

  created () {
    // Logan.log('test1', 1)
    // Logan.log('test2', 1)
    // Logan.log('test3', 1)
    // this.log()
  },

  methods: {
    async log () {
      const reportResult = await Logan.report({
        reportUrl: 'http://localhost:5000/api/log/web',
        deviceId: 'LocalDeviceIdOrUnionId',
        fromDayString: '2020-05-25',
        toDayString: '2020-05-25',
        webSource: 'Chrome',
        environment: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36',
        customInfo: JSON.stringify({ userId: 123456, biz: 'Live Better' })
      })
      console.log(reportResult)
    }
  }
}
</script> 
