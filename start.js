module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        env: {
          PYTHONPATH: "{{[path.resolve(cwd, 'app'), path.resolve(cwd, 'app', 'codeclm', 'tokenizer', 'Flow1dVAE')].join(';')}}"
        },
        path: "app",
        message: [
          "python tools/gradio/app.py ./ckpt/songgeneration_base"
        ],
        on: [{
          "event": "/http:\/\/\\S+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "http://127.0.0.1:{{input.event[0].split(':').pop()}}"
      }
    }
  ]
}
