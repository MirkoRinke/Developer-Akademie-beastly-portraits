// Template NavContainer
function renderNavContainerHTML() {
  return /*html*/ ` 
  <div class="nav_container--nav">
    <img
        onclick="window.location.href='./index.html';"
        class="nav_container--nav--logo"
        src="./assets/icons/logo.svg"
        alt="Beastly Portraits Logo" />
      <h1 
        onclick="window.location.href='./index.html';" 
        class="nav_container--nav--logo_text">
        Beastly Portraits
      </h1>
  </div>
  `;
}
// Template Content
function renderContentHTML() {
  let gallery1 = /*html*/ `
    <div class="gallery_container--grid">     
      <img src="./assets/img/biene.jpg" alt="Eine fleißige Honigbiene ist bei der Arbeit zu sehen, während sie Nektar aus einer großen, lilafarbenen Blüte saugt." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/enten.jpg" alt="Kleine, flauschige Entenküken kuscheln sich dicht aneinander, während ihre Mutter wachsam aufpasst." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/erdmaennchen.jpg" alt="Mehrere Erdmännchen posieren auf einem felsigen Untergrund, während sie ihre Umgebung aufmerksam beobachten." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/hund.jpg" alt="Ein Hund mit kurzem Fell ruht sich auf einem Bett aus und ist bis auf die Nase unter einer grauen Decke versteckt." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/igel.jpg" alt="Ein Igel mit braunem Fell und schwarzen Augen steht in einem Laubwald und blickt direkt in die Linse." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/katze.jpg" alt="Eine gestreifte Katze liegt auf dem Rücken und ist bis auf den Kopf unter einer floralen Decke versteckt." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/pferd.jpg" alt="Vier braune Pferde, darunter ein Fohlen, grasen auf einer grünen Alm inmitten einer hügeligen Landschaft." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/pinguine.jpg" alt="Mehrere schwarz-weiße Königs-Pinguine mit orangenen Flecken an den Ohren stehen auf einem Felsen und blicken in dieselbe Richtung." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/faultier.jpg" alt="Ein Faultier hängt entspannt an einem Baumast, umgeben von grünen Blättern und blauem Himmel im Hintergrund." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/ameisenbaer.jpg" alt="Ein ausgewachsener Riesenameisenbär mit langem, schmalem Kopf und kräftigen Krallen bewegt sich vorsichtig über eine grasbewachsene Fläche in einem zooähnlichen Umfeld." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/walross.jpg" alt="Ein großes, braun gefärbtes Walross mit langen Stoßzähnen liegt entspannt auf einem felsigen Ufer und genießt die Sonne." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/papagei.jpg" alt="Zwei Aras mit leuchtend roten und blauen Federn sitzen nebeneinander auf einem Zweig und blicken sich an." class="gallery_container--grid--img filter-mayfair" />
    </div>
`;
  let gallery2 = /*html*/ `
    <div class="gallery_container--grid d_none">
      <img src="./assets/img/reh.jpg" alt="Zwei junge Rehe mit geflecktem Fell stehen nebeneinander auf einer Waldwiese." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/streifenhoernchen.jpg" alt="Ein braun-weiß gestreiftes Streifenhörnchen sitzt auf einem Blatt und verzehrt genüsslich eine Nuss, während es von grünen Blättern umgeben ist." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/vogel.jpg" alt="Ein schwarz-weißer Star mit gelbem Schnabel ist auf einem Zweig mit kleinen, gelben Blüten niedergelassen." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/wolf.jpg" alt="Ein grauer Wolf mit gelben Augen liegt entspannt auf einem mit Moos bewachsenen Baumstumpf inmitten eines grünen Waldes." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/loewe.jpg" alt="Eine Gruppe von Löwen, bestehend aus zwei stehenden und einem liegenden Tier, posiert auf dem Dach eines gelben Geländewagens vor einem Hintergrund aus Bäumen." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/elefant.jpg" alt="Ein kleines Elefantenbaby streckt seinen Rüssel aus, um das Gras zu erreichen, das seine Mutter ihm anbietet." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/giraffe.jpg" alt="Eine Giraffe mit ihrem charakteristischen Fleckenmuster steht in einer weiten Savannenlandschaft." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/zebra.jpg" alt="Ein schwarz-weiß gestreiftes Zebra mit großen Ohren blickt aufmerksam in die Kamera." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/kaenguru.jpg" alt="Ein braunes Känguru mit großen Ohren steht aufrecht in einem hohen Grasfeld und blickt in die Kamera." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/nashorn.jpg" alt="Ein großes Breitmaulnashorn steht neben ihrem kleineren Kalb in einer weiten Graslandschaft. Beide Tiere blicken aufmerksam in die Ferne." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/gorilla.jpg" alt="Ein Gorilla steht neben einem Baum in einem natürlichen oder zooähnlichen Gehege, umgeben von Gras, Felsen und Bäumen im Hintergrund." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/delfin.jpg" alt="Ein Delfin schwimmt fröhlich auf dem Rücken durch türkisfarbenes Wasser." class="gallery_container--grid--img filter-mayfair" />
    </div>
`;
  let gallery3 = /*html*/ `
    <div class="gallery_container--grid d_none">
      <img src="./assets/img/schneeleopard.jpg" alt="Das kleine Schneeleopardjungtier hockt wachsam auf einem Ast und scannt seine Umgebung mit seinen großen, grünen Augen." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/adler.jpg" alt="Junger Rotmilan mit typischer Gefiederzeichnung sitzt aufmerksam auf einem kahlen Ast in einem Laubwald." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/krokodil.jpg" alt="Der Kopf eines Krokodils mit scharfen Zähnen und einer schuppigen Haut ist in Nahaufnahme zu sehen." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/koala.jpg" alt="Ein grauer Koala mit großen Ohren sitzt entspannt auf einem Ast." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/fuchs.jpg" alt="Ein Fuchs mit rotem Fell ruht sich in einer Wiese aus und beobachtet seine Umgebung." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/eule.jpg" alt="Eine gut getarnte Sperbereule beobachtet ihre Umgebung von einem kahlen Ast aus." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/schaf.jpg" alt="Ein weißes Lamm mit geschlossenen Augen liegt auf Stroh vor einer hölzernen Scheunenwand." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/chamaeleon.jpg" alt="Ein grüner chamaeleon mit großen Augen ruht wachsam auf einem groben Stück Holz und scannt seine Umgebung." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/otter.jpg" alt="Ein braun-schwarzer Otter sitzt auf einem Baumstamm und zeigt seine Zähne in einem breiten Grinsen." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/luchs.jpg" alt="Ein gefleckter Luchs sitzt auf einem moosbewachsenen Baumstamm in einem herbstlichen Wald und beobachtet seine Umgebung." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/schildkroete.jpg" alt="Eine Echte Karettschildkröte gleitet elegant durch kristallklares Wasser und umrundet ein farbenfrohes Korallenriff." class="gallery_container--grid--img filter-mayfair" />
      <img src="./assets/img/baer.jpg" alt="Ein neugieriges Braunbärjunges steht auf einem umgestürzten Baumstamm und beobachtet seine Umgebung." class="gallery_container--grid--img filter-mayfair" />
    </div>
`;

  return /*html*/ ` 
  <div id="popup" class="popup">
      <svg id="popup--back_button" class="popup--back_button" viewBox="0 -960 960 960">
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
      <span class="popup--close">&times;</span>
      <div class="popup--img_container">
        <img class="popup--img_container--content" id="popup--image" />        
        <svg id="popup--forward_button_mobile" class="popup--forward_button popup--forward_button_mobile" viewBox="0 -960 960 960">
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>  
        <p class="popup--img_container--textarea" id="popup--textarea"></p>
      </div>
      <svg id="popup--forward_button" class="popup--forward_button" viewBox="0 -960 960 960">
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
  </div>
  <section class="gallery_container">
    ${gallery1}
    ${gallery2}
    ${gallery3}
    <div onclick="getNextGallery()">
      <svg id="gallery_container--next_gallery" class="gallery_container--next_gallery" viewBox="0 -960 960 960">
        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
      </svg>
    </div>
  </section> 
`;
}

