var constraints = { audio: false, video: { width: 480, height: 380 } };
var video, canvas,ctx
navigator.mediaDevices.getUserMedia(constraints)
.then(stream=> {
  video = document.querySelector('video');
  canvas = document.querySelector("canvas")
  ctx = canvas.getContext('2d');
  video.srcObject = stream;
    canvas.width = video.width
  canvas.height = video.height
  video.onloadedmetadata = function(e) {
    video.play();
    setInterval(()=>{
      updateFrame(ctx,video)
    },24)
  };
})

function updateFrame(ctx,video){
  ctx.drawImage(video,0,0)
  QCodeDecoder().decodeFromImage(canvas.toDataURL(),(err,res)=>{
    if(res){
      console.log(res)
    }
  })

}
