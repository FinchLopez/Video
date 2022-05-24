const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

    $play.addEventListener('click',handlePlay)
    $pause.addEventListener('click',handlePause )
    $backward.addEventListener('click',handbackward)
    $forward.addEventListener('click',handleforward)

    function handlePlay(){
        console.log('Reproducir video')

        $video.play()
        $play.hidden = true
        $pause.hidden = false
    }

    function handlePause(){
        console.log('Pausar video')
        $play.hidden = false
        $pause.hidden = true
        $video.pause()
    }

    function handbackward(){
        //$video.currentTime = $video.currentTime - 10
        $video.currentTime -=10
        console.log('Retoceder 10 segundos', $video.currentTime)
    }

    function handleforward(){
        $video.currentTime = $video.currentTime + 10
        console.log('Avanzar 10 segundos', $video.currentTime)
    }

    const $progress = document.querySelector('#progress')
    $video.addEventListener('loadedmetadata',handleLoaded)
    $video.addEventListener('timeupdate',handleTimeUpdate)


    function handleLoaded(){
        $progress.max =$video.duration
        console.log('a cargado el video',$video.duration)
    }

    function handleTimeUpdate(){
        $progress.value= $video.currentTime
        //console.log('Ke Hace',$video.currentTime)
    }

    $progress.addEventListener('input',handleInput)

    function handleInput(){
        $video.currentTime = $progress.value
        console.log($progress.value)
    }

