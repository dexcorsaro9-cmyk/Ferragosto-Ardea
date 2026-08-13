/* 20 lezioni di acquagym — liv: soft | brucia | fun
   es = [nome, come si fa, secondi consigliati] */
const A = (n, liv, dur, att, play, es) => ({ n, liv, dur, att, play, es: es.map(([e, d, s]) => ({ e, d, s })) });

window.ACQUAGYM = [

/* ---------- SOFT · MATTUTINO ---------- */

A('Risveglio in acqua','soft','25 min','Nessuno','Bossa nova e jazz leggero',[
['Camminata avanti','Acqua all\'altezza del petto, passi lunghi, braccia che spingono l\'acqua indietro.',60],
['Camminata all\'indietro','Stessi passi ma al contrario, sguardo avanti, schiena dritta.',45],
['Cerchi con le braccia','Braccia tese sotto il pelo dell\'acqua, cerchi ampi avanti e poi indietro.',45],
['Ginocchia al petto','Fermi sul posto, alza un ginocchio alla volta portandolo verso il petto.',45],
['Torsioni del busto','Piedi larghi e piantati, ruota il busto a destra e sinistra lasciando che le braccia seguano.',45],
['Calci laterali','Gamba tesa che si apre di lato e torna, aiutandoti con le braccia per stare in equilibrio.',45],
['Spinte sul posto','Mani a coppa, spingi l\'acqua avanti e indietro come se remassi.',45],
['Respirazione lunga','In piedi, inspira alzando le braccia fuori dall\'acqua, espira riabbassandole lentamente.',60]
]),

A('Mobilità e respirazione','soft','25 min','Nessuno','Chill acustico, volume basso',[
['Passi sul posto','Riscaldamento dolce, talloni che toccano il fondo a ogni passo.',60],
['Spalle su e giù','Solleva le spalle verso le orecchie e rilasciale, senti l\'acqua che frena il movimento.',40],
['Collo dolce','Inclina la testa a destra e sinistra, molto lentamente, senza mai forzare.',40],
['Apertura del petto','Braccia dietro la schiena, mani unite, apri il torace guardando in alto.',45],
['Anca in cerchio','Un ginocchio sollevato che disegna cerchi larghi, poi cambia gamba.',50],
['Caviglie','Sollevati sulle punte e torna giù, poi ruota le caviglie una per volta.',45],
['Allungo laterale','Braccio teso sopra la testa, inclinati di lato scivolando lungo la coscia.',50],
['Galleggiamento sulla schiena','Se te la senti, lasciati andare a pelo d\'acqua per un minuto. Solo con qualcuno vicino.',60]
]),

A('Camminata e postura','soft','30 min','Nessuno','Swing e classici italiani',[
['Camminata normale','Due giri di vasca, sentendo il piede che rulla dal tallone alla punta.',60],
['Camminata sulle punte','Stesso percorso, in punta di piedi, addome attivo.',45],
['Camminata sui talloni','Punte sollevate, passi corti, si lavora tutta la parte anteriore della gamba.',45],
['Passo incrociato','Cammina di lato incrociando una gamba davanti all\'altra.',50],
['Camminata con spinta','Braccia che spingono l\'acqua all\'indietro a ogni passo, come se remassi camminando.',60],
['Affondi lenti','Passo lungo avanti, ginocchio piegato, torna su spingendo col tallone.',50],
['Equilibrio su una gamba','Dieci secondi per gamba, occhi aperti. Poi prova a chiuderli.',50],
['Allungamento finale','Gamba tesa appoggiata al bordo, busto avanti, respira.',60]
]),

A('Schiena leggera','soft','30 min','Un noodle (tubo)','Ambient e piano',[
['Camminata di riscaldamento','Due minuti tranquilli, respirando profondamente.',90],
['Scivolamento al bordo','Mani sul bordo, braccia tese, allunga la schiena lasciando galleggiare le gambe.',60],
['Rotazioni del bacino','Noodle sotto le braccia, disegna cerchi larghi col bacino.',50],
['Ginocchia al petto galleggiando','Con il noodle sotto le ascelle, porta le ginocchia al petto e distendile piano.',50],
['Pendolo laterale','Gambe unite che oscillano a destra e sinistra come un pendolo.',50],
['Apertura scapole','Braccia tese avanti sott\'acqua, poi apri largo stringendo le scapole.',45],
['Camminata con schiena al muro','Schiena appoggiata al bordo, cammina di lato tenendo il contatto.',45],
['Rilassamento','Appoggiato al noodle, occhi chiusi, respirazione lenta per un minuto.',60]
]),

A('Gambe e circolazione','soft','30 min','Bordo vasca','Bossa nova',[
['Camminata veloce','Riscaldamento a passo sostenuto.',75],
['Talloni ai glutei','Sul posto, porta i talloni dietro verso i glutei alternando.',50],
['Slancio avanti','Mani al bordo, gamba tesa che va avanti e torna.',45],
['Slancio laterale','Stessa posizione, gamba che si apre di lato.',45],
['Slancio indietro','Gamba tesa che va indietro, senza inarcare la schiena.',45],
['Forbici','Gambe tese davanti che si aprono e chiudono incrociandosi.',50],
['Pedalata','Schiena al bordo, gambe che pedalano nel vuoto.',60],
['Punte e talloni','Sollevati sulle punte e torna giù, venti volte, lentamente.',50]
]),

A('Equilibrio e coordinazione','soft','30 min','Una pallina o un pallone','Playlist anni 60',[
['Camminata a occhi socchiusi','Piano, sentendo dove sono i piedi.',60],
['Cicogna','In piedi su una gamba, l\'altra sollevata, dieci secondi per lato.',50],
['Braccio e gamba opposti','Solleva insieme braccio destro e ginocchio sinistro, poi cambia.',50],
['Passaggio della palla','In cerchio, passaggi rapidi, chi la fa cadere fa cinque saltelli.',60],
['Palla sott\'acqua','Spingi il pallone sotto e lascialo risalire controllandolo con le mani.',45],
['Giro su se stessi','Un giro completo di 360° camminando, poi fermati e trova l\'equilibrio.',45],
['Camminata su linea','Un piede davanti all\'altro, come su una fune.',50],
['Stretching in piedi','Allunga polpacci e quadricipiti tenendo il bordo.',60]
]),

A('Stretching in acqua','soft','25 min','Bordo vasca','Piano solo',[
['Camminata dolce','Due minuti per scaldare, respirando col naso.',90],
['Polpacci al bordo','Punta del piede al muro, tallone in basso, spingi il ginocchio avanti.',50],
['Quadricipite','Afferra la caviglia dietro portando il tallone al gluteo.',50],
['Ischiocrurali','Tallone appoggiato al bordo, gamba tesa, busto che si avvicina.',50],
['Adduttori','Gambe larghe, piegati su un lato allungando l\'interno coscia opposto.',50],
['Schiena','Mani al bordo, sederino indietro, allunga tutta la colonna.',50],
['Spalle','Braccio disteso davanti al petto, spingilo verso di te con l\'altro.',45],
['Respirazione finale','Occhi chiusi, cinque respiri lunghissimi. Fine.',60]
]),

/* ---------- BRUCIA-CALORIE · PRE-APERITIVO ---------- */

A('Aqua HIIT 30/15','brucia','30 min','Nessuno','Dance e house, bpm alto',[
['Corsa sul posto','Riscaldamento, ginocchia alte, braccia che spingono.',60],
['Jumping jack in acqua','Salti aprendo e chiudendo gambe e braccia insieme.',30],
['Ginocchia alte veloci','Il più rapidamente possibile, addome contratto.',30],
['Sci di fondo','Gambe che scivolano avanti e indietro alternate, braccia opposte.',30],
['Calci al sedere','Talloni che battono i glutei a ritmo alto.',30],
['Affondi saltati','Salta cambiando la gamba avanti a ogni salto.',30],
['Spinta laterale','Salti di lato da sinistra a destra, ampi.',30],
['Scatto in avanti','Cinque metri di corsa esplosiva, poi torna camminando.',30],
['Defaticamento','Camminata lenta e respirazione profonda.',90]
]),

A('Corsa in acqua a intervalli','brucia','30 min','Cintura galleggiante se c\'è','Elettronica ritmata',[
['Corsa leggera','Tre minuti in acqua alta o media, ritmo comodo.',90],
['Scatto 20"','Massima intensità per venti secondi.',20],
['Recupero camminando','Respira e recupera.',40],
['Scatto 30"','Ancora al massimo, braccia incluse.',30],
['Recupero','Camminata lenta.',40],
['Corsa in acqua alta','Se la vasca lo permette, senza toccare il fondo.',60],
['Scatto finale','Ultimi venti secondi, tutto quello che resta.',20],
['Defaticamento','Galleggia e respira per due minuti.',90]
]),

A('Gambe e glutei','brucia','35 min','Bordo vasca','Pop energico',[
['Corsa sul posto','Riscaldamento di due minuti.',90],
['Squat in acqua','Piedi larghi, scendi come su una sedia, risali spingendo coi talloni.',45],
['Squat saltato','Stesso movimento ma risalendo con un salto.',35],
['Affondo laterale','Passo largo di lato, piega il ginocchio, torna al centro.',45],
['Slancio glutei','Mani al bordo, gamba tesa che spinge indietro.',45],
['Calcio laterale','Gamba tesa che si apre di lato, controllata anche al ritorno.',45],
['Ponte al bordo','Schiena al muro, gambe piegate, spingi il bacino in alto.',45],
['Camminata sulle punte','Due giri, sentendo bruciare i polpacci.',60],
['Stretching gambe','Quadricipiti e ischiocrurali al bordo.',90]
]),

A('Total body con noodle','brucia','35 min','Un noodle a testa','Funk e disco',[
['Riscaldamento','Camminata veloce con il noodle in mano.',90],
['Spinta sotto','Noodle davanti con entrambe le mani, spingilo sott\'acqua e risali controllando.',45],
['Apertura laterale','Noodle sotto le braccia tese, aprilo e chiudilo davanti al petto.',45],
['Bici seduta','Seduto sul noodle, pedala restando in equilibrio.',60],
['Forbici sospese','Noodle sotto le ascelle, gambe tese che si aprono e chiudono.',50],
['Torsioni','Noodle davanti, ruota il busto a destra e sinistra tenendolo sott\'acqua.',45],
['Rematore','Noodle piegato a U, tira verso il petto e rilascia.',45],
['Corsa con noodle','Corsa sul posto con il noodle tenuto sopra la testa.',40],
['Defaticamento','Sdraiato sul noodle, respirazione.',90]
]),

A('Core e addome','brucia','30 min','Noodle o bordo','Hip hop strumentale',[
['Riscaldamento','Camminata con torsioni del busto.',90],
['Ginocchia al petto','Sospeso al bordo, porta entrambe le ginocchia al petto e distendile.',45],
['Bici','Pedalata in sospensione, addome sempre contratto.',50],
['Forbici verticali','Gambe tese che salgono e scendono alternate.',45],
['Torsione con ginocchia','Ginocchia piegate che ruotano a destra e sinistra.',45],
['Plank al bordo','Mani sul bordo, corpo teso in diagonale, tieni la posizione.',30],
['Pendolo','Gambe unite che oscillano lateralmente il più ampiamente possibile.',45],
['Sollevamento gambe','Schiena al muro, gambe tese che salgono a 90° e scendono piano.',45],
['Allungamento','Braccia al bordo, allunga tutta la fascia addominale.',60]
]),

A('Braccia e spalle','brucia','30 min','Due bottiglie chiuse o tavolette','Rock leggero',[
['Riscaldamento','Camminata con grandi cerchi delle braccia.',90],
['Spinta avanti','Palmi aperti, spingi l\'acqua avanti e riportala indietro con forza.',45],
['Croci','Braccia tese sotto il pelo dell\'acqua, aprile e chiudile davanti al petto.',45],
['Curl','Gomiti al fianco, porta gli avambracci verso l\'alto contro la resistenza.',45],
['Spinta sotto','Tavolette tenute a filo d\'acqua, spingile giù fino ai fianchi.',45],
['Rematore','Piegati in avanti, tira le braccia indietro stringendo le scapole.',45],
['Otto orizzontale','Disegna un otto sott\'acqua con le braccia tese, lento e controllato.',50],
['Spinte alte','Braccia che escono dall\'acqua e rientrano velocemente.',40],
['Stretching spalle','Braccio davanti al petto, poi dietro la nuca.',60]
]),

A('Tabata in piscina','brucia','25 min','Nessuno','Qualsiasi cosa a 140 bpm',[
['Riscaldamento','Corsa leggera e mobilità, tre minuti.',120],
['Corsa massimale','20 secondi al massimo.',20],
['Pausa','10 secondi, respira.',10],
['Jumping jack','20 secondi pieni.',20],
['Pausa','10 secondi.',10],
['Squat saltati','20 secondi.',20],
['Pausa','10 secondi.',10],
['Sci di fondo','20 secondi, ultimo sforzo del ciclo.',20],
['Recupero lungo','Un minuto di camminata, poi si ricomincia da capo per altri due cicli.',60],
['Defaticamento','Galleggia e allunga.',90]
]),

/* ---------- ACQUA-FUN · RAGAZZI E FAMIGLIA ---------- */

A('Aqua dance','fun','30 min','Cassa bluetooth','Tormentoni dell\'estate',[
['Riscaldamento ballato','Muoviti liberamente a tempo, senza schema.',90],
['Passo laterale','Quattro passi a destra, quattro a sinistra, con le braccia.',45],
['Twist','Ruota il bacino sul posto, ginocchia morbide.',45],
['Salto a stella','Jumping jack a tempo di musica.',40],
['Braccia in alto','Su e giù fuori dall\'acqua sul ritornello.',40],
['Coreografia a specchio','Uno guida, gli altri copiano. Cambio ogni trenta secondi.',60],
['Girotondo veloce','Tutti in cerchio mano nella mano, si corre a destra e poi a sinistra.',50],
['Freestyle finale','Ognuno il suo passo, gli altri applaudono.',60]
]),

A('Staffetta e sfide','fun','30 min','Tavolette e oggetti che affondano','Playlist da stadio',[
['Riscaldamento','Due vasche a nuoto libero o camminata veloce.',90],
['Staffetta con tavoletta','Squadre in fila, si porta la tavoletta fino al bordo e si torna.',60],
['Corsa in acqua bassa','Andata e ritorno, il più veloce possibile.',40],
['Recupero oggetti','Chi ne prende di più dal fondo in trenta secondi.',30],
['Trasporto d\'acqua','Bicchiere pieno da un capo all\'altro della vasca senza rovesciarlo.',60],
['Apnea a squadre','Chi resta sotto più a lungo, sempre con qualcuno che guarda.',30],
['Tiro al bersaglio','Palla dentro il salvagente galleggiante, tre tentativi a testa.',60],
['Defaticamento','Galleggiamento e chiacchiere.',90]
]),

A('Aqua boxe','fun','30 min','Nessuno','Rock e colonne sonore',[
['Riscaldamento','Corsa sul posto e rotazioni delle spalle.',90],
['Diretto','Pugni alternati che spingono l\'acqua avanti, guardia alta.',45],
['Gancio','Braccio che gira lateralmente, busto che accompagna.',45],
['Montante','Pugno dal basso verso l\'alto, gambe che spingono.',45],
['Schivate','Piegati sotto il pelo dell\'acqua a destra e sinistra.',45],
['Calcio frontale','Ginocchio su e gamba che spinge avanti, alternando.',45],
['Combinazione','Due diretti, un gancio, una schivata. Ripeti a ritmo.',60],
['Sfogo finale','Trenta secondi di pugni veloci, tutto quello che rimane.',30],
['Defaticamento','Braccia larghe e respirazione lenta.',60]
]),

A('Giochi di squadra in acqua','fun','35 min','Una palla','Playlist estiva',[
['Riscaldamento','Passaggi liberi in cerchio.',90],
['Palla veloce','In cerchio, il passaggio deve durare meno di un secondo. Chi la fa cadere fa una capriola.',60],
['Palla prigioniera','Due squadre, chi viene colpito passa dall\'altra parte.',120],
['Pallanuoto lampo','Partita a cinque gol con le bacinelle come porte.',120],
['Staffetta a coppie','Si nuota tenendosi per mano, senza mai lasciarsi.',60],
['Palla sotto le gambe','In fila, la palla passa sopra la testa e sotto le gambe alternandosi.',60],
['Sfida di equilibrio','In due sul noodle: chi resta su più a lungo.',60],
['Calma finale','Galleggiamento a stella tutti insieme.',60]
]),

A('Aqua zumba','fun','30 min','Cassa bluetooth','Latino: salsa, merengue, reggaeton',[
['Riscaldamento latino','Passi base di merengue sul posto.',90],
['Passo salsa','Avanti e indietro con il peso che si sposta, ginocchia morbide.',50],
['Cumbia','Passo laterale trascinato, braccia che accompagnano.',50],
['Reggaeton','Bacino e spalle, ritmo pieno, si spinge l\'acqua.',50],
['Salto merengue','Piccoli salti sul posto a doppio tempo.',40],
['Giro completo','Un giro su se stessi ogni otto tempi.',40],
['Sequenza intera','Si mettono insieme tutti i passi in una coreografia.',90],
['Defaticamento ballato','Musica lenta, movimenti ampi, respiro.',60]
]),

A('Circuito a stazioni','fun','35 min','Noodle, tavolette, palla','Playlist mista di tutti',[
['Riscaldamento','Camminata veloce e mobilità delle braccia.',90],
['Stazione 1 · corsa','Corsa sul posto a ginocchia alte.',45],
['Stazione 2 · noodle','Spingi il noodle sott\'acqua e risali, senza fermarti.',45],
['Stazione 3 · squat','Squat continui, il più profondo possibile.',45],
['Stazione 4 · braccia','Spinte avanti e indietro con i palmi aperti.',45],
['Stazione 5 · addome','Ginocchia al petto sospeso al bordo.',45],
['Stazione 6 · palla','Passaggi rapidi col compagno, senza far cadere la palla.',45],
['Giro due','Si ricomincia dalla stazione 1, tutto più veloce.',45],
['Defaticamento','Allungamento generale al bordo.',90]
])

];
