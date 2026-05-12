export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const blogContent: Record<string, { sr: BlogPost; en: BlogPost }> = {
  "nezakoniti-otkaz-povratak-na-posao": {
    sr: {
      slug: "nezakoniti-otkaz-povratak-na-posao",
      title: "Otpustili su me bez razloga – i vratio sam se na posao",
      date: "15. april 2025.",
      excerpt:
        "Klijent me je kontaktirao dan nakon što je dobio rešenje o otkazu. Nije potpisao nikakvu saglasnost, nije počinio nikakav disciplinski prekršaj - firma je prosto htela da ga se reši. Evo kako smo to rešili.",
      content: [
        "Klijent me je kontaktirao dan nakon što je dobio rešenje o otkazu. Čitao je dokument iznova i iznova, ali nije mogao da pronađe jedinstven konkretan razlog. Firma je navodila 'organizacione promene' - ali iza tog izraza stajala je lična i neosnovana odluka direktora.",
        "Prema Zakonu o radu, poslodavac ima pravo da otpusti zaposlenog samo iz taksativno navedenih razloga: povreda radnih obaveza, neispunjenje uslova za radno mesto ili tehnološki višak uz ponudu otpremnine. Ništa od toga nije bio slučaj mog klijenta.",
        "Odmah smo pokrenuli radni spor pred Osnovnim sudom. Zatražili smo da sud utvrdi nezakonitost otkaza i obaveže poslodavca da klijenta vrati na radno mesto, uz isplatu svih zaostalih zarada i doprinosa za period dok nije radio.",
        "Na prvom ročištu, zastupnik firme je tvrdio da je posao mog klijenta 'automatizovan' i da njegovo radno mesto 'više ne postoji'. Tražili smo dokumentaciju: organigram pre i posle, akte o sistematizaciji, ugovore sa novim zaposlenima. Firma ih nije mogla pružiti - jer ih nije ni bilo.",
        "Sud je presudio u korist klijenta. Otkaz je proglašen nezakonitim, a firma je obavezana da ga vrati na posao i isplati celokupnu zaradu za period od osam meseci. Klijent se vratio na radno mesto.",
        "Svake godine u Srbiji hiljade nezakonitih otkaza prođe nekažnjeno jer zaposleni ne znaju da imaju rok od 60 dana da pokrenu spor. Ako ste dobili otkaz koji smatrate nezakonitim - ne čekajte. Rok je kratak, ali pravo je na vašoj strani ako znate kako da ga iskoristite.",
      ],
    },
    en: {
      slug: "nezakoniti-otkaz-povratak-na-posao",
      title: "They fired me without reason – and I got my job back",
      date: "15 April 2025",
      excerpt:
        "A client reached out the day after receiving his termination notice. He hadn't signed any agreement, hadn't committed any disciplinary offence - the company simply wanted to get rid of him. Here's how we fixed it.",
      content: [
        "A client reached out the day after receiving his termination notice. He read the document over and over but couldn't find a single concrete reason. The company cited 'organisational changes' - but behind that phrase stood a personal and unfounded decision by the director.",
        "Under Serbian labour law, an employer can only dismiss an employee for specific, enumerated reasons: breach of work duties, failure to meet job requirements, or redundancy with severance offered. None of these applied to my client.",
        "We immediately filed a labour dispute before the Basic Court. We sought a ruling that the dismissal was unlawful and an order requiring the employer to reinstate our client - along with payment of all outstanding wages and social contributions for the period he was out of work.",
        "At the first hearing, the company's representative claimed my client's role had been 'automated' and his position 'no longer existed'. We requested documentation: the organisational chart before and after, job classification acts, contracts with any new employees. The company couldn't produce them - because they didn't exist.",
        "The court ruled in our client's favour. The dismissal was declared unlawful, the company was ordered to reinstate him and pay eight months of back wages in full. Our client returned to work.",
        "Every year in Serbia, thousands of unlawful dismissals go unchallenged simply because employees don't know they have a 60-day window to file a claim. If you've been dismissed and believe it was unlawful - don't wait. The deadline is short, but the law is on your side if you know how to use it.",
      ],
    },
  },

  "razvod-bez-sudjenja": {
    sr: {
      slug: "razvod-bez-sudjenja",
      title: "Razvod bez suđenja – kako smo zaštitili dete i sačuvali mir",
      date: "2. mart 2025.",
      excerpt:
        "Razvod ne mora da bude rat. Kada su deca u pitanju, svaki dan napetosti ostavlja trag. Pomogao sam dvoje roditelja da se sporazumno razvedu, regulišu starateljstvo i podele imovinu - bez jednog ročišta.",
      content: [
        "Razvod ne mora da izgleda kao rat. Ovo je lekcija koju sam naučio radeći sa parom koji je imao petogodišnje dete i zajedničku imovinu - stan i automobil - ali i zajedničku volju da se razvodu pristupa zrelo.",
        "Kada su me kontaktirali, situacija je bila tipična: oboje su hteli razvod, ali nisu znali kako da to urade bez godinama dugog suđenja i bez da povrede jedno drugo - a posebno dete. Predložio sam sporazumni razvod.",
        "Sporazumni razvod pred sudom u Srbiji zahteva samo jedno ročište ako su sve okolnosti dogovorene: ko dobija starateljstvo, kako izgleda viđanje sa detetom, ko plaća alimentaciju i kako se deli imovina. Ključna reč je 'dogovorene'.",
        "Proveli smo tri nedelje radeći na sporazumu. Usaglašavali smo model starateljstva, definisali raspored viđanja, uskladili iznos alimentacije sa zakonskim okvirom i realnom vrednošću imovine. Svaki detalj je bio u funkciji zaštite deteta, a ne odbrane ega.",
        "Na ročištu je sudija potvrdio sporazum, utvrdio da su interesi deteta zaštićeni i doneo presudu. Ceo postupak je trajao mesec i po od prvog razgovora do pravosnažne presude.",
        "Razvod je uvek bolan. Ali ne mora biti destruktivan. Ako postoji i minimalna volja za dogovorom, sporazumni razvod štedi vreme, novac i, što je najvažnije, štiti decu od nepotrebnih trauma.",
      ],
    },
    en: {
      slug: "razvod-bez-sudjenja",
      title: "Divorce without a trial – protecting the child and keeping the peace",
      date: "2 March 2025",
      excerpt:
        "Divorce doesn't have to be a war. When children are involved, every day of tension leaves a mark. I helped two parents reach an amicable divorce, settle custody and divide property - without a single hearing.",
      content: [
        "Divorce doesn't have to look like a war. That's the lesson I learned working with a couple who had a five-year-old child and shared assets - an apartment and a car - but also a shared willingness to approach the divorce maturely.",
        "When they contacted me, the situation was typical: both wanted a divorce, but didn't know how to proceed without years of litigation or hurting each other - and especially the child. I proposed an amicable divorce.",
        "An amicable divorce in Serbia requires just one hearing if all terms are agreed: who gets custody, what visitation looks like, who pays alimony, and how assets are divided. The key word is 'agreed'.",
        "We spent three weeks working on the agreement. We aligned on a custody model, defined a visitation schedule, adjusted alimony to the legal framework and realistic asset values. Every detail served to protect the child, not defend anyone's ego.",
        "At the hearing, the judge confirmed the agreement, verified that the child's interests were protected and issued the judgment. The entire process took six weeks from first contact to final ruling.",
        "Divorce is always painful. But it doesn't have to be destructive. If there is even a minimum willingness to reach an agreement, an amicable divorce saves time, money and - most importantly - protects children from unnecessary trauma.",
      ],
    },
  },

  "tuča-krivična-odbrana": {
    sr: {
      slug: "tuča-krivična-odbrana",
      title: "Tuča ispred kafane – kako smo izbegli zatvorsku kaznu",
      date: "18. januar 2025.",
      excerpt:
        "Klijent optužen za telesnu povredu posle incidenta u kom je, kako je tvrdio, bio napadnut prvi. Argument samoodbrane, pogrešno primenjen, mogao je da ga košta slobode. Evo kako smo izgradili odbranu.",
      content: [
        "Noć je bila petak. Moj klijent je izašao iz kafane i zatekao grupu koja je već imala sukob sa njim par sati ranije unutra. Kada je pokušao da prođe, napali su ga. U nastaloj tuči, dva čoveka su povređena. Moj klijent je bio onaj koji je zadao udarce.",
        "Optužnica je glasila: telesna povreda. Kazna - do tri godine zatvora. Na prvi pogled, izgledalo je loše: on je udario. Ali krivično pravo nije samo 'ko je udario', nego 'zašto'.",
        "Nužna odbrana u srpskom krivičnom pravu isključuje krivičnu odgovornost ako je reakcija bila srazmerna napadu, a napad neposredan, protivpravan i stvarni. Ključna greška u mnogim odbrambenim strategijama je oslanjanje isključivo na iskaz optuženog.",
        "Mi smo pristupili drugačije. Pribavili smo snimak nadzorne kamere ispred objekta koji je pokazao ko je krenuo prema klijentu. Pronašli smo svedoke koji su pratili celu situaciju. Angažovali smo veštaka koji je analizirao položaje tela i tok sukoba.",
        "Na suđenju, tužilaštvo je tvrdilo da je moj klijent 'mogao da pobegne'. Odgovor: u srpskom pravu ne postoji obaveza bekstva. Postoji samo obaveza srazmernosti. Napad je bio fizički, klijent nije koristio oružje, a sila je primenjena samo da zaustavi napadače.",
        "Presuda: oslobođen. Nužna odbrana je utvrđena. Klijent je izašao iz sudnice slobodan čovek. Lekcija: snimak ili svedoci nisu sami po sebi pobednička odbrana. Bez pravne strategije, svaki dokaz može biti protumačen na dva načina.",
      ],
    },
    en: {
      slug: "tuča-krivična-odbrana",
      title: "Bar fight – how we avoided a prison sentence",
      date: "18 January 2025",
      excerpt:
        "A client charged with bodily harm after an incident in which, as he claimed, he was attacked first. A self-defence argument, if misapplied, could have cost him his freedom. Here's how we built the defence.",
      content: [
        "It was a Friday night. My client left a bar and encountered a group that had already had a confrontation with him a few hours earlier inside. When he tried to walk past, they attacked him. In the ensuing fight, two men were injured. My client was the one who landed the blows.",
        "The charge: bodily harm. The sentence - up to three years in prison. At first glance, it looked bad: he did hit them. But criminal law isn't just 'who hit whom' - it's 'why'.",
        "Self-defence under Serbian criminal law excludes criminal liability if the response was proportionate to the attack, and the attack was immediate, unlawful and real. The critical mistake in many defence strategies is relying solely on the defendant's statement.",
        "We took a different approach. We obtained CCTV footage from outside the venue that showed who moved toward my client first. We found witnesses who had observed the entire situation. We engaged an expert who analysed body positions and the sequence of events.",
        "At trial, the prosecution argued my client 'could have run away'. Our reply: there is no duty to flee under Serbian criminal law. There is only a duty of proportionality. The attack was physical, my client used no weapons, and force was applied only to stop the attackers.",
        "Verdict: acquitted. Self-defence established. My client walked out of the courtroom a free man. The lesson: footage or witnesses alone are not a winning defence. Without a legal strategy, any piece of evidence can be read two ways.",
      ],
    },
  },
};
