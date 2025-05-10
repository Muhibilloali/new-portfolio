import React from "react";
import { RoughNotation } from "react-rough-notation";
import ".././App.css";
const About = ({ sendData }) => {
  return (
    <div
      name="hakkımda"
      className="  text-slate-900 dark:text-slate-300  bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div className="p-4 container mx-auto flex flex-col justify-center w-full h-full">
        <p className="text-4xl font-extrabold text-slate-900 dark:text-white">
          <RoughNotation
            type="underline"
            animationDelay={1000}
            strokeWidth={5}
            show={sendData}
            color="#457b9d"
          >
            Hakkımda
          </RoughNotation>
        </p>

        <p className="text-xl mt-10">
          Selam! Ben
          <span class="bg-clip-text text-transparent mx-0.5  bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 p-2">
            Muhibillo Ali 
          </span>
           25 yaşındayım ve şu anda İstanbul’da yaşıyorum.
          <span class="bg-clip-text text-transparent mx-0.5 p-2  bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
            Sakarya Üniversitesi
          </span>
          Bilgisayar Mühendisliği 3. sınıf öğrencisiyim, şu anda akademik izin
          sürecindeyim. Aynı zamanda{" "}
          <span class="bg-clip-text text-transparent mx-0.5  bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
            Astrum IT Academy.
          </span>{" "}
          ’de Frontend Developer eğitimi alarak bu alanda uzmanlaştım. Web
          geliştirme serüvenim 2022 yılında, Shopify temasını düzenlemeye
          çalışırken başladı. Küçük bir "sepete ekle" butonu oluşturmam, bana
          HTML ve CSS hakkında düşündüğümden çok daha fazlasını öğretti! O
          günden beri teknolojiye olan merakım ve bir şeylerin nasıl çalıştığını
          anlama isteğim beni bu yolda motive etmeye devam ediyor. Frontend
          geliştirmeyi seviyorum çünkü fikirlerin gerçeğe dönüştüğünü görmek
          beni mutlu ediyor. Tasarım, kullanıcı deneyimi ve işlevselliği bir
          araya getirip çalışır bir proje ortaya çıkardığımda gerçekten gurur
          duyuyorum.
          
          <span class="bg-clip-text text-transparent mx-0.5 pl-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
          İngilizce (B1)
          </span>{" "},
          <span class="bg-clip-text text-transparent mx-0.5  bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
          Rusça (A2)
          </span>{" "}
ve
          <span class="bg-clip-text text-transparent mx-0.5 pl-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
          Japonca (N4)
          </span>{" "}
              bilgim var.
          Sürekli öğrenmeye ve kendimi geliştirmeye açık biriyim. Yeni
          teknolojilerle çalışmak, ekip içinde fikir alışverişi yapmak ve ortaya
          güzel işler koymak benim için çok keyifli.
        </p>

       
        <br />
        <p className="text-xl ">
        Göz atmak isterseniz, işte {" "}
          <a
            className="dark:text-black mx-2 "
            href="/alicv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <RoughNotation
              type="highlight"
              animationDelay={1000}
              padding={20}
              show={true}
              color="#8ac926"
            >
              özgeçmişim
            </RoughNotation>
          </a>{" "}
          
        </p>
      </div>
    </div>
  );
};

export default About;
