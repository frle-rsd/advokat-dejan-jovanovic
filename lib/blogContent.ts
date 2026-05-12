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

  "kupovina-stana-depozit-zastita": {
    sr: {
      slug: "kupovina-stana-depozit-zastita",
      title: "Kupujem stan – kako da zaštitim depozit i ne budem prevaren",
      date: "10. mart 2026.",
      excerpt: "Kupovina stana je jedna od najvećih finansijskih odluka u životu. I upravo zato je ovo jedan od slučajeva gde pravni savet nije luksuz - već nužnost. Evo šta proveriti pre nego što date ijedan dinar.",
      content: [
        "Kupovina stana je jedna od najvećih finansijskih odluka u životu. I upravo zato je ovo jedan od slučajeva gde pravni savet nije luksuz - već nužnost.",
        "Najčešći scenario koji vidim: kupac plati depozit, prodavac se predomisli, novac 'nestane'. Ili, stan ima teret koji prodavac nije pomenuo - hipoteku, poreske dugove, sporove o vlasništvu.",
        "Pre nego što date ijedan dinar, proverite list nepokretnosti u Republičkom geodetskom zavodu. Tražite se online ili na šalteru. List nepokretnosti pokazuje: ko je vlasnik, da li postoji hipoteka, da li ima zabeležbe spora ili zabrane otuđenja.",
        "Predugovor je ključni dokument. Mora sadržati: tačan iznos depozita, rok za zaključenje kupoprodajnog ugovora, i šta se dešava ako neka strana odustane. Standardna zaštita: ako prodavac odustane, vraća dupli iznos depozita; ako kupac odustane, gubi depozit.",
        "Nikada ne potpisujte predugovor bez advokata koji je pročitao svaki red. Jedna loše formulisana klauzula može vas koštati celokupnog depozita - ili vas vezati za stan koji ima pravne probleme.",
        "Ako ste već u problemu - prodavac odbija da vrati depozit ili 'nema novca' - postoje pravni mehanizmi. Rok za pokretanje postupka je relativno kratak. Ne čekajte.",
      ],
    },
    en: {
      slug: "kupovina-stana-depozit-zastita",
      title: "Buying an apartment – how to protect your deposit and avoid being cheated",
      date: "10 March 2026",
      excerpt: "Buying a property is one of the biggest financial decisions of your life. And that is exactly why legal advice here is not a luxury - it is a necessity. Here is what to check before you hand over a single euro.",
      content: [
        "Buying a property is one of the biggest financial decisions of your life. And that is exactly why legal advice here is not a luxury - it is a necessity.",
        "The most common scenario I see: a buyer pays a deposit, the seller changes their mind, and the money 'disappears'. Or the property has a burden the seller never mentioned - a mortgage, tax debts, ownership disputes.",
        "Before you hand over a single euro, check the property register at the Republic Geodetic Authority. You can do this online or at a counter. The register shows: who the owner is, whether there is a mortgage, and whether there are any registered disputes or transfer restrictions.",
        "The pre-contract is the key document. It must contain: the exact deposit amount, the deadline for signing the purchase agreement, and what happens if either party withdraws. Standard protection: if the seller withdraws, they return double the deposit; if the buyer withdraws, they lose the deposit.",
        "Never sign a pre-contract without a lawyer who has read every line. One poorly worded clause can cost you your entire deposit - or tie you to a property with legal problems.",
        "If you are already in trouble - the seller refuses to return the deposit or 'has no money' - there are legal mechanisms available. The deadline for initiating proceedings is relatively short. Do not wait.",
      ],
    },
  },

  "iseljenje-stanara-prava": {
    sr: {
      slug: "iseljenje-stanara-prava",
      title: "Gazda hoće da me iseli – koja su moja prava kao stanara?",
      date: "28. februar 2026.",
      excerpt: "Vlasnik stana je promenio bravu, vratio ključeve ili prosto rekao da se iseli do kraja meseca. Bez ugovora, bez sudske odluke. Je li to legalno? Odgovor je skoro uvek: ne.",
      content: [
        "Vlasnik stana vam je promenio bravu, vratio ključeve ili jednostavno rekao da se iseli do kraja meseca - bez ugovora, bez sudske odluke, bez ikakvog pravnog osnova. Je li to legalno? Odgovor je skoro uvek: ne.",
        "Prema srpskom pravu, stanodavac ne može da iseli stanara samovoljno, bez obzira da li postoji pisani ugovor ili ne. Čak i usmeni sporazum o najmu stvara pravni odnos koji se mora poštovati.",
        "Jedini zakonit način da vlasnik dobije nazad posed stana jeste putem suda - tužbom za iseljenje. Taj postupak može trajati mesecima. Do pravosnažne sudske odluke, stanar ima pravo da ostane u stanu.",
        "Ako vam je stanodavac promenio bravu ili onemogućio pristup stanu - to je protivpravno oduzimanje poseda. Imate pravo da odmah pokrenete postupak za vraćanje poseda pred mesno nadležnim sudom. Rokovi su kratki, ali zaštita je stvarna.",
        "Posebno je važno dokumentovati sve: sačuvajte poruke, mejlove, a ako postoji ugovor - čuvajte ga na sigurnom mestu. Ako nemate pisani ugovor, dokumentujte plaćanje kirije (izvodi sa računa, uplatnice).",
        "Ako imate ugovor i stanodavac želi da ga raskine pre roka - mora imati zakonit razlog (neplaćanje kirije, oštećenje stana, itd.) i mora vam dati otkazni rok. Jednostrano raskidanje bez osnova vam daje pravo na naknadu štete.",
      ],
    },
    en: {
      slug: "iseljenje-stanara-prava",
      title: "My landlord wants to evict me – what are my rights as a tenant?",
      date: "28 February 2026",
      excerpt: "The landlord changed the locks, handed back the keys or simply told you to leave by end of month. No contract, no court order. Is that legal? The answer is almost always: no.",
      content: [
        "Your landlord has changed the locks, taken back the keys or simply told you to leave by end of month - no contract, no court order, no legal basis whatsoever. Is that legal? The answer is almost always: no.",
        "Under Serbian law, a landlord cannot evict a tenant unilaterally, regardless of whether a written contract exists or not. Even a verbal rental agreement creates a legal relationship that must be respected.",
        "The only lawful way for an owner to reclaim possession of a property is through court - by filing an eviction claim. That process can take months. Until a final court decision, the tenant has the right to remain in the property.",
        "If your landlord has changed the locks or blocked your access to the property - that is unlawful dispossession. You have the right to immediately initiate possession recovery proceedings before the competent court. Deadlines are short, but the protection is real.",
        "It is important to document everything: save messages and emails, and if a contract exists - keep it somewhere safe. If you have no written contract, document rent payments (bank statements, payment receipts).",
        "If you have a contract and the landlord wants to terminate it before the agreed term - they must have a lawful reason (non-payment of rent, property damage, etc.) and must give you a notice period. Unilateral termination without grounds gives you the right to claim damages.",
      ],
    },
  },

  "starateljstvo-dete-razvod": {
    sr: {
      slug: "starateljstvo-dete-razvod",
      title: "Ko dobija dete posle razvoda – kako funkcioniše starateljstvo u Srbiji",
      date: "5. januar 2026.",
      excerpt: "Ovo je pitanje koje čujem najčešće pri razvodu. I uvek odgovaram isto: sud ne 'daje' dete ni ocu ni majci - sud određuje šta je u najboljem interesu deteta. Evo kako to zapravo funkcioniše.",
      content: [
        "Ovo je pitanje koje čujem najčešće pri razvodu. I uvek odgovaram isto: sud ne 'daje' dete ni ocu ni majci. Sud određuje šta je u najboljem interesu deteta - a to je jedini kriterijum koji pravno postoji.",
        "Postoje dve vrste starateljstva: zajedničko i samostalno. Zajedničko starateljstvo znači da oba roditelja zajedno donose važne odluke o detetu - o školovanju, lečenju, putovanjima. Dete može živeti pretežno s jednim roditeljem, ali oba ostaju ravnopravno uključena.",
        "Samostalno starateljstvo se dodeljuje jednom roditelju kada zajednički sporazum nije moguć ili kada jedan roditelj nije u stanju da se bavi detetom. Drugi roditelj i dalje ima pravo na viđanje.",
        "Sud uzima u obzir mnoštvo faktora: uzrast deteta, njegovu volju (naročito ako je starije od 10 godina), koji roditelj je bio primarni negovatelj, uslove stanovanja, zdravlje, prisustvo nasilja u porodici.",
        "Najvažnija stvar koju mogu da vam kažem: pokušajte sporazumno. Sudski postupci o starateljstvu su emotivno iscrpljujući za celu porodicu, a posebno za decu. Ako postoji makar minimum dobre volje, sporazumno rešenje štiti sve strane.",
        "Ako sporazum nije moguć - ja sam tu da zastupam vaše i interese vašeg deteta pred sudom. Ali uvek ću pre toga pokušati pregovarački put.",
      ],
    },
    en: {
      slug: "starateljstvo-dete-razvod",
      title: "Who gets the child after divorce – how custody works in Serbia",
      date: "5 January 2026",
      excerpt: "This is the question I hear most often in divorce cases. And I always give the same answer: the court does not 'give' the child to either parent - it determines what is in the child's best interest. Here is how it actually works.",
      content: [
        "This is the question I hear most often in divorce cases. And I always give the same answer: the court does not 'give' the child to either the mother or the father. The court determines what is in the child's best interest - and that is the only legal criterion that exists.",
        "There are two types of custody: joint and sole. Joint custody means both parents jointly make important decisions about the child - education, medical treatment, travel. The child may primarily live with one parent, but both remain equally involved.",
        "Sole custody is awarded to one parent when a joint arrangement is not possible or when one parent is unable to care for the child. The other parent still retains the right to contact and visitation.",
        "The court considers many factors: the child's age, their wishes (especially if they are over 10), which parent was the primary caregiver, living conditions, health, and the presence of any family violence.",
        "The most important thing I can tell you: try to reach an agreement. Contested custody proceedings are emotionally exhausting for the entire family, and especially for the children. If there is any minimum of goodwill, an agreed solution protects everyone.",
        "If an agreement is not possible - I am here to represent your interests and your child's interests before the court. But I will always attempt negotiation first.",
      ],
    },
  },
};
