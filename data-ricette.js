/* 50 ricette estive — quantità PER PERSONA, l'app le moltiplica.
   m = momento: pranzo | cena | dolce
   tg = tag: sf senza forno · ve pronti in 10' · gr grigliata · pu piatto unico/da spiaggia · vg vegetariano · pe pesce
   reparti: V verdura · P pescheria · C macelleria · L latticini/uova · D dispensa · B pane/forno · X altro */
const R = (n, m, t, tg, ing, p) => ({
  n, m, t, tg,
  ing: ing.map(([q, u, nm, r]) => ({ q, u, n: nm, r })),
  p
});

window.RICETTE = [

/* ---------- PRANZI, FREDDI, PIATTI UNICI ---------- */

R('Insalata di riso della cambusa','pranzo','25 min + frigo',['sf','pu','ve'],
[[80,'g','riso','D'],[40,'g','tonno sott\'olio','D'],[60,'g','pomodorini','V'],[25,'g','mais','D'],[15,'g','olive verdi','D'],[0.5,'pz','uova','L'],[20,'g','sottaceti misti','D'],[1,'qb','olio e basilico','D']],
['Lessa il riso in acqua salata, scolalo al dente e raffreddalo sotto l\'acqua fredda.','Condisci subito con un filo d\'olio così non si attacca, poi unisci tutto il resto tagliato a pezzetti.','Un\'ora in frigo prima di servire: guadagna moltissimo.']),

R('Panzanella','pranzo','15 min',['sf','vg','pu'],
[[70,'g','pane raffermo','B'],[150,'g','pomodori maturi','V'],[20,'g','cipolla rossa','V'],[50,'g','cetrioli','V'],[1,'qb','basilico, aceto, olio','D']],
['Bagna il pane in acqua fredda per 5 minuti e strizzalo bene tra le mani.','Sbriciolalo in una ciotola grande con pomodori a spicchi, cetriolo e cipolla affettata sottile.','Condisci con olio, aceto, sale e tanto basilico. Lascia riposare 20 minuti.']),

R('Pasta fredda al pesto di pomodori secchi','pranzo','20 min',['sf','vg','pu'],
[[90,'g','pasta corta','D'],[25,'g','pomodori secchi','D'],[15,'g','mandorle','D'],[15,'g','parmigiano','L'],[50,'g','pomodorini','V'],[40,'g','ciliegine di mozzarella','L']],
['Frulla pomodori secchi ammollati, mandorle, parmigiano, basilico e olio fino a crema.','Cuoci la pasta, scolala al dente e raffreddala sotto l\'acqua.','Manteca con il pesto, unisci pomodorini e ciliegine. Ottima anche tiepida.']),

R('Insalata di farro, feta e cetrioli','pranzo','20 min',['sf','vg','pu'],
[[70,'g','farro','D'],[40,'g','feta','L'],[60,'g','cetrioli','V'],[60,'g','pomodorini','V'],[15,'g','olive nere','D'],[1,'qb','menta e limone','V']],
['Lessa il farro, scolalo e stendilo su un vassoio per raffreddarlo in fretta.','Unisci cetrioli a mezzaluna, pomodorini, olive e feta a cubetti.','Condisci con olio, succo di limone e menta spezzettata a mano.']),

R('Caprese di bufala, crudo e pane','pranzo','10 min',['sf','ve'],
[[100,'g','mozzarella di bufala','L'],[120,'g','pomodori cuore di bue','V'],[50,'g','prosciutto crudo','C'],[80,'g','pane','B'],[1,'qb','basilico e origano','V']],
['Affetta i pomodori spessi, salali e lasciali scolare 5 minuti.','Componi il piatto alternando pomodoro, bufala strappata a mano e crudo.','Olio, origano, basilico. Pane a fette accanto e via.']),

R('Cous cous di verdure e gamberi','pranzo','25 min',['sf','pe','pu'],
[[70,'g','cous cous','D'],[60,'g','gamberi sgusciati','P'],[60,'g','zucchine','V'],[50,'g','peperoni','V'],[30,'g','carote','V'],[1,'qb','limone e menta','V']],
['Salta le verdure a cubetti piccoli in padella, 6-7 minuti, devono restare croccanti.','Nella stessa padella scotta i gamberi 2 minuti con olio e limone.','Idrata il cous cous con acqua bollente salata pari peso, sgrana con la forchetta e unisci tutto.']),

R('Frittata di zucchine e menta','pranzo','20 min',['vg','ve'],
[[1.5,'pz','uova','L'],[80,'g','zucchine','V'],[15,'g','parmigiano','L'],[1,'qb','menta','V'],[40,'g','insalata mista','V']],
['Rosola le zucchine a rondelle sottili finché non prendono colore.','Sbatti le uova con parmigiano, sale e menta, versale in padella.','Cuoci a fuoco basso, gira con l\'aiuto di un piatto. Buonissima fredda il giorno dopo.']),

R('Gazpacho all\'italiana','pranzo','15 min + frigo',['sf','vg','ve'],
[[200,'g','pomodori maturi','V'],[50,'g','cetrioli','V'],[40,'g','peperoni','V'],[15,'g','cipollotto','V'],[20,'g','pane raffermo','B'],[25,'g','tarallini','B']],
['Frulla pomodori, cetriolo, peperone, cipollotto e pane ammollato con olio e un goccio di aceto.','Passa al colino se lo vuoi vellutato, poi almeno 2 ore in frigo.','Servi freddissimo con un filo d\'olio e i tarallini sbriciolati sopra.']),

R('Insalata di pasta tonno, olive e capperi','pranzo','20 min',['sf','pu','ve'],
[[90,'g','pasta corta','D'],[45,'g','tonno sott\'olio','D'],[20,'g','olive taggiasche','D'],[8,'g','capperi','D'],[60,'g','pomodorini','V'],[1,'qb','origano','D']],
['Cuoci la pasta molto al dente, raffreddala e ungila subito con olio.','Unisci tonno sgocciolato, olive, capperi dissalati e pomodorini a metà.','Origano e pepe. Regge benissimo in borsa frigo fino a sera.']),

R('Piadine caprese','pranzo','10 min',['vg','ve','pu'],
[[1.5,'pz','piadine','B'],[70,'g','mozzarella','L'],[80,'g','pomodori','V'],[1,'qb','basilico','V']],
['Scalda le piadine in padella 1 minuto per lato.','Farcisci con mozzarella scolata, pomodoro a fette salato e basilico.','Piega, taglia a metà, avvolgi nella carta forno per portarle in spiaggia.']),

R('Piadine crudo, rucola e squacquerone','pranzo','10 min',['ve','pu'],
[[1.5,'pz','piadine','B'],[50,'g','prosciutto crudo','C'],[60,'g','squacquerone','L'],[20,'g','rucola','V']],
['Scalda le piadine, spalmale con lo squacquerone ancora calde.','Aggiungi crudo e rucola, senza esagerare col sale.','Arrotolale strette e taglia in due.']),

R('Insalata di pollo, mais e sedano','pranzo','25 min',['sf','pu'],
[[100,'g','petto di pollo','C'],[30,'g','mais','D'],[30,'g','sedano','V'],[40,'g','insalata','V'],[10,'g','maionese o yogurt','L'],[1,'qb','limone','V']],
['Lessa il petto di pollo 15 minuti con carota e sedano, poi lascialo raffreddare nel suo brodo.','Sfilaccialo a mano e condiscilo con limone, olio e sale.','Unisci sedano a fettine, mais e insalata, lega con un cucchiaio di maionese o yogurt.']),

R('Vitello tonnato veloce','pranzo','20 min + frigo',['sf'],
[[90,'g','arrosto di vitello a fette','C'],[35,'g','tonno sott\'olio','D'],[15,'g','maionese','D'],[6,'g','capperi','D'],[1,'qb','limone','V']],
['Frulla tonno, capperi, maionese e qualche goccia di limone fino a salsa liscia.','Disponi le fette di arrosto su un vassoio e coprile con la salsa.','Frigo per almeno un\'ora, capperi interi sopra prima di servire.']),

R('Insalata di orzo, zucchine grigliate e pesto','pranzo','25 min',['vg','pu'],
[[70,'g','orzo perlato','D'],[90,'g','zucchine','V'],[20,'g','pesto','D'],[30,'g','ricotta salata','L'],[1,'qb','menta','V']],
['Griglia le zucchine a fette sottili, poi tagliale a striscioline.','Lessa l\'orzo e raffreddalo.','Condisci con pesto allungato con un filo d\'acqua, zucchine e ricotta salata grattugiata.']),

R('Melanzane a funghetto','pranzo','30 min',['vg','sf'],
[[150,'g','melanzane','V'],[60,'g','pomodorini','V'],[1,'qb','aglio e basilico','V'],[70,'g','pane','B']],
['Taglia le melanzane a cubi e falle saltare in padella larga con olio e aglio a fuoco vivo.','Quando sono dorate unisci i pomodorini e cuoci 10 minuti.','Basilico a crudo. Da mangiare tiepida col pane, o fredda sotto l\'ombrellone.']),

R('Tramezzini della casa','pranzo','15 min',['sf','ve','pu'],
[[2,'pz','pane per tramezzini','B'],[30,'g','tonno sott\'olio','D'],[0.5,'pz','uova','L'],[15,'g','maionese','D'],[40,'g','pomodori','V'],[15,'g','insalata','V']],
['Prepara due farciture: tonno e maionese, uovo sodo e insalata.','Farcisci generosamente al centro, così restano gonfi.','Taglia in diagonale e avvolgi nella pellicola: reggono tutta la mattina in frigo.']),

R('Insalata greca','pranzo','10 min',['sf','vg','ve'],
[[120,'g','pomodori','V'],[70,'g','cetrioli','V'],[50,'g','feta','L'],[20,'g','olive nere','D'],[20,'g','cipolla rossa','V'],[1,'qb','origano','D']],
['Taglia pomodori e cetrioli a pezzi grossi, non a cubetti piccoli.','Unisci cipolla affettata e olive.','Feta a fette intere sopra, origano e olio abbondante. Niente aceto.']),

R('Cannellini, tonno e cipolla di Tropea','pranzo','10 min',['sf','ve','pu'],
[[90,'g','fagioli cannellini lessati','D'],[45,'g','tonno sott\'olio','D'],[25,'g','cipolla di Tropea','V'],[1,'qb','prezzemolo e aceto','V']],
['Sciacqua i cannellini e scolali bene.','Affetta la cipolla sottilissima e lasciala 10 minuti in acqua e aceto per addolcirla.','Unisci il tonno a pezzi, prezzemolo, olio e pepe.']),

R('Pomodori ripieni di riso','pranzo','1 h',['vg'],
[[2,'pz','pomodori grandi','V'],[35,'g','riso','D'],[150,'g','patate','V'],[1,'qb','aglio e basilico','V']],
['Svuota i pomodori, frulla la polpa e mescolala col riso crudo, olio, sale e basilico. Riposo 30 minuti.','Riempi i pomodori per 3/4, coprili col cappello.','Forno 180° per 50 minuti con le patate a spicchi intorno.']),

R('Insalata di ceci, feta e menta','pranzo','10 min',['sf','vg','ve','pu'],
[[90,'g','ceci lessati','D'],[35,'g','feta','L'],[50,'g','pomodorini','V'],[30,'g','cetrioli','V'],[1,'qb','menta e limone','V']],
['Scola e sciacqua i ceci.','Unisci pomodorini, cetriolo, feta sbriciolata e menta.','Condisci con olio, limone e pepe. Meglio dopo mezz\'ora di frigo.']),

R('Wrap di verdure grigliate e hummus','pranzo','25 min',['vg','pu'],
[[1.5,'pz','tortillas','B'],[60,'g','melanzane','V'],[60,'g','zucchine','V'],[40,'g','peperoni','V'],[50,'g','hummus','D'],[15,'g','rucola','V']],
['Griglia le verdure a fette e condiscile con olio, sale e menta.','Spalma l\'hummus sulla tortilla, aggiungi verdure e rucola.','Arrotola stretto, taglia in due in diagonale.']),

R('Pasta fredda greca','pranzo','20 min',['sf','vg','pu'],
[[90,'g','pasta corta','D'],[45,'g','feta','L'],[60,'g','pomodorini','V'],[50,'g','cetrioli','V'],[20,'g','olive nere','D'],[1,'qb','origano','D']],
['Cuoci la pasta al dente e raffreddala.','Unisci cetriolo a cubetti, pomodorini, olive e feta.','Origano, olio, scorza di limone. Meglio prepararla la mattina.']),

R('Insalata di patate, fagiolini e uova','pranzo','30 min',['sf','vg'],
[[180,'g','patate','V'],[80,'g','fagiolini','V'],[1,'pz','uova','L'],[15,'g','olive','D'],[1,'qb','prezzemolo e aceto','V']],
['Lessa insieme patate a tocchi e fagiolini, scolali quando sono ancora sodi.','Condisci da tiepidi con olio, aceto e sale: assorbono meglio.','Aggiungi uova sode a spicchi e olive.']),

R('Caponata siciliana','pranzo','45 min',['vg','sf'],
[[150,'g','melanzane','V'],[40,'g','sedano','V'],[30,'g','cipolla','V'],[60,'g','passata di pomodoro','D'],[15,'g','olive verdi','D'],[8,'g','capperi','D'],[1,'qb','aceto e zucchero','D']],
['Friggi le melanzane a cubi e scolale su carta.','A parte stufa cipolla e sedano, unisci passata, olive e capperi.','Rimetti le melanzane, sfuma con aceto e un cucchiaino di zucchero. Servila fredda, il giorno dopo è più buona.']),

R('Bruschette in tris','pranzo','20 min',['vg','ve'],
[[90,'g','pane casereccio','B'],[90,'g','pomodori','V'],[40,'g','ricotta','L'],[25,'g','olive per patè','D'],[1,'qb','aglio e basilico','V']],
['Tosta il pane e strofinalo con aglio finché è caldo.','Prepara tre ciotole: pomodoro a cubetti, ricotta con scorza di limone, patè di olive.','Ognuno si compone la sua. Condisci solo al momento o il pane si ammolla.']),

R('Focaccia con mortadella e stracciatella','pranzo','15 min',['ve','pu'],
[[110,'g','focaccia','B'],[50,'g','mortadella','C'],[50,'g','stracciatella','L'],[10,'g','pistacchi','D']],
['Scalda appena la focaccia e aprila a libro.','Farcisci con stracciatella, mortadella a velo e pistacchi tritati.','Taglia a quadrotti e servi subito.']),

R('Riso venere con gamberi e avocado','pranzo','30 min',['pe','pu','sf'],
[[70,'g','riso venere','D'],[60,'g','gamberi','P'],[50,'g','avocado','V'],[50,'g','pomodorini','V'],[1,'qb','lime','V']],
['Lessa il riso venere (ci mette 35 minuti) e raffreddalo.','Scotta i gamberi 2 minuti in acqua bollente salata, poi in acqua e ghiaccio.','Unisci avocado a cubi e pomodorini, condisci con olio, lime e sale.']),

R('Bresaola, rucola e grana','pranzo','5 min',['sf','ve'],
[[60,'g','bresaola','C'],[20,'g','rucola','V'],[20,'g','grana a scaglie','L'],[1,'qb','limone','V']],
['Disponi la bresaola a raggiera sul piatto.','Al centro rucola condita con olio, limone e sale.','Scaglie di grana sopra e pepe macinato al momento.']),

R('Zucchine alla scapece e mozzarella','pranzo','30 min',['vg','sf'],
[[150,'g','zucchine','V'],[90,'g','mozzarella','L'],[1,'qb','menta, aglio, aceto','V'],[70,'g','pane','B']],
['Friggi le zucchine a rondelle sottili e scolale.','Condiscile da calde con aceto, menta, aglio a lamelle e sale. Riposo un\'ora.','Servi con mozzarella e pane.']),

R('Insalata di mare con patate e sedano','pranzo','35 min',['pe','sf'],
[[150,'g','misto di mare surgelato','P'],[100,'g','patate','V'],[30,'g','sedano','V'],[1,'qb','prezzemolo e limone','V']],
['Lessa il misto di mare 8-10 minuti in acqua con limone, scolalo.','Lessa le patate a cubi tenendole sode.','Condisci tutto da tiepido con olio, limone, prezzemolo e sedano a fettine.']),

/* ---------- CENE ---------- */

R('Spaghetti alle vongole','cena','35 min',['pe'],
[[90,'g','spaghetti','D'],[200,'g','vongole','P'],[1,'qb','aglio, prezzemolo, peperoncino','V'],[20,'ml','vino bianco','X']],
['Fai spurgare le vongole in acqua e sale grosso per un paio d\'ore.','Aprile in padella coperta con aglio e olio, sfuma col vino, filtra l\'acqua e tieni da parte.','Salta gli spaghetti scolati molto al dente nella padella con l\'acqua delle vongole, manteca e prezzemolo.']),

R('Pesce spada alla griglia con salmoriglio','cena','25 min',['gr','pe'],
[[180,'g','pesce spada','P'],[0.4,'pz','limoni','V'],[1,'qb','origano e prezzemolo','V'],[60,'g','insalata','V']],
['Prepara il salmoriglio: olio, succo di limone, origano, prezzemolo, sale, emulsionati con un goccio d\'acqua tiepida.','Griglia le fette 2-3 minuti per lato su piastra rovente, non di più.','Spennella subito col salmoriglio e servi con insalata.']),

R('Parmigiana di melanzane','cena','1 h 30',['vg'],
[[250,'g','melanzane','V'],[150,'g','passata di pomodoro','D'],[60,'g','mozzarella','L'],[25,'g','parmigiano','L'],[1,'qb','basilico','V']],
['Friggi o griglia le melanzane a fette e falle asciugare su carta.','Prepara un sugo semplice con passata, aglio e basilico, 20 minuti.','Alterna gli strati, ultimo di sugo e parmigiano. Forno 180° per 40 minuti, poi riposo 20 minuti prima di tagliare.']),

R('Grigliata mista','cena','45 min',['gr'],
[[100,'g','salsicce','C'],[150,'g','costine o pollo','C'],[80,'g','zucchine','V'],[60,'g','peperoni','V'],[60,'g','pane','B']],
['Accendi il fuoco 40 minuti prima: serve brace, non fiamma.','Comincia dalle carni più lunghe (costine), poi salsicce, per ultime le verdure a fette.','Sala solo a fine cottura. Pane sulla griglia negli ultimi minuti.']),

R('Polpo e patate','cena','1 h',['pe','sf'],
[[180,'g','polpo','P'],[200,'g','patate','V'],[10,'g','olive taggiasche','D'],[1,'qb','prezzemolo e limone','V']],
['Cuoci il polpo in acqua non salata 40 minuti, poi lascialo raffreddare nella sua acqua: resta morbido.','Lessa le patate a tocchi.','Taglia il polpo, condisci tutto con olio, limone, prezzemolo e olive. Tiepido o freddo.']),

R('Pasta alla Norma','cena','40 min',['vg'],
[[90,'g','pasta','D'],[120,'g','melanzane','V'],[120,'g','passata di pomodoro','D'],[20,'g','ricotta salata','L'],[1,'qb','basilico','V']],
['Friggi le melanzane a cubi e tienile da parte.','Sugo veloce di passata, aglio e basilico.','Condisci la pasta, aggiungi le melanzane e finisci con ricotta salata grattugiata in abbondanza.']),

R('Serata pizza fatta in casa','cena','3 h (lievitazione)',['vg']  ,
[[130,'g','farina','D'],[1,'g','lievito di birra secco','D'],[70,'g','passata di pomodoro','D'],[70,'g','mozzarella','L'],[1,'qb','origano e olio','D']],
['Impasta farina, acqua (60%), lievito e sale. Lievitazione 3 ore, o tutta la mattina in frigo.','Stendi a mano su teglie unte, condisci col pomodoro.','Forno al massimo, mozzarella solo negli ultimi 5 minuti. Sforna e infila subito la successiva.']),

R('Linguine al limone e gamberi','cena','25 min',['pe','ve'],
[[90,'g','linguine','D'],[80,'g','gamberi','P'],[0.4,'pz','limoni','V'],[50,'g','zucchine','V'],[20,'g','robiola','L']],
['Salta le zucchine a julienne, poi unisci i gamberi per 2 minuti.','Sciogli la robiola con scorza e succo di limone e un mestolo di acqua di cottura.','Manteca le linguine nella crema, pepe abbondante.']),

R('Orata al cartoccio','cena','45 min',['pe'],
[[250,'g','orate','P'],[80,'g','pomodorini','V'],[15,'g','olive','D'],[0.3,'pz','limoni','V'],[150,'g','patate','V']],
['Pulisci le orate e mettile su un foglio di carta forno con pomodorini, olive, limone e un rametto di rosmarino.','Chiudi il cartoccio sigillando bene i bordi.','Forno 200° per 25-30 minuti, con le patate a spicchi in una teglia a parte.']),

R('Spiedini di pollo alla paprika','cena','30 min + marinatura',['gr'],
[[160,'g','petto di pollo','C'],[60,'g','peperoni','V'],[40,'g','cipolla','V'],[1,'qb','paprika, limone, yogurt','D'],[150,'g','patate','V']],
['Marina il pollo a cubi con yogurt, paprika, limone e olio per almeno un\'ora.','Infila sugli spiedini alternando peperone e cipolla.','Griglia 10-12 minuti girando spesso. Patate al forno come contorno.']),

R('Paccheri pomodorini e pesce spada','cena','30 min',['pe'],
[[90,'g','paccheri','D'],[100,'g','pesce spada','P'],[100,'g','pomodorini','V'],[15,'g','mandorle','D'],[1,'qb','menta','V']],
['Rosola il pesce spada a cubetti 2 minuti e toglilo dalla padella.','Fai il sugo coi pomodorini schiacciati, 10 minuti.','Rimetti il pesce, condisci i paccheri, finisci con mandorle tostate e menta.']),

R('Hamburger di famiglia alla griglia','cena','30 min',['gr'],
[[150,'g','macinato di manzo','C'],[1,'pz','panini da hamburger','B'],[30,'g','cheddar o provola','L'],[40,'g','pomodori','V'],[20,'g','insalata','V'],[20,'g','cipolla','V']],
['Forma gli hamburger senza lavorare troppo la carne, spessi 2 cm, e falli riposare in frigo.','Griglia 3-4 minuti per lato, formaggio sopra all\'ultimo minuto.','Tosta i panini sulla griglia e monta con insalata, pomodoro e cipolla.']),

R('Calamari grigliati e insalata di rucola','cena','25 min',['gr','pe','ve'],
[[180,'g','calamari puliti','P'],[25,'g','rucola','V'],[0.3,'pz','limoni','V'],[1,'qb','prezzemolo e aglio','V']],
['Apri i calamari a libro e incidili a griglia con la punta del coltello.','Piastra rovente, 2 minuti per lato, niente di più o diventano gomma.','Condisci caldi con olio, limone, prezzemolo e aglio tritato. Rucola sotto.']),

R('Risotto al limone e gamberi','cena','35 min',['pe'],
[[80,'g','riso carnaroli','D'],[70,'g','gamberi','P'],[0.4,'pz','limoni','V'],[20,'g','burro','L'],[20,'ml','vino bianco','X']],
['Prepara un brodo leggero con le teste dei gamberi, sedano e carota.','Tosta il riso, sfuma col vino, poi brodo poco alla volta per 16 minuti.','Manteca fuori dal fuoco con burro, succo e scorza di limone. Gamberi scottati sopra.']),

R('Cozze alla marinara e bruschette','cena','30 min',['pe','ve'],
[[350,'g','cozze','P'],[60,'g','pane','B'],[1,'qb','aglio, prezzemolo, peperoncino','V'],[80,'g','pomodorini','V']],
['Pulisci le cozze raschiando i gusci e togliendo il bisso.','Aprile in pentola larga con aglio, olio e pomodorini, coperchio, 6-7 minuti.','Prezzemolo e pepe, bruschette tostate per raccogliere il fondo.']),

R('Salsicce e peperoni alla griglia','cena','35 min',['gr'],
[[150,'g','salsicce','C'],[120,'g','peperoni','V'],[70,'g','pane','B'],[1,'qb','origano','D']],
['Punzecchia appena le salsicce e mettile sulla parte meno calda della brace.','Griglia i peperoni interi finché la buccia non si annerisce, poi spellali e condiscili con olio e aglio.','Servi insieme, col pane abbrustolito.']),

R('Spaghetti aglio, olio, peperoncino e alici','cena','15 min',['ve'],
[[90,'g','spaghetti','D'],[3,'g','filetti di alici','D'],[1,'qb','aglio e peperoncino','V'],[15,'g','pangrattato','D']],
['Scalda olio, aglio e peperoncino a fuoco bassissimo, sciogli le alici.','Tosta il pangrattato a parte in padella asciutta.','Salta gli spaghetti nel condimento con acqua di cottura, pangrattato sopra. La cena delle 23.']),

R('Tagliata di manzo e verdure gratinate','cena','40 min',['gr'],
[[180,'g','controfiletto di manzo','C'],[100,'g','zucchine','V'],[80,'g','melanzane','V'],[20,'g','pangrattato','D'],[20,'g','rucola','V']],
['Condisci le verdure a fette con pangrattato, origano e olio, forno 200° per 20 minuti.','Cuoci la carne su piastra rovente 3 minuti per lato, poi 5 minuti di riposo coperta.','Taglia a fette contro fibra, sale grosso, rucola e olio.']),

R('Pollo al limone in padella','cena','30 min',['ve'],
[[160,'g','petto di pollo','C'],[0.5,'pz','limoni','V'],[10,'g','farina','D'],[1,'qb','prezzemolo','V'],[150,'g','patate','V']],
['Infarina leggermente le fettine e rosolale 2 minuti per lato.','Sfuma col succo di limone e mezzo bicchiere d\'acqua, fai restringere.','Prezzemolo e servi con patate lesse o insalata.']),

/* ---------- DOLCI ---------- */

R('Tiramisù freddo senza cottura','dolce','25 min + frigo',['sf','vg'],
[[80,'g','mascarpone','L'],[0.7,'pz','uova','L'],[20,'g','zucchero','D'],[4,'pz','savoiardi','D'],[60,'ml','caffè','X'],[1,'qb','cacao amaro','D']],
['Monta i tuorli con lo zucchero, unisci il mascarpone e infine gli albumi a neve.','Inzuppa i savoiardi nel caffè freddo, velocemente.','Alterna due strati, cacao solo al momento di servire. Almeno 4 ore in frigo.']),

R('Granita al caffè con panna','dolce','10 min + freezer',['sf','vg'],
[[100,'ml','caffè','X'],[15,'g','zucchero','D'],[40,'g','panna da montare','L']],
['Zucchera il caffè da caldo e mettilo in una teglia bassa nel freezer.','Ogni 30 minuti raschialo con la forchetta, per 3 ore.','Servi in bicchiere con panna montata poco zuccherata.']),

R('Macedonia anguria e menta','dolce','15 min',['sf','vg','ve'],
[[250,'g','anguria','V'],[80,'g','pesche','V'],[0.3,'pz','lime','V'],[1,'qb','menta','V']],
['Taglia anguria e pesche a cubi regolari.','Condisci con succo di lime e menta spezzettata a mano.','Mezz\'ora in frigo. Zucchero solo se la frutta non è matura.']),

R('Coppa yogurt, pesche e amaretti','dolce','10 min',['sf','vg','ve'],
[[120,'g','yogurt greco','L'],[90,'g','pesche','V'],[20,'g','amaretti','D'],[10,'g','miele','D']],
['Mescola lo yogurt col miele.','Alterna nei bicchieri yogurt, pesche a cubetti e amaretti sbriciolati.','Assembla all\'ultimo o gli amaretti si ammollano.']),

R('Crostata di frutta furba','dolce','30 min',['vg'],
[[35,'g','pasta frolla pronta','D'],[60,'g','crema pasticcera','L'],[80,'g','frutta di stagione','V'],[10,'g','gelatina o marmellata','D']],
['Cuoci il guscio di frolla in bianco con i legumi sopra, 15 minuti a 180°.','Farcisci con la crema fredda.','Frutta a fette a raggiera, lucida con marmellata scaldata e allungata con acqua.'])

];
