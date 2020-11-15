// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md"
      }
    },{
      use:"@gridsome/source-strapi",
      options:{
        apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: "http://localhost:1337",
        // apiURL: "http://101.200.135.46:1337",
        queryLimit: 1000,
        contentTypes:["post","tag"],//拿集合数据
        // typeName: "Strapi",
        singleTypes:["general"],//拿单个节点数据
        // loginData:{
        //   identifier:"",
        //   password:""
        // }
      }
    }
  ],
  templates:{
    StrapiPost:[// typeName+contentTypes拼成
      {
        path: "/post/:id",
        component: "./src/templates/Post.vue"
      }
    ],
    StrapiTag:[
      {
        path: "/tag/:id",
        component: "./src/templates/Tag.vue"
      }
    ]
  }
}
