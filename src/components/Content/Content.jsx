import Nav from "../Nav";
import Background from "../Background";
import styles from "./Content.module.css";
import { useEffect, useRef } from "react";

function Content() {
  const mainRef = useRef();

  useEffect(() => {
    const el = mainRef.current;

    const update = () => {
      const isScrollable = el.scrollHeight > el.clientHeight;
      const atTop = el.scrollTop < 10;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      el.classList.toggle(styles.isScrollable, isScrollable);
      el.classList.toggle(styles.atTop, atTop);
      el.classList.toggle(styles.atBottom, atBottom);
    };

    update();

    el.addEventListener("scroll", update);

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.contentContainer}>
      <Background />
      <main ref={mainRef}>
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          sequi minima ea quasi nostrum aperiam atque consequuntur sunt
          repellendus voluptatum beatae, quibusdam esse maxime id earum tempora,
          necessitatibus vel accusantium ipsa, nam ratione libero dolorum.
          Obcaecati sequi, id tempora ratione accusamus hic rem debitis vel!
          Odio quo repudiandae excepturi ex laborum assumenda placeat veritatis
          veniam impedit, vitae nam dolorem earum, quisquam mollitia
          perspiciatis ipsa iste, debitis repellat obcaecati inventore quas
          aliquam deserunt voluptate. Tempora possimus nisi modi praesentium,
          nihil, repellendus perspiciatis corporis accusantium vitae dolorem
          ratione reiciendis voluptatum quas? Fugiat perferendis odio ipsa minus
          accusantium consectetur! Nobis, libero! Blanditiis omnis dolores
          ratione exercitationem quo illum labore facere recusandae voluptas,
          enim commodi sequi iste accusamus repudiandae tempore illo deleniti
          molestiae excepturi ut consequatur maxime temporibus beatae alias!
          Officia illo eum quibusdam quae quasi, explicabo accusantium ratione
          vero! Ad excepturi possimus consequuntur ratione odit. Eligendi ipsum
          suscipit perferendis architecto quaerat officiis, assumenda animi,
          similique illo temporibus dolores excepturi aspernatur ut quia dicta
          labore? Necessitatibus officia vero, voluptatum reprehenderit dolor,
          officiis distinctio eum temporibus quo, ducimus harum voluptas.
          Ducimus iusto eaque deserunt quas beatae repellat hic inventore
          impedit, modi amet dolores voluptas mollitia ipsa id ab fugit
          deleniti! In quia, reprehenderit eaque praesentium nostrum
          consequuntur accusamus atque odio suscipit sit ea impedit architecto,
          consequatur dolorem dolorum odit harum nisi temporibus esse.
          Consectetur nobis ab, hic, enim repellat commodi voluptatibus nisi
          ratione eos, necessitatibus consequatur perspiciatis fugiat odit quasi
          doloribus id voluptates nesciunt officia aut mollitia esse maiores
          quam modi unde. Provident harum ab nobis possimus fuga? Molestiae
          exercitationem deserunt, earum, quos excepturi quod iure dolore atque
          recusandae doloribus incidunt nam alias, dolor consequuntur. Illum
          dolorem nostrum quasi quae consequatur, tempora praesentium unde
          numquam repudiandae corporis similique est. Sequi, voluptatem, magnam
          nostrum nisi eius animi culpa atque nobis nesciunt harum debitis
          minima reprehenderit. Saepe, modi, maxime, aliquam id doloremque
          delectus consectetur officia rem earum veniam quia vero. Alias
          consequuntur ratione nihil odio tempore illo ut est soluta inventore
          voluptates maiores nulla placeat dolor at unde, doloremque vero
          similique eligendi! Quas iste quidem doloribus molestiae perferendis
          ducimus explicabo nostrum nesciunt neque, deleniti atque odio
          cupiditate eaque, temporibus esse minima mollitia reiciendis maiores
          quaerat quos. Voluptatem harum magnam ipsam illum eius architecto,
          quas ducimus quam, blanditiis praesentium, esse ab dolor corrupti
          voluptatibus. Ea, delectus velit exercitationem, at quasi sit quidem
          ipsum quas recusandae, aliquam ab eligendi aliquid qui veniam ducimus.
          Qui exercitationem ipsam amet, dolorum, totam voluptas suscipit nulla
          molestias magnam voluptatum unde. Error amet cupiditate neque sint
          dolorum quia possimus consequuntur, provident facere itaque, unde
          culpa pariatur ipsam et, rerum praesentium magnam eveniet perspiciatis
          ipsa ullam hic enim deleniti dicta! Laudantium rerum facere, at harum
          magnam quae repudiandae. Error corrupti maiores itaque quis, molestiae
          sapiente reprehenderit magni atque eos alias iusto accusamus? Nostrum,
          repudiandae facilis quisquam distinctio rem eaque consectetur quam qui
          eius veritatis debitis beatae perspiciatis modi dolorum officiis
          itaque quas fugiat nobis ut iure non repellat magni provident. Totam
          harum autem fuga magnam quas eum cumque debitis, accusantium quis
          ratione impedit voluptatem error?
        </p>
      </main>
      <Nav />
    </div>
  );
}

export default Content;
