<template>
  <div>
    <div class="mt-8 lg:mt-10 px-6 sm:px-10 lg:px-20 xl:px-32">
      <div class="lg:mt-10">
        <div class="text-white">
          <h2 class="text-2xl lg:text-4xl font-bold">Posts</h2>
          <div class="border-2 border-yellow w-12"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-56">
        <div class="shadow-xl" v-for="(post, index) in posts" :key="index">
          <div class="bg-purple-dark rounded overflow-hidden">
            <div class="flex-shrink-0">
              <nuxt-link :to="`/blog/${post.fields.slug}`"><img class="h-48 w-full object-cover" :src="post.fields.cover.fields.file.url" :alt="post.fields.title" /></nuxt-link>
            </div>
            <div class="text-white mt-2 p-3">
              <h2 class="text-xl xl:text-2xl font-bold"><nuxt-link :to="`/blog/${post.fields.slug}`">{{ post.fields.title }}</nuxt-link></h2>
              <div class="mt-2 font-light text-light-purple" v-html="$md.render(post.fields.content).substring(0, 150) + '...'"></div>
            </div>
            <div class="flex items-center text-white border-t py-2 border-yellow">
              <div class="ml-3">
                <div class="flex text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16">
                    {{ post.sys.createdAt | toDate }}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>

  export default {
    computed: {
        posts() {
          return this.$store.state.posts;
        }
      },
    head(){
      return{
        title: 'Oke Michael | Software Engineer',
        meta: [
          { hid: 'description', name: 'description', content: 'Blog posts' },
          { name: 'keywords', content: ['PHP','Javascript','VueJS','Laravel','ReactJS','Lodash','NuxtJS','WebSocket','InertiaJS'] },
          { name: 'robots', content: 'all' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Oke Michael - Software Engineer' },
          { name: 'twitter:description', content: 'Hello! My name is Oke Michael, i am a software engineer based in Nigeria. I focus majorly on the web..' },
          { name: 'twitter:site', content: '@mykelcodex' },
          { name: 'twitter:image', content: 'https://mykeel.dev/images/homepage.png' },
          { name: 'twitter:creator', content: '@mykelcodex' },
        ],
        link:[
          {
            rel: 'canonical',
            href: 'https://omike.me'
          }
        ]
      }
    },
    mounted(){
      console.log(window.location.href)
    }


  }
</script>

<style lang="scss" scoped>

</style>