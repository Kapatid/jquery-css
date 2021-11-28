import { changeTextAndBG } from "./IronMan.js"

const folder = {
  tabs: [
    'Flight', 
    'Artificial Intelligence',
    'Armored Suit',
    'Super Strength + Durability',
  ],
  content: [
    "Iron Man's suit enables Tony Stark to fly, with upgrades increasing the speed capabilities.",
    "An onboard AI system – originally JARVIS, then replaced by FRIDAY – helps Tony control his armor and connect to other systems.",
    "Tony has found increasingly advanced ways to quickly don the armor, from the capability to summon it to him, to nanotech that allows the armor to grow from within a storage unit on his chest.",
    "One of many specialized suits, the Hulkbuster armor is a highly durable, incredibly strong suit that allows Stark to go toe to toe with the teammate for which it is named.",
  ]
}

const controller = () => {
  $('.folder-tabs').append(() => {
    let allString = ''

    folder.tabs.forEach(item => 
      allString += `<div class="folder-tab">${item}</div>`
    )

    return allString
  })

  // Define prevFldr as first tab on load.
  let prevFldr = $('.folder-tab:first')
  $('.folder-content').text(folder.content[0])
  prevFldr.css({backgroundColor: 'white', color: '#B41B29'})

  $('.folder-tab').on('click', function() {
    $(prevFldr).css({backgroundColor: '#B41B29', color: 'white'})

    $(this).css({backgroundColor: 'white', color: '#B41B29'})

    folder.tabs.forEach((item, index) => {
      if (item === $(this).text()) {
        $('.folder-content').text(folder.content[index])
        return
      }
    })

    prevFldr = this
  })

  $("#about-close").on('click', () => {
    $('#container-about').animate({opacity: 0}, 300, "linear",
      () => { // Once opacity of About is 0 animate more
        $('#container-about').css({display: "none"})

        $('#container-im-text').animate({marginBottom: "0px"})

        $('#iron-man-text').animate({fontSize: "17vw"})
        changeTextAndBG(true)
        
        // Animation for Iron Man
        $("#container-im").css({top: "2000px", display: "grid"})
        $("#container-im").animate({
          top: "-50px"
        }, 800, "swing", () => {
          $("#container-im").animate({
            top: "0px"
          }, 1000, "swing")
        })
      }
    )
  })
}

const About = () => `
<div id="container-about">
  <p>
    "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only 
    matched by his high-flying abilities as the hero called Iron Man."
  </p>
  
  <a 
    target=”_blank” 
    href="https://www.marvel.com/characters/iron-man-tony-stark/on-screen/profile">
    - <span>MARVEL</span>.com
  </a>

  <div class="folder">
    <div class="folder-title">POWERS AND ABILITIES</div>
    <div class="folder-tabs"></div>

    <div class="folder-content"></div>
  </div>

  <button id="about-close">CLOSE</button>
</div>
`

export default [ About, controller ]