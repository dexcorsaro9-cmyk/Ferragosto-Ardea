/* 50 giochi — c = categoria: spiaggia | tavola | movimento */
const G = (n, c, d, g, m, come, v) => ({ n, c, d, g, m, come, v });

window.GIOCHI = [

/* ---------- SOTTO L'OMBRELLONE ---------- */

G('Nomi cose città lampo','spiaggia','15 min','3-12','Foglietti e penne',
['Si sceglie una lettera a caso e si parte: nome, cosa, città, animale, mestiere, cibo.','Il primo che finisce grida stop, gli altri posano la penna dove sono arrivati.','10 punti per risposta unica, 5 se qualcun altro ha scritto la stessa, 0 se è vuota.'],
'Versione mare: categorie tutte marine — pesce, isola, cosa che galleggia, tormentone estivo.'),

G('Indovina chi sono','spiaggia','20 min','4-15','Post-it o foglietti e nastro',
['Ognuno scrive un personaggio famoso e lo attacca sulla fronte del vicino, senza fargliela vedere.','A turno si fa una domanda a cui si può rispondere solo sì o no.','Se la risposta è sì si continua a chiedere, se è no passa il turno.'],
'Variante di famiglia: invece dei personaggi famosi si scrivono i parenti presenti. Litigate assicurate.'),

G('Venti domande','spiaggia','10 min','2-12','Niente',
['Uno pensa a un oggetto, una persona o un luogo.','Gli altri hanno venti domande da sì/no per indovinare.','Chi indovina pensa il prossimo. Se finiscono le domande vince chi ha pensato.'],
'Per i più piccoli: si parte dicendo se è animale, vegetale o minerale.'),

G('Chi è più probabile che…','spiaggia','20 min','5-15','Niente',
['A turno si legge una frase: "chi è più probabile che si addormenti sul lettino?"','Al tre tutti puntano il dito verso qualcuno.','Chi riceve più dita si prende un punto-penitenza: un tuffo, un caffè da offrire, una canzone da cantare.'],
'Preparate prima venti frasi su un foglio, altrimenti a metà gioco non ne viene più in mente nessuna.'),

G('Parola proibita','spiaggia','20 min','6-14','Foglietti scritti a mano',
['Si scrivono su bigliettini una parola da far indovinare e tre parole vietate.','Chi pesca deve far indovinare alla sua squadra senza usare le parole vietate né gesti.','Un minuto a turno, un punto per ogni parola indovinata.'],
'Le carte le preparano i ragazzi: sono sempre le più cattive.'),

G('Catena di parole','spiaggia','10 min','3-12','Niente',
['Si parte da una parola, il successivo ne dice una che comincia con l\'ultima sillaba.','Chi ci mette più di tre secondi o ripete una parola già detta è fuori.','Si va avanti finché resta uno solo.'],
'Versione difficile: solo parole di una categoria, tipo cibo o città.'),

G('Un due tre stella sul bagnasciuga','spiaggia','15 min','5-15','Niente',
['Uno sta girato verso il mare e conta, gli altri avanzano dalla riva.','Quando si gira, chi si muove torna indietro. Sulla sabbia bagnata scivolare è facilissimo.','Vince chi tocca per primo chi conta.'],
'Se c\'è onda si gioca in acqua bassa: molto più difficile stare immobili.'),

G('Torneo di racchettoni','spiaggia','40 min','4-12','Racchettoni e palline',
['Si gioca a coppie, non a punti ma a scambi: quanti colpi riuscite a fare senza far cadere la pallina.','Ogni coppia ha tre tentativi, si segna il record.','Tabellone appeso all\'ombrellone, si sfida il record per tutta la settimana.'],
'Handicap per i più piccoli: si può far rimbalzare la pallina una volta a terra.'),

G('Beach volley con palla morbida','spiaggia','30 min','6-14','Palla leggera, una corda o due asciugamani',
['Campo delimitato con gli asciugamani, rete anche solo immaginaria.','Squadre miste per età, si gioca a 15 punti.','Regola della casa: chi ha meno di dieci anni può prendere la palla anche al secondo rimbalzo.'],
'Se siete in tanti: rotazione obbligatoria, chi sbaglia esce e entra chi è in panchina.'),

G('Castelli di sabbia a squadre','spiaggia','45 min','4-16','Secchielli, palette, conchiglie',
['Squadre da tre, mezz\'ora di tempo, tema estratto a sorte: castello, animale marino, faccia di un parente.','Una giuria di due persone assegna i voti come a un talent.','Premio simbolico: il vincitore decide il gelato di tutti.'],
'Fotografate tutto: al prossimo Natale è materiale prezioso.'),

G('Sto pensando a qualcosa di…','spiaggia','10 min','3-10','Niente',
['Chi guida dice "sto pensando a qualcosa di blu" guardandosi intorno.','Gli altri fanno ipotesi guardando solo ciò che si vede dall\'ombrellone.','Chi indovina guida il turno dopo.'],
'Perfetto per i bambini piccoli, dura esattamente il tempo di digerire.'),

G('Battaglia navale','spiaggia','20 min','2 (a coppie 4)','Fogli a quadretti e penne',
['Ognuno disegna due griglie 10x10 e piazza le navi senza farle vedere.','A turno si chiama una casella: acqua, colpito o affondato.','Vince chi affonda per primo tutta la flotta avversaria.'],
'A coppie: due contro due, ci si consulta a bassa voce. Molto più divertente.'),

G('Tris gigante con le conchiglie','spiaggia','10 min','2-6','Conchiglie e sassolini',
['Si disegna la griglia sulla sabbia bagnata col dito.','Una squadra usa le conchiglie, l\'altra i sassolini.','Chi vince resta in campo e sfida il prossimo.'],
'Versione grande: griglia da 5x5, servono cinque simboli in fila.'),

G('Indovina la canzone in 5 secondi','spiaggia','25 min','4-14','Uno smartphone e una cassa',
['A turno uno mette cinque secondi di una canzone.','Il primo che alza la mano prova a indovinare titolo e artista.','Due punti se azzecca entrambi, uno solo per il titolo.'],
'Girone dei nonni: solo canzoni prima del 1980. Vincono sempre loro.'),

G('Bocce sulla battigia','spiaggia','30 min','2-10','Bocce o palline da tennis',
['Si lancia il pallino sulla sabbia compatta vicino alla riva.','Ogni giocatore ha due bocce, si gioca a 12 punti.','Vale solo la boccia più vicina, come sempre.'],
'Il punto si misura con l\'infradito: ha la stessa autorevolezza del metro.'),

G('Forza quattro con i tappi','spiaggia','15 min','2-8','Tappi di bottiglia di due colori',
['Griglia disegnata sulla sabbia, sette colonne.','Si inseriscono i tappi dal basso come nel gioco vero.','Quattro in fila in qualsiasi direzione e si vince.'],
'Torneo a eliminazione diretta con tabellone disegnato accanto.'),

G('Il gioco del silenzio','spiaggia','5-30 min','2-15','Niente',
['Al via tutti in silenzio assoluto.','Chi parla o ride per primo perde.','Il premio lo decidono i genitori, tipicamente un gelato.'],
'Onesto: è un gioco inventato dai genitori per riposare dieci minuti. Funziona benissimo.'),

/* ---------- DA TAVOLA / DOPO CENA ---------- */

G('Sciarada, il mimo a squadre','tavola','40 min','6-16','Bigliettini e un timer',
['Due squadre, ognuna scrive dieci titoli di film, libri o canzoni per gli avversari.','A turno si mima un titolo, senza parlare né disegnare, un minuto a testa.','Un punto per ogni titolo indovinato dalla propria squadra.'],
'Secondo giro con gli stessi bigliettini ma una sola parola per descriverli. Terzo giro: solo mimo. Diventa esilarante.'),

G('Lupus in fabula','tavola','40 min','7-16','Un mazzo di carte o bigliettini',
['Si assegnano in segreto i ruoli: lupi, veggente, medico, cittadini.','Di notte i lupi scelgono una vittima, il veggente scopre un\'identità.','Di giorno il paese discute e vota chi eliminare. Vincono i lupi se restano in parità.'],
'Serve un narratore paziente. Il ruolo perfetto per chi non vuole giocare ma vuole comandare.'),

G('Delitto in casa','tavola','20 min','6-15','Niente',
['Tutti in cerchio, uno esce e gli altri scelgono l\'assassino.','L\'assassino uccide facendo l\'occhiolino a qualcuno, che deve "morire" in modo teatrale entro cinque secondi.','L\'investigatore ha tre tentativi per scoprire chi è.'],
'Punteggio alla drammaticità delle morti: si vince anche morendo bene.'),

G('Doblone, il dado bugiardo','tavola','30 min','3-10','Cinque dadi a testa e un bicchiere',
['Ognuno scuote i dadi sotto il bicchiere e guarda solo i suoi.','Si dichiara a salire: "ci sono cinque tre" contando tutti i dadi del tavolo.','Chi non ci crede dice dubito: si scoprono i dadi, chi ha torto perde un dado.'],
'Chi resta senza dadi è fuori. Se non avete i dadi vanno benissimo delle carte.'),

G('Telefono senza fili disegnato','tavola','30 min','5-12','Un foglio a testa e penne',
['Ognuno scrive una frase in cima al foglio e passa a destra.','Il vicino la disegna, piega la frase e passa. Il successivo scrive cosa vede, piega il disegno, passa.','Si va avanti fino a esaurire il foglio, poi si aprono tutti e si legge il disastro.'],
'La frase iniziale deve essere concreta e assurda: "il nonno balla il tango con un polpo".'),

G('Quiz di famiglia','tavola','40 min','6-16','Foglietti, penne, un presentatore',
['Il presentatore prepara venti domande sui presenti: chi russa di più, chi è arrivato ultimo in spiaggia, chi ha fatto la patente a che età.','Si gioca a squadre miste, risposte scritte.','Punto pieno se azzeccata, mezzo punto se ci si va vicino. Decide il presentatore, insindacabile.'],
'Chiedete in anticipo ai nonni tre aneddoti a testa: il round finale sarà il migliore.'),

G('Tombola estiva con pegni','tavola','40 min','6-20','Tombola o cartelle fatte a mano',
['Tombola classica, ma invece dei soldi si vincono pegni.','Ambo: scegli la musica per la cena. Terno: sei esonerato dai piatti. Cinquina: colazione servita a letto.','Tombola: decidi il programma di un\'intera giornata.'],
'Se non avete la tombola: numeri su foglietti in un cappello e cartelle disegnate a mano.'),

G('Il gioco del dizionario','tavola','35 min','4-10','Un vocabolario, foglietti, penne',
['Uno cerca una parola oscura e la legge ad alta voce.','Tutti scrivono una definizione inventata ma credibile, lui copia quella vera.','Si leggono tutte mescolate e si vota: punti a chi indovina la vera e a chi inganna gli altri.'],
'Vale anche col dizionario del telefono, ma il vocabolario di casa fa più atmosfera.'),

G('Due verità e una bugia','tavola','25 min','4-14','Niente',
['A turno si raccontano tre cose di sé: due vere e una falsa.','Gli altri votano quale sia la bugia.','Un punto a chi inganna la maggioranza, un punto a chi la smaschera.'],
'Con i parenti diventa un archivio di storie di famiglia che nessuno conosceva.'),

G('Storie a dadi','tavola','25 min','3-10','Sei foglietti con parole a caso',
['Si pescano sei parole a caso, scritte prima da tutti.','Il narratore deve inventare una storia che le contenga tutte, in ordine.','Massimo due minuti, poi tocca al prossimo che continua da dove ha lasciato.'],
'Registrate la storia col telefono: riascoltarla l\'anno dopo vale il viaggio.'),

G('La valigia della memoria','tavola','15 min','3-12','Niente',
['"Sono partito per il mare e ho messo in valigia il costume."','Ognuno ripete tutta la lista e aggiunge un oggetto.','Chi sbaglia l\'ordine esce. Vince l\'ultimo che ricorda tutto.'],
'I nonni vincono quasi sempre. Non è un caso, è allenamento.'),

G('Sette e mezzo coi fagioli','tavola','30 min','3-8','Un mazzo di carte napoletane e fagioli secchi',
['Si punta coi fagioli, il mazziere distribuisce una carta a testa coperta.','Si chiede carta per avvicinarsi a sette e mezzo senza sballare. Le figure valgono mezzo punto.','Chi supera sette e mezzo perde la puntata.'],
'Un fagiolo a puntata, cento fagioli a testa: dura giusto una serata.'),

G('Categorie a ritmo','tavola','15 min','4-12','Niente',
['Tutti battono le mani sulle cosce a tempo, due colpi e uno schiocco.','Si sceglie una categoria e a ogni schiocco uno dice una parola, senza perdere il ritmo.','Chi ripete, esita o sbaglia il tempo perde e sceglie la categoria nuova.'],
'Accelerate il ritmo ogni giro: dopo cinque minuti è una carneficina.'),

G('Chi ha detto cosa','tavola','30 min','6-14','Foglietti e un cappello',
['Durante la giornata ognuno annota frasi buffe sentite dire dagli altri.','La sera si pescano e si legge ad alta voce.','Si vota chi l\'ha detta: un punto a chi indovina, un punto a chi non viene riconosciuto.'],
'Nominate un cronista ufficiale che gira tutto il giorno col taccuino.'),

G('Impiccato a squadre','tavola','20 min','4-14','Foglio grande e pennarello',
['Una squadra sceglie una parola lunga o una frase, l\'altra chiama le lettere.','Ogni errore aggiunge un pezzo al disegno.','Si può tentare la parola intera in qualsiasi momento, ma sbagliando si perde subito.'],
'Frasi a tema vacanza: si indovinano prima ma si ride di più.'),

G('Che film è?','tavola','30 min','6-16','Bigliettini',
['Come la sciarada ma solo film, e si mima anche la locandina.','Squadre da almeno tre, 90 secondi a mimo.','Punti doppi se la squadra indovina in meno di 15 secondi.'],
'Categoria speciale: film che hanno visto solo i nonni. Livello leggendario.'),

G('Il processo','tavola','35 min','6-14','Niente',
['Si mette sotto processo qualcosa di assurdo: "l\'ombrellone va chiuso alle 17".','Due squadre: accusa e difesa, dieci minuti per preparare le arringhe.','Un giudice neutrale ascolta e sentenzia. Le obiezioni si urlano.'],
'Temi migliori: le regole di casa. Si risolvono discussioni vere ridendo.'),

G('Memory dei parenti','tavola','20 min','3-10','Foto stampate o sul telefono',
['Si raccolgono vecchie foto di famiglia, meglio se imbarazzanti.','A turno si mostra una foto: bisogna dire chi è, dove e in che anno.','Punti a chi ricorda di più. I nonni arbitrano.'],
'Fatelo l\'ultima sera: finisce sempre in racconti lunghissimi ed è il senso della vacanza.'),

/* ---------- MOVIMENTO, GIARDINO, PISCINA ---------- */

G('Caccia al tesoro express','movimento','30 min','6-16','Una lista scritta a mano',
['Lista di quindici oggetti da trovare in casa, giardino o spiaggia: qualcosa di rosso, una conchiglia rotta, un tappo, qualcosa che profuma.','Squadre da tre, venti minuti di tempo.','Un punto per oggetto, due punti bonus per il più creativo scelto dalla giuria.'],
'Versione notturna con le torce del telefono: molto più elettrizzante.'),

G('Caccia al tesoro fotografica','movimento','45 min','4-16','Uno smartphone per squadra',
['Invece di raccogliere si fotografa: un tramonto, un piede nella sabbia, tre persone che saltano insieme, un cane.','Trenta minuti, poi si proiettano le foto sulla tv o si passa il telefono.','Voto di squadra sulle foto altrui, non sulle proprie.'],
'Categoria fissa: la foto di gruppo più assurda. Diventa la copertina della vacanza.'),

G('Staffetta con i bicchieri','movimento','20 min','6-16','Bicchieri di plastica e due secchi',
['Due squadre in fila, un secchio pieno all\'inizio e uno vuoto in fondo.','Ognuno corre con un bicchiere pieno, lo svuota nel secchio e torna.','Dopo tre minuti vince chi ha più acqua nel secchio.'],
'Versione cattiva: il bicchiere si porta in equilibrio sulla testa.'),

G('Guerra di palloncini d\'acqua','movimento','20 min','6-20','Palloncini riempiti d\'acqua',
['Si riempiono cinquanta palloncini e si dividono in due basi.','Chi viene colpito conta fino a dieci fermo, poi rientra.','Vince la squadra che finisce per ultima i munizioni.'],
'Regola sacra: mai in faccia e mai sui nonni. Raccogliete tutti i pezzi alla fine.'),

G('Sedie musicali','movimento','15 min','5-15','Sedie e musica',
['Sedie in cerchio, una in meno dei giocatori.','Musica accesa: si gira. Musica spenta: tutti seduti.','Chi resta in piedi esce e si toglie una sedia.'],
'Versione piscina: invece delle sedie, materassini o mattonelle del bordo.'),

G('Percorso a ostacoli a tempo','movimento','30 min','4-14','Sedie, secchi, corde, teli',
['Si costruisce un percorso con quello che c\'è: slalom tra le sedie, salto nel cerchio, tuffo finale.','Uno alla volta, cronometro alla mano.','Tre tentativi a testa, vale il tempo migliore. Classifica appesa in cucina.'],
'Ogni giorno si aggiunge un ostacolo nuovo: entro venerdì è diventato Ninja Warrior.'),

G('Tiro alla fune','movimento','15 min','8-20','Una corda robusta e un asciugamano',
['Due squadre bilanciate, nastro a metà corda e asciugamano a terra come linea.','Al tre si tira. Vince chi porta il nastro oltre la propria linea.','Al meglio delle tre.'],
'Sull\'erba bagnata o sulla sabbia si scivola: divertente, ma occhio alle mani.'),

G('Palla prigioniera in piscina','movimento','30 min','6-16','Una palla morbida',
['Due squadre, ognuna in metà piscina.','Chi viene colpito passa dietro la linea avversaria come prigioniero, e può liberarsi colpendo a sua volta.','Vince chi resta con più giocatori dopo dieci minuti.'],
'In acqua i tiri rallentano: possono giocare tranquillamente anche i più piccoli.'),

G('Pallanuoto casalinga','movimento','30 min','6-14','Una palla e due bacinelle come porte',
['Due bacinelle galleggianti agli angoli opposti come porte.','Non si può camminare col fondo se si è adulti, i bambini sì.','Partita a otto gol.'],
'Portiere a rotazione ogni due minuti così tutti stanno un po\' fermi.'),

G('Gara di tuffi con giuria','movimento','25 min','4-14','Cartelli coi voti',
['Tre tuffi a testa: uno classico, uno buffo, uno a tema estratto a sorte.','Giuria di tre persone con i cartelli dei voti, da 1 a 10.','Si somma, si scarta il voto più alto e il più basso.'],
'Categoria bomba: si vota solo il volume dello spruzzo.'),

G('Recupera gli oggetti dal fondo','movimento','20 min','3-12','Oggetti che affondano',
['Si lanciano dieci oggetti sul fondo della piscina, in zona bassa.','Al via si recuperano, un oggetto per immersione.','Vince chi ne raccoglie di più. Chi non se la sente fa il lanciatore.'],
'A squadre e a staffetta: si parte solo quando il compagno tocca il bordo.'),

G('Corsa nei sacchi con le federe','movimento','15 min','4-14','Federe dei cuscini',
['Ognuno entra in una federa e la tiene su con le mani.','Si salta fino alla linea e si torna.','Chi cade riparte da dove è caduto.'],
'A coppie con tre gambe legate da un asciugamano, se le federe non bastano.'),

G('Limbo con la scopa','movimento','20 min','5-16','Un manico di scopa e musica',
['Due persone reggono il manico, gli altri passano sotto piegandosi all\'indietro.','Ogni giro si abbassa di dieci centimetri.','Chi tocca il manico o cade è eliminato.'],
'In piscina, con l\'asta appena sopra l\'acqua: si passa anche di lato.'),

G('Statue nell\'acqua','movimento','15 min','5-15','Niente',
['Come un due tre stella, ma in piscina o in acqua bassa.','Quando chi conta si gira, bisogna restare immobili: le onde tradiscono tutti.','Chi si muove torna indietro di due passi.'],
'Chi conta può fare finta di girarsi: metà del divertimento è lì.'),

G('Lancio nei bicchieri','movimento','20 min','4-12','Bicchieri di plastica e palline',
['Piramide di bicchieri pieni d\'acqua a un capo del tavolo.','A turno si lancia la pallina: se entra, chi difende beve un sorso d\'acqua e toglie il bicchiere.','Vince chi svuota per primo il campo avversario.'],
'Solo acqua e succhi: così giocano anche i ragazzi e finisce bene per tutti.')

];
