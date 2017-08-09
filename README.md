[![Build Status](https://travis-ci.org/lefranz/geneva-dictators.svg?branch=master)](https://travis-ci.org/lefranz/geneva-dictators)

## Important note:
This code is not in use on the [GVA Dictator Alert](https://twitter.com/GVA_Watcher) twitter account anymore. It has been replaced by a more advanced version. Feel free to use this code for your own purposes. The actual list of tracked aircrafts can be found on [DictatorAlert.org](http://dictatoralert.org/)


#  GVA Dictator Alert

GVA Dictator Alert is a Twitter bot that tracks planes registered to authoritarian regimes landing and leaving Geneva Airport. The results are posted on: [@GVA_Watcher][2]

The project is run by Julien Pilet ([@JulienPilet][4]) and François Pilet ([@FrancoisPilet][5]).

François is a freelance investigative journalist based in Switzerland and co-founder of the news agency [vesper.media][6]. Julien is a computer engineer and co-founder of [anemomind.com][7] and [opticode.ch][8]. 

The two are cousins, since you asked.

##  How it works

The bot relies on a private [ADS-B antenna][9] located near the Geneva airport. The antenna is recording every landings and takeoffs along with the aircrafts registrations. A script is run once per hour to compare the logs from the antenna with a [list of aircrafts][1] registered to or regularly used by authoritarian regimes. When a match is found, a message is published on Twitter.

##  The list

The list of tracked planes is based on public sources and official registers. See below for the current list of tracked planes.

If want to add new registrations or if you think that there is an error in the list, please contact [francois@vesper.media][3]. 

##  Who's a dictator?

GVA Dictator Alert is tracking planes registered to or used by governments described as "authoritarian regimes" according to the Democracy Index (2015) compiled by the Economist Intelligence Unit.

To read more about the Democracy Index, consult: [Democracy Index - Wikipedia][10] and [Democracy Index 2015: Democracy in an age of anxiety][11]

##  Citations & reactions

On November 3, 2016, Assistant Attorney General Leslie Caldwell, chief of the United States Department of Justice (DoJ) Criminal Division, mentioned GVA Dictator Alert during a [conference][12] about international corruption at The George Washington University ([YouTube][13]). Leslie Caldwell indicated that the tool was monitored by the Justice Department's [Kleptocracy Asset Recovery Initiative][14].

During the summer 2016, relying in part on information provided by GVA Dictator Alert, Geneva public prosecutors opened a formal investigation on Equatorial Guinea Vice President [Teodoro Nguema Obiang Mangue][15], aka Teodorin Obiang, for suspected money laundering of corruption proceeds. On November 31, 2016, the Geneva prosecutors seized [11 luxury cars][16] owned by Teodorin Obiang at Geneva airport. 


## Media
* [Swissinfo.ch](http://www.swissinfo.ch/fre/cou-cou-_a-gen%C3%A8ve--un-robot-signale-les-avions-des-dictateurs-/42544160): A Genève, un robot signale les avions des dictateurs
* [SRF](http://www.srf.ch/news/schweiz/achtung-diktator-im-anflug): Achtung: Diktator im Anflug!
* [Blick.ch](http://www.blick.ch/news/schweiz/ermittlungen-zu-fluegen-aus-aequatorialguinea-diktatoren-alarm-ruft-genfer-staatsanwaltschaft-auf-den-plan-id5624682.html): Diktatoren-Alarm ruft Genfer Staatsanwaltschaft auf den Plan
* [RTS.ch](http://www.rts.ch/play/tv/toutes-taxes-comprises/video/dictateurs?id=8114590): Dictateurs, émission Toutes Taxes Comprises (TTC)
* [Mediapart.fr](https://www.mediapart.fr/journal/international/161016/un-compte-twitter-automatise-pour-traquer-les-avions-des-dictateurs-en-suisse?onglet=full): Un compte Twitter automatisé pour traquer les avions des dictateurs en Suisse
* [Le Monde](http://www.lemonde.fr/big-browser/article/2016/10/17/a-geneve-un-robot-poste-sur-twitter-les-allees-et-venues-des-dictateurs_5015328_4832693.html): A Genève, un robot poste sur Twitter les allées et venues des dictateurs
* [RT](https://francais.rt.com/international/19467-journaliste-suisse-cree-compte-twitter-traque-dictateurs): Un journaliste suisse crée un compte Twitter qui traque les dictateurs passant par Genève
* [Sputnik Radio](https://soundcloud.com/sputnik_fr/francois-pilet-le-gva-dictator-alert): Interview de François Pilet: Le GVA Dictator Alert
* [Sputnik News](https://fr.sputniknews.com/international/201610141028189225-suisse-vols-dictateurs-twitter/): Un bot suisse traquera les vols des «dictateurs»… Et les autres?
* [El Espagnol](http://www.elespanol.com/ciencia/tecnologia/20161013/162734576_0.html): Así caza Twitter a los dictadores que viajan a Suiza a lavar dinero
* [Tages Anzeiger](http://www.tagesanzeiger.ch/schweiz/standard/genf-das-mekka-der-autokraten/story/18282868): Genf, das Mekka der Autokraten
* [Newsweek](http://europe.newsweek.com/twitter-bot-tracks-flights-switzerland-gva-dictator-alert-509513?rm=eu): Twitter Bot Track Dictators' Flights To Switzerland
* [Wired.it](http://www.wired.it/internet/social-network/2016/10/14/un-twitterbot-traccia-aerei-dei-dittatori-in-svizzera/): C’è un Twitterbot che traccia gli aerei dei dittatori che transitano in Svizzera
* [The Verge](http://www.theverge.com/2016/10/13/13243072/twitter-bot-tracks-dictator-planes-geneva-gva-tracker): This Twitter bot is tracking dictators' flights in and out of Geneva
* [Watson.ch](http://www.watson.ch/Schweiz/Luftfahrt/724746297-Planespotting-f%C3%BCr-Fortgeschrittene--Dieser-Twitter-Bot-meldet-dir--wenn-ein-Diktator-in-Genf-landet): Planespotting für Fortgeschrittene: Dieser Twitter-Bot meldet dir, wenn ein Diktator in Genf landet
* [The Local](https://www.thelocal.ch/20160421/dictator-tracker-spices-up-geneva-planespotting): Dictator-tracker spices up Geneva planespotting
* [RTS.ch](http://www.rts.ch/info/sciences-tech/reperages-web/7668969-les-allees-et-venues-a-geneve-de-dictateurs-annoncees-sur-twitter.html): Les allées et venues à Genève de dictateurs annoncées sur Twitter


[1]: https://github.com/lefranz/geneva-dictators
[2]: https://twitter.com/GVA_Watcher
[3]: mailto:francois%40vesper.media
[4]: https://twitter.com/julienpilet
[5]: https://twitter.com/FrancoisPilet
[6]: https://vesper.media/
[7]: http://www.anemomind.com
[8]: http://opticode.ch/
[9]: https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast
[10]: https://en.wikipedia.org/wiki/Democracy_Index
[11]: http://www.eiu.com/public/topical_report.aspx?campaignid=DemocracyIndex2015
[12]: https://video.law.gwu.edu/ess/echo/presentation/a97d02eb-d412-4aea-a2e4-9cbc3cecb478
[13]: https://www.youtube.com/watch?v=MAqWkm1pJy8&feature=youtu.be
[14]: https://www.justice.gov/criminal-afmls
[15]: https://en.wikipedia.org/wiki/Teodoro_Nguema_Obiang_Mangue
[16]: http://qz.com/827859/bugatti-ferrari-and-koenigegg-one-were-among-seized-cars-of-equatorial-guineas-vp-obiang/
