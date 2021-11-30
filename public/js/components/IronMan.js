/**
   * Change Iron Man text and Main BG
   * @param {boolean} orig If true, will return to original styles.
   */
export const changeTextAndBG = (orig) => {
  if (!orig) {
    $('#iron-man-text').css({
      textShadow: `0 1px 0 #ccc,
      0 2px 0 #c9c9c9,
      0 3px 0 #bbb,
      0 4px 0 #b9b9b9,
      0 5px 0 #aaa,
      0 6px 1px rgba(0,0,0,.1),
      0 0 5px rgba(0,0,0,.1),
      0 1px 3px rgba(0,0,0,.3),
      0 3px 5px rgba(0,0,0,.2),
      0 5px 10px rgba(0,0,0,.25),
      0 10px 10px rgba(0,0,0,.2),
      0 20px 20px rgba(0,0,0,.15)`
    }) // text-shadow: https://css-tricks.com/almanac/properties/t/text-shadow
    $('#iron-man-text').css({ color: 'white' })
    $('body').css({ backgroundColor: '#B41B29' })
  } else {
    $('#iron-man-text').css({ textShadow: '' })
    $('#iron-man-text').css({ color: '#B41B29' })
    $('body').css({ backgroundColor: 'white' })
  }
}

/**
 * Contains JQuery codes
 */
const controller = () => {
  const desktop = window.matchMedia("(min-width: 768px)")
  
  if (desktop.matches) {
    $('#iron-man-map').on('mouseenter', function(){
      // changeTextAndBG(true)
  
      $(document).on('mousemove', (e) => {
        $('#mouse-info').css({
          display: 'grid',
          left:  e.pageX,
          top:   e.pageY,
          opacity: "1"
        })
      })
  
      $("#mouse-info").animate({ opacity: "1" }, 400)
    })
  
    $('#iron-man-map').on('mouseleave', () => {
      // changeTextAndBG(false)
  
      $(document).on('mousemove', (e) => {
        $('#mouse-info').css({
          display: 'none',
          opacity: '0',
          left:  0,
          top:   0
        })
      })
    })
  }

  $('#iron-man-map').on('click', () => {
    changeTextAndBG(false)

    $("#container-im")
    .animate({ top: "-50px" }, 600, "linear")
    .animate({ top: "-1000px", display: "none" }, 200, "linear", () => {
      if (desktop.matches) {
        $('#mouse-info').animate({ opacity: '0', display: 'none' })

        // Animate Iron Man text
        $('#iron-man-text').animate({ 
          marginBottom: "500px",  
          fontSize: "10vw" 
        }, 400, "swing", () => {
          $('#container-about').css({ display: "grid" })
          $('#container-about').animate({ opacity: 1 })
        })
      } else {
        $('#mouse-info').css({ display: 'none', opacity: '0' })

        $('#container-about').css({ display: "grid" })
        $('#container-about').animate({ opacity: 1 })
        return
      }
    })
  })
}

const thrusterColors = `
<div class="red thruster"></div>
<div class="orange thruster"></div>
<div class="yellow thruster"></div>
<div class="white thruster"></div>
`

/**
 * @returns HTML elements in string
 */
const IronMan = (thrusters) => `
<div id="mouse-info">
  <div id="mouse-info-body">
    <p>ABOUT</p>
    <div id="mouse-horizontal"></div>
    <div id="mouse-diagonal"></div>
    <div id="mouse-circle"></div>
  </div>
</div>
<div id="container-im-text">
  <p id="iron-man-text">IRON MAN</p>
</div>
<div id="container-im">
  <img 
    id="iron-man" 
    src="./public/img/iron-man.png" 
    alt="iron-man" 
    usemap="#iron_man_map"
  >
  <map name="iron_man_map" id="iron-man-map">
    <area 
      coords="267,7,255,25,251,49,252,74,248,90,232,102,
        205,109,182,115,171,129,150,149,134,170,116,191,
        100,214,78,233,68,260,56,272,51,286,24,296,10,303,
        1,317,0,334,8,352,21,361,37,365,46,351,51,340,61,
        337,80,332,95,318,98,298,107,286,123,275,136,258,
        145,238,157,231,179,216,188,235,198,274,209,308,
        203,332,189,372,192,407,205,440,215,476,204,495,
        186,534,183,569,170,595,160,614,156,635,147,668,
        149,697,161,716,185,720,203,708,213,687,211,653,
        216,624,222,599,229,580,251,555,267,519,275,524,
        275,553,267,573,252,589,237,627,232,673,223,707,
        201,737,189,752,202,775,212,797,216,818,224,841,
        241,847,257,848,270,835,266,810,268,769,275,724,
        286,699,306,667,324,629,348,564,356,518,367,455,
        365,400,349,358,337,318,337,287,354,302,376,333,
        406,355,427,378,449,387,462,393,484,394,505,378,
        518,359,508,344,485,348,451,337,420,309,392,263,
        393,234,390,175,374,139,354,130,326,110,323,88,
        333,57,334,21,315,3" 
      shape="poly"
    >
  </map>
  <div id="down-triangle"></div>
  <div class="right-hand-thruster container-thruster-hand">
    ${thrusters}
  </div>
  <div class="left-hand-thruster container-thruster-hand">
    ${thrusters}
  </div>
  <div class="right-foot-thruster container-thruster-hand">
    ${thrusters}
  </div>
  <div class="left-foot-thruster container-thruster-hand">
    ${thrusters}
  </div>
</div>
`

export default [ IronMan(thrusterColors), controller ]