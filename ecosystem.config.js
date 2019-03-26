module.exports = {
  apps : [{
    name: 'react',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '47.112.201.121',
      ref  : 'origin/master',
      repo : 'git@github.com:xl07097/reactDemo.git',
      path : '/home/xueliang',
      'post-deploy' : 'npm install && npm run build'

      // 'post-deploy' : 'npm install && npm run build pm2 reload ecosystem.config.js --env production'
    }
  }
};
