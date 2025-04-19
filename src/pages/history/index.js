import * as React from "react";
import Layout from "../../components/layout";
const text = {
  title: "History Of Taekwondo",
  headers: {
    header1: "Meaning of the word (Tae Kwon Do)",
    header2: "Taekwondo Origin",
    header3: "Weaponless martial art",
    header6: "Taekwondo in the 20th century",
    heading7: "Taekwondo of Mantkd",
  },
  subHeaders: {
    subHeader1: "The Three Kingdoms period",
    subHeader2: "The Goryeo dynasty",
    subHeader3: "The Joseon Dynasty",
    subHeader4: "the 60s",
    subHeader5: "the 70s",
    subHeader6: "the 80s",
    subHeader7: "the 90s",
  },
  body: {
    body1:
    "Taekwondo is an empty-hand combat form that entails the use of the whole body. Tae means \"to Kick\" or \"Smash with the feet,\" Kwon implies \"punching\" or \"destroying with the hand or fist,\" and Do means \"way\" or \"method.\" Taekwondo thus, is the technique of unarmed combat for self defense that involves the skillful application of techniques that include punching, jumping kicks, blocks, dodges, parrying actions with hands and feet. It is more than a mere physical fighting skill, representing as it does a way of thinking and a pattern of life requiring strict discipline. It is a system of training both the mind and the body in which great emphasis is placed on the development of the trainee's moral character.",
    body2: "The earliest records of Taekwondo practice date back to about 50 B.C. During this time, Korea was divided into three kingdoms: Silla, which was founded on the Kyongju plain in 57 B.C.; Koguryo, founded in the Yalu River Valley in 37 B.C.; and Paekche, founded in the southwestern area of the Korean peninsula in 18 B.C.. (2) Tae Kyon ( also called Subak) is considered the earliest known form of Taekwondo. Paintings from this time period have been found on the ceiling of the Muyong-chong, a royal tomb from the Koguryo dynasty. The paintings show unarmed people using techniques that are very similar to the ones used by Taekwondo today."
  }
};

export default function historyPage () {
    return (
        <Layout pageTitle="History Of Taekwondo">
          <h1>History Of Taekwondo</h1>
        </Layout>
    );
  };
