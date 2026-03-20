import { useState } from "react";
import Intro from "./components/Intro";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showLoading && (
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "100%",
            position: "fixed",
          }}
        />
      )}
      {showIntro && (
        <div id="intro-container">
          <Intro
            onStart={() => {
              setShowLoading(false);
            }}
            onFinish={() => setShowIntro(false)}
          />
        </div>
      )}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        perspiciatis quae temporibus. Tenetur nulla minima adipisci iure
        doloribus eveniet, impedit excepturi sequi itaque sapiente illum
        asperiores eligendi voluptate in ex, est alias neque? Dolorum nostrum
        in, quia incidunt totam vitae voluptatibus obcaecati modi expedita.
        Tempora, suscipit hic aperiam illum eos perferendis magnam alias.
        Reiciendis illo sed eius provident rem ipsam nulla, quod exercitationem
        autem vero, maxime mollitia corporis modi nesciunt asperiores sint ut
        dolore saepe veritatis assumenda magni. Adipisci dolorem consectetur
        repellat provident cumque eum dolorum similique tenetur ipsa suscipit.
        Soluta amet, a facere maiores voluptas possimus beatae porro. Aliquam
        aperiam expedita, ea error, earum natus sapiente ab eius illo, eligendi
        veritatis quasi. Corporis, a! Quas consequuntur quibusdam amet. Deleniti
        esse porro maiores neque magni! Mollitia, inventore distinctio? Minus
        natus dolorum distinctio debitis alias culpa, dolor necessitatibus
        dolorem dignissimos deserunt voluptatum veniam est reprehenderit
        architecto at temporibus nisi quibusdam, velit voluptates delectus
        deleniti cupiditate officia? Minima odio porro dolorum tenetur sed
        temporibus illo in aperiam accusantium beatae, necessitatibus eum cum
        dicta perferendis laudantium voluptas ut minus modi delectus, quod
        repellendus hic quia voluptatem! Pariatur, quisquam odit recusandae
        magnam illo ad harum optio! Vitae voluptas dolore tempora voluptatum
        sunt explicabo atque dolores ut illum fuga, delectus eligendi magnam
        possimus nostrum rerum enim aperiam quibusdam repellendus recusandae
        veniam veritatis unde! Fugit, amet. Tempore ducimus nulla facilis harum.
        Harum sequi ducimus ullam illo asperiores dolores aperiam voluptatem
        repellat aliquam deserunt consectetur deleniti quasi commodi autem
        quibusdam reiciendis, modi fugiat amet. Asperiores quo dicta in corrupti
        alias! Dolor, vitae, harum in maxime similique explicabo sunt, dolores
        laudantium corrupti delectus doloribus. Vel consequatur, eum reiciendis
        odio id sed. Nam saepe, deserunt eaque ratione distinctio obcaecati,
        exercitationem provident itaque omnis fugiat optio iure ipsa autem modi
        doloribus temporibus sint necessitatibus eos impedit sit veniam placeat
        vitae quo rem. Rerum, molestiae quas quia ipsa esse labore? Qui odit a,
        exercitationem voluptate explicabo reprehenderit nostrum fuga reiciendis
        quas corporis natus ab nobis unde quis non possimus consectetur repellat
        delectus dolor eaque. Architecto aliquid officiis placeat ullam dicta
        pariatur voluptatum quibusdam aut? Cum impedit facere mollitia, veniam
        eligendi necessitatibus beatae possimus minus vero amet neque
        repudiandae hic quas dolorem voluptate eum, eius recusandae eaque quis
        obcaecati vel autem laboriosam est magni. Asperiores quod distinctio aut
        quidem expedita? Quod veritatis harum aperiam iste et tempore, saepe
        rem! Quia ratione corrupti ut nostrum blanditiis, earum officiis quas
        hic repellendus? Soluta ipsa libero laborum deleniti temporibus pariatur
        fugit quibusdam placeat? Debitis magnam dolore a qui, aliquam eaque
        consectetur ullam blanditiis cumque placeat modi enim quam? Dolor
        aliquam repellat, ipsa est mollitia hic! Quo voluptate explicabo velit
        quam unde quia eum eaque ipsam, earum debitis ut voluptatibus? Harum,
        odit repellat, dicta et aliquam veritatis assumenda facere modi voluptas
        perspiciatis totam odio ipsam magni nesciunt exercitationem animi
        commodi sunt id rerum qui excepturi iure ea dolores repudiandae.
        Eligendi cumque quibusdam ad et doloribus. Odio, consectetur laboriosam.
        Vero eveniet repellendus, nesciunt quod molestias, assumenda atque
        tenetur velit fugit voluptatibus quis iusto harum laboriosam nostrum
        magni.
      </h1>
    </>
  );
}

export default App;