// Template footerContainer
function renderFooterContainerHTML() {
  let footerImgLoop = /*html*/ `  
  <ul>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/reh.jpg" alt="Zwei junge Rehe mit geflecktem Fell stehen nebeneinander auf einer Waldwiese." />Januar</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/adler.jpg" alt="Junger Rotmilan mit typischer Gefiederzeichnung sitzt aufmerksam auf einem kahlen Ast in einem Laubwald." />Februar</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/koala.jpg" alt="Ein grauer Koala mit großen Ohren sitzt entspannt auf einem Ast." />März</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/fuchs.jpg" alt="Ein Fuchs mit rotem Fell ruht sich in einer Wiese aus und beobachtet seine Umgebung." />April</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/eule.jpg" alt="Eine gut getarnte Sperbereule beobachtet ihre Umgebung von einem kahlen Ast aus." />Mai</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/kaenguru.jpg" alt="Ein braunes Känguru mit großen Ohren steht aufrecht in einem hohen Grasfeld und blickt in die Kamera." />Juni</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/giraffe.jpg" alt="Eine Giraffe mit ihrem charakteristischen Fleckenmuster steht in einer weiten Savannenlandschaft." />Juli</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/elefant.jpg" alt="Ein kleines Elefantenbaby streckt seinen Rüssel aus, um das Gras zu erreichen, das seine Mutter ihm anbietet." />August</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/baer.jpg" alt="Ein neugieriges Braunbärjunges steht auf einem umgestürzten Baumstamm und beobachtet seine Umgebung." />September</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/krokodil.jpg" alt="Der Kopf eines Krokodils mit scharfen Zähnen und einer schuppigen Haut ist in Nahaufnahme zu sehen." />Oktober</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/wolf.jpg" alt="Ein grauer Wolf mit gelben Augen liegt entspannt auf einem mit Moos bewachsenen Baumstumpf inmitten eines grünen Waldes." />November</li>
    <li><img class="footer_container--grid--img filter-mayfair" src="./assets/img/schneeleopard.jpg"  alt="Das kleine Schneeleopardjungtier hockt wachsam auf einem Ast und scannt seine Umgebung mit seinen großen, grünen Augen." />Dezember</li>
  </ul>
  `;
  return /*html*/ `
 <div id="popupFooter" class="popupFooter">
    <span class="popupFooter--close">&times;</span>
    <img class="popupFooter--content" id="popupFooter--image" />
    <p class="popupFooter--textarea" id="popupFooter--textarea"></p>
  </div>
  <div class="footer_container--footer">
    <h2 class="footer_container--footer--heading">Tierische Highlights des Jahrs: Ein Jahr voller Vielfalt</h2>
    <div class="footer_container--footer--loop">
      ${footerImgLoop}
      ${footerImgLoop}
      ${footerImgLoop}
    </div>
  </div>
    `;
}
