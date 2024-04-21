import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import SubList from "../../articleRelatedStuff/SubList";
import { TableDiv, TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "French Notes";
export const sourcesColor = {25: null, 16:null,24:null, 42:null, 43:null};
export const content = <>
	<h1>French Notes</h1>
	<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
	{getSourcesOL(sourcesColor)}

	<h2 id="Beginner1">Beginner Part 1</h2>
	<div className="content">
		<div style={{width:"49%",marginLeft:"0.5%",float:"left"}}>
			<ul>
				<li>Definite articles:<SubList>
					<TableLI style={{width:"90%",marginLeft:"5%"}}><thead>
						<tr>
						<th rowSpan="2">Number</th>
						<th rowSpan="2">Gender</th>
						<th colSpan="2">Before a noun beginning with a...</th>
						</tr>
						<tr>
						<th>consonant</th>
						<th>vowel</th>
						</tr></thead>
						<tbody><tr>
						<td colSpan="1" rowSpan="2">Singular</td>
						<td>Masculine</td>
						<td>le</td>
						<td colSpan="1" rowSpan="1">l&rsquo;</td>
						</tr>
						<tr>
						<td>Feminine</td>
						<td>la</td>
						<td>l&apos;</td>
						</tr>
						<tr>
						<td colSpan="1" rowSpan="1">Plural</td>
						<td colSpan="1" rowSpan="1">Masculine and feminine</td>
						<td colSpan="2" rowSpan="1">les</td>
						</tr>
					</tbody></TableLI>
					<TableLI style={{width:"80%",marginLeft:"10%"}}>
						<thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr><td>le restaurant</td><td>the restaurant</td></tr>
						<tr><td>la rue</td><td>the street</td></tr>
						<tr><td>l'enfant</td><td>the child</td></tr>
						<tr><td>les amis</td><td>the friends</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>"you":<SubList>
					<li><b>Tu</b> is used to address someone informally: a friend, a relative or someone close.</li>
					<li><b>Vous</b> is used to address someone formally: someone older, a superior at work, or just someone you don't know well.</li>
					<li><b>Vous</b> is also used to address (formally or informally) two or more people.</li>
				</SubList></li>
				<li>Subject Pronouns:<SubList>
					<TableLI style={{width:"90%",marginLeft:"5%"}}>
						<thead><tr><th>Type</th><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
						<td colSpan="1" rowSpan="6">Singular</td>
						<td>je</td>
						<td>I</td>
						</tr>
						<tr>
						<td>tu</td>
						<td>you</td>
						</tr>
						<tr>
						<td>vous</td>
						<td>you</td>
						</tr>
						<tr>
						<td>il (masculine)</td>
						<td>he</td>
						</tr>
						<tr>
						<td>elle (feminine)</td>
						<td>she</td>
						</tr>
						<tr>
						<td>on</td>
						<td>one, we, people</td>
						</tr>
						<tr>
						<td colSpan="1" rowSpan="4">Plural</td>
						<td>nous</td>
						<td>we</td>
						</tr>
						<tr>
						<td>vous</td>
						<td>you</td>
						</tr>
						<tr>
						<td>ils (masculine)</td>
						<td>they</td>
						</tr>
						<tr>
						<td>elles (feminine)</td>
						<td>they</td>
						</tr>
					</tbody></TableLI>
					<li>"On" is often used when expressing rules such as:</li>
					<TableLI>
						<tbody>
							<tr><td>On ne doit pas parler la bouche pleine.<br/>People mustn't speak with their mouths full.</td></tr>
						</tbody>
					</TableLI>
					<li>"Nous" is a plural pronoun: this is the we you use mostly in written form, or when you want to be more formal. "On" is a more informal we, used predominantly in speech or casual writing (in emails to your friends for example).</li>
				</SubList></li>
				<li><b>Être:</b><SubList>
					<li>The most frequently occurring verb in French is <b>être</b>:</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
						<td>je suis</td>
						<td>I am</td>
						</tr>
						<tr>
						<td>tu es</td>
						<td>you are</td>
						</tr>
						<tr>
						<td>il est, elle est, on
						est</td>
						<td>he is, she is, one is</td>
						</tr>
						<tr>
						<td>nous
						sommes</td>
						<td>we are</td>
						</tr>
						<tr>
						<td>vous êtes</td>
						<td>you are</td>
						</tr>
						<tr>
						<td>ils
						sont, elles sont</td>
						<td>they are</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
				<li>How to say your name:<SubList>
					<TableLI>
						<tbody>
							<tr><td>Je m'appelle Aurélie</td><td>My name is Aurélie</td></tr>
						</tbody>
					</TableLI>
					<li>Check the wiktionary for <a href='https://en.wiktionary.org/wiki/appeler'>appeler</a> (to call) to see it's different conjugations.</li>
					<li>The word "m'" is a reflexive pronoun, so "Je m'appelle" literally means "I call myself".</li>
					<TableLI>
						<tbody>
							<tr><td>Comment tu t'appelles?</td><td>What is your name?</td></tr>
							<tr><td>Comment vous vous appelez?</td><td>What is your name?</td></tr>
							<tr><td>Tu t'appelles Théo.</td><td>Your name is Théo.</td></tr>
							<tr><td>Vous vous appelez Monsieur Durand.</td><td>Your name is Mr Durand.</td></tr>
						</tbody>
					</TableLI>
					<li>It's tempting to translate "Je m'appelle..." as "I call myself..." but despite this being its literal translation, this is not correct. "I call myself..." implies one's real name is something else, or a choice over one's name.</li>
				</SubList></li>
				<li>Adjectives basics:<SubList>
					<li>Most adjectives can be made feminine by adding -e.</li>
					<li>Most adjectives can be made plural by adding -s.</li>
					<li>Adjectives, or 'describing words', are <b>usually</b> placed in French <b>after</b> the noun, but there are exceptions:</li>
					<TableLI>
						<tbody>
							<tr><td>un masque vert</td><td>a green mask</td></tr>
							<tr><td>la boîte ronde</td><td>the round box</td></tr>
						</tbody>
					</TableLI>
					<li>Some adjectives come before the noun:</li>
					<TableLI>
						<tbody>
							<tr><td>la belle fille</td><td>the beautiful girl</td></tr>
							<tr><td>le petit chien</td><td>the small dog</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Talking about where you are from:<SubList>
					<li>To talk about where you are from in French, you will use the verb <b>venir</b> (to come).</li>
					<li>To say which city you are from in French, you will use the following expression:</li>
					<TableLI>
						<tbody>
							<tr><td>Je viens de + [city]</td></tr>
						</tbody>
					</TableLI>
					<li>If the city name begins with a vowel, de becomes d':</li>
					<TableLI>
						<tbody>
							<tr><td>Je viens de Paris.</td><td>I am from Paris.</td></tr>
							<tr><td>Je viens d'Édimbourg.</td><td>I am from Edinburgh.</td></tr>
						</tbody>
					</TableLI>
					<li>Adjectives describing nationalities change depending on the gender they refer to.</li>
					<TableLI>
						<tbody>
							<tr><td>Je suis français</td><td>I am French</td></tr>
							<tr><td>Je suis française</td><td>I am French</td></tr>
						</tbody>
					</TableLI>
					<li>Nationalities in -ian in English often become -ien in French (feminine: -iene):</li>
					<TableLI>
						<tbody>
							<tr><td>Je suis australien</td><td>I'm Australian</td></tr>
							<tr><td>Je suis italienne</td><td>I am Italian</td></tr>
						</tbody>
					</TableLI>
					<li>Nationalities used as adjectives are not capitalised, whereas they are capitalised when used as nouns: Je connais un Canadien - I know a Canadian.</li>
					<TableLI>
						<tbody>
							<tr><td>Je connais un Canadien</td><td>I know a Canadian</td></tr>
						</tbody>
					</TableLI>
					<li>To say which city you live in in French, you can use the verb <b>habiter</b> (to live [somewhere]) as such:</li>
					<TableLI>
						<tbody>
							<tr><td>J'habite à + [city]</td></tr>
						</tbody>
					</TableLI>
					<li style={{listStyleType:"none"}}>
						<TableDiv style={{width:"40%",float:"left",marginLeft:"3%"}}>
							<caption>Venir conjugation</caption>
							<tbody><tr>
								<td>je viens</td>
								</tr>
								<tr>
								<td>tu viens</td>
								</tr>
								<tr>
								<td>il vient, elle vient, on vient</td>
								</tr>
								<tr>
								<td>nous venons</td>
								</tr>
								<tr>
								<td>vous venez</td>
								</tr>
								<tr>
								<td>ils viennent, elles viennent</td>
							</tr></tbody>
						</TableDiv>
						<TableDiv style={{width:"50%",float:"right",marginRight:"2%"}}>
							<caption>Habiter conjugation</caption>
							<tbody>
								<tr><td>je habite</td></tr>
								<tr><td>tu habites</td></tr>
								<tr><td>il habite, elle habite, on habite</td></tr>
								<tr><td>nous habitons</td></tr>
								<tr><td>vous habitez</td></tr>
								<tr><td>ils habitent, elles habitent</td></tr>
							</tbody>
						</TableDiv>
						<div style={{clear:"both"}}> </div>
					</li>
				</SubList></li>
				<li>"It is":<SubList>
					<li>To describe things in general in French, you can use: c'est (it is/this is/that is) + a simple adjective (describing word)</li>
					<TableLI>
						<tbody>
							<tr><td>C'est chaud</td><td>It's hot</td></tr>
							<tr><td>C'est très ennuyeux</td><td>It's very boring.</td></tr>
						</tbody>
					</TableLI>
					<li>Standalone adjectives after <b>c'est</b> are always masculine.</li>
					<li>Use <b>c'est</b> for general, unspecific statements and opinions but <b>l'est/elle est</b> for statements and opinions related to specific things.</li>
					<TableLI>
						<tbody>
							<tr><td>Tu étudies la science ? - Oui, c'est passionnant!<br/>Do you study science? - Yes, it's thrilling!</td></tr>
							<tr><td>Tu aimes mon pull ? - Oui, il est très beau.<br/>Do you like my sweater? - Yes, it's very nice.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Inversion:<SubList>
				<li>There are several ways of formulating questions in French. One way is to reverse the positions of the subject pronoun and the verb. This process is called <b>inversion</b>:</li>
				<TableLI style={{width:"80%",marginLeft:"10%"}}><tbody><tr>
					<td>Vous avez des
					nouvelles.</td>
					<td>Avez-vous des
					nouvelles?</td>
					</tr>
					<tr>
					<td>Il est à Lyon
					maintenant.</td>
					<td>Est-il à Lyon maintenant?</td>
					</tr>
					<tr>
					<td>Nous allons au café.</td>
					<td>Allons-nous au café?</td>
					</tr>
				</tbody></TableLI>
				<li>When the 3rd person singular ends with a vowel, a "t" is added between the verb and the pronoun.</li>
				<TableLI style={{width:"80%",marginLeft:"10%"}}><tbody><tr><td>Il va bien.</td><td>Va-t-il bien?</td></tr>
				</tbody></TableLI>
				<li>Question inversion is possible only with subject pronoun and verb. When the subject is a noun, the noun remains before the verb and the appropriate pronoun must be introduced after the verb to form a question.</li>
				<TableLI style={{width:"90%",marginLeft:"5%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
					<tbody><tr><td>Vos parents sont-ils toujours en vacances?</td><td>Are your parents still on vacation?</td></tr>
					<tr><td>Le restaurant est-il bon?</td><td>Is the restaurant good?</td></tr>
				</tbody></TableLI>
				</SubList></li>
				<li>Negative Adverb:<SubList>
					<li>A verb is negated by the presence of <b>ne</b> before it and <b>pas</b> after it.</li>
					<li>Before a vowel, <b>n'</b> must occur instead of ne:</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
							<td>Lisez.</td>
							<td>Read.</td>
							</tr>
							<tr>
							<td>Ne
							lisez pas.</td>
							<td>Do not read.</td>
							</tr>
						<tr>
						<td>Est-il?</td>
						<td>Is he?</td>
						</tr>
						<tr>
						<td>N'est-il
						pas?</td>
						<td>Isn't he?</td>
						</tr>
						<tr>
						<td>
						Sont-elles?</td>
						<td>Are they?</td>
						</tr>
						<tr>
						<td>Ne
						sont-elles pas?</td>
						<td>Aren't they?</td>
						</tr>
						<tr>
						<td>Je ne suis pas.</td>
						<td>I am not</td>
						</tr>
						<tr>
						<td>Tu n'es
						pas / Vous n'êtes pas.</td>
						<td>You are not (singular)</td>
						</tr>
						<tr>
						<td>Il / Elle / On n'est
						pas.</td>
						<td>He / She / One is not.</td>
						</tr>
						<tr>
						<td>Nous ne
						sommes pas.</td>
						<td>We are not.</td>
						</tr>
						<tr>
						<td>Vous n'êtes pas.</td>
						<td>You are not. (plural)</td>
						</tr>
						<tr>
						<td>Ils /
						Elles ne sont pas.</td>
						<td>They are not.</td>
						</tr>
						<tr>
						<td>Ne suis-je pas?</td>
						<td>Am I not?</td>
						</tr>
						<tr>
						<td>N'es-tu
						pas /&nbsp;N'êtes-vous pas?</td>
						<td>Are you not? (singular)</td>
						</tr>
						<tr>
						<td>N'est-il (elle / on)
						pas?</td>
						<td>Is he (she / one) not?</td>
						</tr>
						<tr>
						<td>Ne
						sommes-nous pas?</td>
						<td>Are we not?</td>
						</tr>
						<tr>
						<td>N'êtes-vous pas?</td>
						<td>Are you not? (plural)</td>
						</tr>
						<tr>
						<td>Ne
						sont-ils (elles) pas?</td>
						<td>Are they not.</td>
						</tr>
					</tbody></TableLI>
					<li>To express "never", use "ne... jamais":</li>
					<TableLI>
						<tbody>
							<tr><td>Je n'écoute jamais le prof<br/>I never listen to the teacher</td></tr>
							<tr><td>Nous ne sommes jamais de mauvais poil<br/>We are never in a bad mood</td></tr>
						</tbody>
					</TableLI>
					<li>To express neither or nor, you use "... non plus".</li>
					<TableLI>
						<tbody>
							<tr><td>e ne vois pas Boris - Moi non plus!<br/>I don't see Boris - Me neither!</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>
		<div style={{width:"49%",marginRight:"0.5%",float:"right"}}>
			<ul>
				<li><b>Avoir:</b><SubList>
					<li>The second most frequently occurring verb in French is avoir (to have).</li>
					<li>Subject Pronoun (SP) + Verb (V):</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
						<td>j'ai</td>
						<td>I have</td>
						</tr>
						<tr>
						<td>tu as</td>
						<td>you have (singular)</td>
						</tr>
						<tr>
						<td>il a (elle,on)</td>
						<td>he has (she, one)</td>
						</tr>
						<tr>
						<td>nous
						avons</td>
						<td>we have</td>
						</tr>
						<tr>
						<td>vous avez</td>
						<td>you have (plural)</td>
						</tr>
						<tr>
						<td>ils ont
						(elles)</td>
						<td>they have</td>
						</tr>
					</tbody></TableLI>
					<li>Verb + SP (in questions):</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
						<td>ai-je ...?</td>
						<td>have I ...?</td>
						</tr>
						<tr>
						<td>as-tu ...?</td>
						<td>have you ...? (singular)</td>
						</tr>
						<tr>
						<td>a-t-il ...? (elle,on)</td>
						<td>has he ...? (she,one)</td>
						</tr>
						<tr>
						<td>avons-nous
						...?</td>
						<td>have we ...?</td>
						</tr>
						<tr>
						<td>avez-vous ...?</td>
						<td>have you ...? (plural)</td>
						</tr>
						<tr>
						<td>ont-ils
						...?(elles)</td>
						<td>have they ...?</td>
						</tr>
					</tbody></TableLI>
					<li>SP + ne + V + pas:</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
						<td>je n'ai pas ...</td>
						<td>I don't have ...</td>
						</tr>
						<tr>
						<td>tu n'as pas ...</td>
						<td>you don' t have ...
						(singular)</td>
						</tr>
						<tr>
						<td>il n'a pas ... (elle,
						on)</td>
						<td>he doesn't have ... (she, one)</td>
						</tr>
						<tr>
						<td>nous
						n'avons pas ...</td>
						<td>we don't have ...</td>
						</tr>
						<tr>
						<td>vous n'avez pas ...</td>
						<td>you don't have ... (plural)</td>
						</tr>
						<tr>
						<td>ils
						n'ont pas ... (elles)</td>
						<td>they don't have ...</td>
						</tr>
					</tbody></TableLI>
					<li>ne + V + SP + pas (in questions):</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
						<td>n'ai-je pas ...?</td>
						<td>don't I have ...?</td>
						</tr>
						<tr>
						<td>n'as-tu pas ...?</td>
						<td>don' t you have ...?
						(singular)</td>
						</tr>
						<tr>
						<td>n'a-t-il pas ...?
						(elle,
						on)</td>
						<td>doesn't he have ...? (she, one)</td>
						</tr>
						<tr>
						<td>n'avons-nous
						pas ...?</td>
						<td>don't we have ...?</td>
						</tr>
						<tr>
						<td>n'avez-vous pas ...?</td>
						<td>don't you have ...? (singular)</td>
						</tr>
						<tr>
						<td>n'ont-ils
						pas ...? (elles)</td>
						<td>don't they have ...?</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Indefinite articles:<SubList>
					<li>'une' occurs before feminine singular nouns.</li>
					<li>'un' occurs before masculine singular nouns.</li>
					<li>'des' is the plural form.</li>
					<TableLI style={{width:"90%",marginLeft:"5%"}}><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr>
						<td>ils ont un enfant</td>
						<td>they have a child</td>
						</tr>
						<tr>
						<td>ils ont
						des enfants</td>
						<td>they have children</td>
						</tr>
						<tr>
						<td>une chambre</td>
						<td>a bedroom</td>
						</tr>
					</tbody></TableLI>
					<li>In French we don't say un or une when stating someone's profession or occupation with être.</li>
					<TableLI>
						<tbody>
							<tr><td>Il est avocat.</td><td>He is a lawyer.</td></tr>
							<tr><td>Paul est étudiant.</td><td>Paul is a student.</td></tr>
						</tbody>
					</TableLI>
					<li>You always need an article in front of a group including an adjective:</li>
					<TableLI>
						<tbody>
							<tr><td>Lisa est une très bonne vendeuse.</td><td>Lisa is a very good sales assistant.</td></tr>
							<tr><td>Maurice est un professeur excellent.</td><td>Maurice is an excellent teacher.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Cardinal numbers (1-19):<SubList>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><tbody><tr>
						<td>1</td>
						<td>un / une</td>
						<td>11</td>
						<td>onze</td>
						</tr>
						<tr>
						<td>2</td>
						<td>deux</td>
						<td>12</td>
						<td>douze</td>
						</tr>
						<tr>
						<td>3</td>
						<td>trois</td>
						<td>13</td>
						<td>treize</td>
						</tr>
						<tr>
						<td>4</td>
						<td>quatre</td>
						<td>14</td>
						<td>quatorze</td>
						</tr>
						<tr>
						<td>5</td>
						<td>cinq</td>
						<td>15</td>
						<td>quinze</td>
						</tr>
						<tr>
						<td>6</td>
						<td>six</td>
						<td>16</td>
						<td>seize</td>
						</tr>
						<tr>
						<td>7</td>
						<td>sept</td>
						<td>17</td>
						<td>dix-sept</td>
						</tr>
						<tr>
						<td>8</td>
						<td>huit</td>
						<td>18</td>
						<td>dix-huit</td>
						</tr>
						<tr>
						<td>9</td>
						<td>neuf</td>
						<td>19</td>
						<td>dix-neuf</td>
						</tr>
					</tbody></TableLI>
					<li>10 is dix</li>
				</SubList></li>
				<li>To say how old you are:<SubList>
					<li>To say how old someone is in French, we use avoir + age + ans. Effectively we say I have [age] years.</li>
					<TableLI>
						<tbody>
							<tr><td>Tu as quarante ans</td><td>You are forty</td></tr>
							<tr><td>Vous avez soixante-huit ans</td><td>You are sixty-eight.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>Faire:</b><SubList>
					<li>Subject Pronoun (SP) + Verb (V):</li>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
						<td>je fais</td>
						<td>I make</td>
						</tr>
						<tr>
						<td>tu fais</td>
						<td>you make (singular)</td>
						</tr>
						<tr>
						<td>il fait (elle,on)</td>
						<td>he makes (she, one)</td>
						</tr>
						<tr>
						<td>nous
						faisons</td>
						<td>we make</td>
						</tr>
						<tr>
						<td>vous faîtes</td>
						<td>you make (plural)</td>
						</tr>
						<tr>
						<td>ils
						font
						(elles)</td>
						<td>they make</td>
						</tr>
					</tbody></TableLI>
					<li>Verb + SP (in questions):</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
						<td>Est-ce que je fais
						...?&nbsp;</td>
						<td>do I make …?</td>
						</tr>
						<tr>
						<td>fais-tu
						...?</td>
						<td>do you make ...?
						(singular)</td>
						</tr>
						<tr>
						<td>fait-il ...? (elle,on)</td>
						<td>does he make ...? (she,one)</td>
						</tr>
						<tr>
						<td>faisons-nous
						...?</td>
						<td>do we make ...?</td>
						</tr>
						<tr>
						<td>faîtes-vous ...?</td>
						<td>do you make ...? (plural)</td>
						</tr>
						<tr>
						<td>font-ils
						...?
						(elles)</td>
						<td>do they make ...?</td>
						</tr>
					</tbody></TableLI>
					<li>SP + ne + V + pas:</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
						<td>je ne fais pas ...
						</td>
						<td>I don't make ...</td>
						</tr>
						<tr>
						<td>tu ne
						fais
						pas &nbsp;...</td>
						<td>you don't make ...
						(singular)</td>
						</tr>
						<tr>
						<td>il ne fait pas ...
						(elle, on)</td>
						<td>he doesn't make ... (she, one)</td>
						</tr>
						<tr>
						<td>nous
						ne faisons pas ...</td>
						<td>we don't make ...</td>
						</tr>
						<tr>
						<td>vous ne faîtes pas ...</td>
						<td>you don't make ... (plural)</td>
						</tr>
						<tr>
						<td>ils
						ne font&nbsp;pas ... (elles)</td>
						<td>they don't make ...</td>
						</tr>
					</tbody></TableLI>
					<li>ne + V + SP + pas?:</li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
						<td>Est-ce que je ne fais
						pas de café?</td>
						<td>don't I make coffee?</td>
						</tr>
						<tr>
						<td>ne
						fais-tu
						pas ... ?</td>
						<td>don't you make ...?
						(singular)</td>
						</tr>
						<tr>
						<td>ne fait-il pas ...?
						(elle,
						on)</td>
						<td>doesn't he make ...? (she, one)</td>
						</tr>
						<tr>
						<td>ne
						faisons-nous
						pas ...?</td>
						<td>don't we make ...?</td>
						</tr>
						<tr>
						<td>ne faîtes-vous pas
						...?</td>
						<td>don't you make...? (plural)</td>
						</tr>
						<tr>
						<td>ne
						font-ils
						pas ...? (elles)</td>
						<td>don't they make ...?</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
				<li>"Il y a...":<SubList>
					<li>Il y a = There is/There are</li>
					<TableLI>
						<tbody>
							<tr><td>Dans ma maison, il y a cinq pièces.<br/>In my house, there are five rooms.</td></tr>
							<tr><td>À Paris, il y a la Tour Eiffel.<br/>In Paris, there is the Eiffel Tower.</td></tr>
						</tbody>
					</TableLI>
					<li>"Il y a" never changes, even if there is more than one object.</li>
				</SubList></li>
				<li>To be hot/cold:<SubList>
					<li>In French, to express being hot/cold you use "avoir chaud/froid" (Literally: to have hot/cold).</li>
					<TableLI>
						<tbody>
							<tr><td>Tu as froid?</td><td>Are you cold?</td></tr>
						</tbody>
					</TableLI>
					<li>The masculine adjectives chaud and froid never agree in gender or number, even if the person/thing it refers to is female or plural:</li>
					<TableLI>
						<tbody>
							<tr><td>MARIE: J'ai chaud.</td><td>MARIE: I'm hot.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>To be hungry/thirsty:<SubList>
					<li>In French, we literally say I have hunger / I have thirst.</li>
					<TableLI>
						<tbody>
							<tr><td>J'ai faim.</td><td>I am hungry.</td></tr>
							<tr><td>Tu as soif.</td><td>You are thirsty.</td></tr>
							<tr><td>Vous avez faim?</td><td>You are hungry?</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>To be in pain:<SubList>
					<li>To say that you are in pain, use the expression: <b>avoir mal</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>J'ai très mal!</td><td>It really hurts!</td></tr>
							<tr><td>Elle n'a pas mal.</td><td>She's not in pain.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Expressing dates:<SubList>
					<li>Here's the general structure: le + number + month + year</li>
					<TableLI>
						<tbody>
							<tr><td>le 24 janvier 2012</td><td>24th January, 2012</td></tr>
							<tr><td>le 3 mars 2013</td><td>3rd March, 2013</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="Beginner2">Beginner Part 2</h2>
	<div className="content">
		<div style={{width:"49%",marginLeft:"0.5%",float:"left"}}>
			<ul>
				<li><b>Demonstrative determiners:</b><SubList>
					<TableLI><thead><tr>
						<th colSpan="1" rowSpan="1">Number</th>
						<th colSpan="1" rowSpan="1">Gender</th>
						<th>Before a consonant</th>
						<th>Before a vowel</th>
						</tr></thead>
						<tbody><tr>
						<td colSpan="1" rowSpan="2">Singular</td>
						<td>Maculine</td>
						<td>ce</td>
						<td>cet</td>
						</tr>
						<tr>
						<td>Feminine</td>
						<td colSpan="2">cette</td>
						</tr>
						<tr>
						<td>Plural</td>
						<td>Masculine and Feminine</td>
						<td colSpan="2">ces</td>
						</tr>
					</tbody></TableLI>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody><tr><td>ce restaurant</td><td>this restaurant</td></tr>
						<tr><td>ce monsieur</td><td>this gentleman</td></tr>
						<tr><td>cet enfant</td><td>this baby</td></tr>
						<tr><td>cet hôtel</td><td>this hotel</td></tr>
						<tr><td>cette malle</td><td>this trunk</td></tr>
						<tr><td>cette amie</td><td>this friend</td></tr>
						<tr><td>ces restaurants</td><td>these restaurants</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>The preposition à + definite article:<SubList>
					<li>The preposition à + definite article has several shapes:</li>
					<TableLI><thead><tr>
						<th colSpan="1" rowSpan="1">Number</th>
						<th colSpan="1" rowSpan="1">Gender</th>
						<th>Before a consonant</th>
						<th>Before a vowel</th>
						</tr></thead>
						<tbody><tr>
						<td colSpan="1" rowSpan="2">Singular</td>
						<td>Maculine</td>
						<td>au</td>
						<td colSpan="1" rowSpan="2">&agrave; l&rsquo;</td>
						</tr>
						<tr>
						<td>Feminine</td>
						<td>&agrave; la</td>
						</tr>
						<tr>
						<td>Plural</td>
						<td>Masculine and Feminine</td>
						<td colSpan="2">aux</td>
						</tr>
					</tbody></TableLI>
					<li><b>Au</b>, <b>à la</b>, <b>à l'</b>, <b>aux</b> have different equivalents in English:<SubList>
						<li>To the</li>
						<li>At the, in</li>
						<li>The verb 'to be' followed by the preposition à has also the meaning of "to belong to"</li>
						<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
							<tr><td>Allez-vous à la gare?</td><td>Are you going to the station?</td></tr>
							<tr><td>Je suis à l'hôtel.</td><td>I am at the hotel.</td></tr>
							<tr><td>Aux guichets deux et trois.</td><td>At ticket windows two and three.</td></tr>
							<tr><td>Il est au lit.</td><td>He is in bed.</td></tr>
							<tr><td>C'est à la soeur de Janine.</td><td>It belongs to Janine's sister.</td></tr>
							<tr><td>Ce sac est à lui.</td><td>This bag is his.</td></tr>
							<tr><td>Ces chaussures sont à elle.</td><td>These shoes are hers.</td></tr>
							<tr><td>Cette ceinture est à eux.</td><td>This belt is theirs.</td></tr>
						</tbody></TableLI>
					</SubList></li>
				</SubList></li>
				<li><b>Est-ce que:</b><SubList>
					<li>Prefixing <b>Est-ce que</b> to the Subject-Verb type of utterance makes it into a yes/no question:</li>
					<TableLI style={{width:"90%",marginLeft:"5%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr><td>C'est 42 francs.</td><td>It's 42 francs.</td></tr>
						<tr><td>Est-ce que c'est 42 francs?</td><td>Is it 42 francs?</td></tr>
						<tr><td>Je peux vous donner deux coins fenêtres?</td><td>I can give you two window seats.</td></tr>
						<tr><td>Est-ce que je peux vous donner deux coins fenêtres?</td><td>Can I give you two window seats?</td></tr>
					</tbody></TableLI>
					<li>Append "...n'est-ce pas?" for "... is it not?". <u>Example:</u> <i>Tu es Jane, n'est-ce pas?</i> (You are Jane, aren't you?).</li>
				</SubList></li>
				<li>Yes and no:<SubList>
					<li>In most cases, we use <b>oui</b> (yes) and <b>non</b> (no) in French the same way as in English.</li>
					<li>However, if someone asks you a negative question or makes a negative statement and you want to disagree with it (i.e. answer in the positive) then use <b>si</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>Est-ce que tu parles français? Oui, je parle français.<br/>Do you speak French? Yes, I speak French.</td></tr>
							<tr><td>Non, je ne parle pas français.<br/>No, I don't speak French.</td></tr>
							<tr><td>Tu ne t'amuses pas? - Si, je m'amuse.<br/>Aren't you having a good time? - Yes, I am.</td></tr>
						</tbody>
					</TableLI>
					<li>To can also express agreement like this: <b>être (to be) + d'accord</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>Vous êtes d'accord?</td><td>Do you agree?</td></tr>
							<tr><td>Nous sommes d'accord avec votre proposition.</td><td>We agree with your offer.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>"What?":<SubList>
					<li>To simply ask "What?" on its own, you can use "Quoi?", but it is a bit abrupt and rude. Instead, we consider it more polite to use "Comment?".</li>
					<li>To ask "What [...]?" in French, you can either use <b>Qu'est-ce que</b> at the start or <b>quoi</b> at the end.</li>
					<TableLI>
						<tbody>
							<tr><td>Qu'est-ce que tu fais?<br/>Tu fais quoi?</td><td>What are you doing?</td></tr>
							<tr><td>Qu'est-ce que c'est?<br/>C'est quoi?</td><td>What is it?</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>In French, the possessive determiners (my, his, her, our, etc.) agree in gender and number with the noun which follows:<SubList>
					<TableLI style={{width:"98%",marginLeft:"1%"}}><thead><tr>
							<th>English / Anglais</th>
							<th>Gender / Genre</th>
							<th>Before a singular noun beginning with a vowel</th>
							<th>Before a singular noun beginning a consonant</th>
							<th>Before a plural noun</th>
						</tr></thead>
						<tbody><tr>
							<td>My</td>
							<td>If noun is feminine</td>
							<td style={{textAlign:"center"}}>mon</td>
							<td style={{textAlign:"center"}}>ma</td>
							<td rowSpan="2" style={{textAlign:"center"}}>mes</td>
						</tr>
						<tr>
							<td>My</td>
							<td>If noun is masculine</td>
							<td colSpan="2" style={{textAlign:"center"}}>mon</td>
						</tr>
						<tr>
							<td>His, Her, It's, One's</td>
							<td>If noun is feminine</td>
							<td style={{textAlign:"center"}}>son</td>
							<td style={{textAlign:"center"}}>sa</td>
							<td rowSpan="2" style={{textAlign:"center"}}>ses</td>
						</tr>
						<tr>
							<td>His, Her, It's, One's</td>
							<td>If noun is masculine</td>
							<td colSpan="2" style={{textAlign:"center"}}>son</td>
						</tr>
						<tr>
							<td>Our</td>
							<td>Masculine or feminine</td>
							<td colSpan="2" style={{textAlign:"center"}}>notre</td>
							<td style={{textAlign:"center"}}>nos</td>
						</tr>
						<tr>
							<td>Your</td>
							<td>Masculine or feminine</td>
							<td colSpan="2" style={{textAlign:"center"}}>votre</td>
							<td style={{textAlign:"center"}}>vos</td>
						</tr>
						<tr>
							<td>Their, Theirs</td>
							<td>Masculine or feminine</td>
							<td colSpan="2" style={{textAlign:"center"}}>leur</td>
							<td style={{textAlign:"center"}}>leurs</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
				<li><b>Du</b>, <b>de la</b>, <b>de l'</b>, <b>des</b> have different equivalents in English:<SubList>
					<li>Some, any (indicating quantity)</li>
					<li>From the</li>
					<li>Possessive case</li>
					<TableLI style={{width:"90%",marginLeft:"5%"}}><thead><tr>
							<th>Number</th>
							<th>Gender</th>
							<th>Before a consonant</th>
							<th>Before a vowel</th>
						</tr></thead>
						<tbody><tr>
							<td rowSpan="2">Singular</td>
							<td>Maculine</td>
							<td>du</td>
							<td rowSpan="2">de l'</td>
						</tr>
						<tr>
							<td>Feminine</td>
							<td>de la</td>
						</tr>
						<tr>
						<td>Plural</td>
						<td>Masculine and Feminine</td>
						<td colSpan="2">des</td>
						</tr>
					</tbody></TableLI>
					<TableLI>
						<thead><tr><th>French</th><th>English</th></tr></thead>
						<tbody>
							<tr><td>Je voudrais de la viande.</td><td>I would like some meat.</td></tr>
							<tr><td>Je voudrais du pain.</td><td>I would like some bread.</td></tr>
							<tr><td>Cette rue va de l'hôtel à la gare.</td><td>This street goes from the hotel to the station.</td></tr>
							<tr><td>C'est la chambre des enfants.</td><td>It's the children's room.</td></tr>
						</tbody>
					</TableLI>
					<li>If a noun in the plural form is preceded by an adjective, 'de' should be used instead of the indefinite article 'des':</li>
					<TableLI><tbody><tr><td>Avez-vous des nouvelles de votre frère?</td></tr>
						<tr><td>Avez-vous de bonnes nouvelles de votre frère?</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Numbers to 100:<SubList>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>Number</th><th>French</th><th>Number</th><th>French</th></tr></thead>
					<tbody>
						<tr><td>20</td><td>vingt</td><td>21</td><td>vingt et un</td></tr>
						<tr><td>30</td><td>trente</td><td>31</td><td>trente et un</td></tr>
						<tr><td>40</td><td>quarante</td><td>41</td><td>quarante et un</td></tr>
						<tr><td>50</td><td>cinquante</td><td>51</td><td>cinquante et un</td></tr>
						<tr><td>60</td><td>soixante</td><td>61</td><td>soixante et un</td></tr>
						<tr><td>70</td><td>soixante-dix</td><td>71</td><td>soixante et onze</td></tr>
						<tr><td>80</td><td>quatre-vingts</td><td>81</td><td>quatre-vingt un</td></tr>
						<tr><td>90</td><td>quatre-vingt-dix</td><td>91</td><td>quatre-vingt onze</td></tr>
						<tr><td>100</td><td>cent</td><td>101</td><td>cent un</td></tr>
					</tbody></TableLI>
					<li>To express seventy, we actually say "sixty-ten" (60 + 10).</li>
					<li>To express eighty, we say "four-twenties" (4 x 20).</li>
					<li>Ninety becomes "eighty-ten" (80 + 10).</li>
					<TableLI style={{width:"60%",marginLeft:"20%"}}><thead><tr><th>Number</th><th>French</th></tr></thead>
					<tbody>
						<tr><td>22</td><td>vingt-deux</td></tr>
						<tr><td>23</td><td>vingt-trois</td></tr>
						<tr><td>24</td><td>vingt-quatre</td></tr>
						<tr><td>25</td><td>vingt-cinq</td></tr>
						<tr><td>26</td><td>vingt-six</td></tr>
						<tr><td>27</td><td>vingt-sept</td></tr>
						<tr><td>28</td><td>vingt-huit</td></tr>
						<tr><td>29</td><td>vingt-neuf</td></tr>
						<tr><td>32</td><td>trente-deux</td></tr>
						<tr><td>42</td><td>quarante-deux</td></tr>
						<tr><td>52</td><td>cinquante-deux</td></tr>
						<tr><td>62</td><td>soixante-deux</td></tr>
						<tr><td>72</td><td>soixante-douze</td></tr>
						<tr><td>92</td><td>quatre-vingt-douze</td></tr>
					</tbody></TableLI>
					<li>See <a href='https://www.woodwardfrench.com/wp-content/uploads/2016/05/numbers-in-french-646x700.jpg'>this picture</a> to help you memorize.</li>
				</SubList></li>
				<li>Stressed Pronouns:<SubList>
					<TableLI>
						<tbody>
							<tr><td>Je</td><td>moi</td></tr>
							<tr><td>Tu</td><td>toi</td></tr>
							<tr><td>Il</td><td>lui</td></tr>
							<tr><td>Elle</td><td>elle</td></tr>
							<tr><td>Nous</td><td>nous</td></tr>
							<tr><td>Vous</td><td>vous</td></tr>
							<tr><td>Ils</td><td>Eux</td></tr>
							<tr><td>Elles</td><td>Elles</td></tr>
						</tbody>
					</TableLI>
					<li>You use the stessed pronoun after prepositions, in comparisons and with the restriction "ne ... que":</li>
					<TableLI>
						<tbody>
							<tr><td>Je suis devant eux.<br/>I'm in front of them.</td></tr>
							<tr><td>Jean est plus grand que moi.<br/>Jean is taller than me.</td></tr>
							<tr><td>Paulette n'aime que lui!<br/>Paulette loves only him!</td></tr>
						</tbody>
					</TableLI>
					<li>"Soi" is used to represent a universal "one[self]", in general statements or descriptions.</li>
					<TableLI>
						<tbody>
							<tr><td>On ne doit pas penser qu'à soi.<br/>One mustn't think only of oneself.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>Chez</b>:<SubList>
					<li>The form <b>chez</b>, like the forms <b>à</b> and <b>de</b>, is a preposition and occurs before nouns and pronouns. However, <b>chez</b>  occurs only before a noun (or pronoun) which refers to a person.</li>
					<TableLI style={{width:"90%",marginLeft:"5%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr><td>chez (a person)</td><td>at, to a person's house, home, office, store, place of business, etc.</td></tr>
						<tr><td>à (a place)</td><td>at, to a place, etc.</td></tr>
					</tbody></TableLI>
					<TableLI style={{width:"70%",marginLeft:"15%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr><td>Je vais chez le boulanger.</td><td>I'm going to the baker's.</td></tr>
						<tr><td>Je vais à la boulangerie.</td><td>I'm going to the bakery.</td></tr>
					</tbody></TableLI>
					<li>In French, you will never use à ma maison / à ta maison..., but you will use instead the generic <b>à la maison</b>.</li>
					<li><b>Chez</b> can be followed with a stressed pronoun.</li>
					<TableLI>
						<tbody>
							<tr><td>Ils sont chez eux</td><td>They're home</td></tr>
							<tr><td>Il vient chez toi plus tard</td><td>He's coming to your place later</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>Aller:</b><SubList>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr><td>je vais</td><td>I go / I am going</td></tr>
						<tr><td>tu vas</td><td>you go / you are going (singular)</td></tr>
						<tr><td>il va (elle,on)</td><td>he goes / he is going (she, one)</td></tr>
						<tr><td>nous allons</td><td>we go / we are going</td></tr>
						<tr><td>vous allez</td><td>you go / you are going (plural)</td></tr>
						<tr><td>ils vont (elles)</td><td>they go / they are going</td></tr>
					</tbody></TableLI>
					<li>In French, you can use the verb aller (to go) to express to feel/be fine, bad, better.</li>
					<TableLI>
						<tbody>
							<tr><td>Ça va bien</td><td>I'm fine/I feel fine</td></tr>
							<tr><td>Ils vont mieux</td><td>They feel better</td></tr>
							<tr><td>Il ne va pas très bien</td><td>He's not feeling very well</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>To express a need or to feel like:<SubList>
					<li>To express a need in French you can use <b>avoir besoin de</b> (Literally: to have need of [something]).</li>
					<TableLI>
						<tbody>
							<tr><td>J'ai besoin de repos</td><td>I need rest</td></tr>
							<tr><td>Elle a besoin de faire ses devoirs</td><td>She needs to do her homework</td></tr>
						</tbody>
					</TableLI>
					<li><b>Devoir + [infinitif]</b> primarily means "must [do]" / "have to [do]", but in some cases it can be used as "need to [do]".</li>
					<TableLI>
						<tbody>
							<tr><td>Je dois aller au travail.</td><td>I have to go to work.</td></tr>
							<tr><td>Je dois aller faire les courses.</td><td>I need to go shopping before dinner.</td></tr>
						</tbody>
					</TableLI>
					<li>The French expression <b>avoir envie de</b> has different meanings, such as to feel like, to want or, in some very specific cases, to need.</li>
					<TableLI>
						<tbody>
							<tr><td>J'ai envie du chocolat</td><td>I want the chocolate</td></tr>
							<tr><td>J'ai envie de toi</td><td>I want you</td></tr>
						</tbody>
					</TableLI>
					<li>"needing to go to the toilet": You can use either <b>avoir besoin de</b> or <b>devoir</b> in that case, but you could also use <b>avoir envie de</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>Mon fils doit aller aux toilettes</td></tr>
							<tr><td>Mon fils a besoin d'aller aux toilettes.</td></tr>
							<tr><td>Mon fils a envie d'aller aux toilettes.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Talking about shopping:<SubList>
					<li>"Faire les courses" : This expression refers exclusively to food and utilities shopping.</li>
					<li>"Faire les magasins/Faire du shopping": These expressions both refer to the pleasure side of shopping.</li>
					<TableLI>
						<tbody>
							<tr><td>Ma mère a fait les courses</td><td>My mum went food shopping</td></tr>
							<tr><td>Elodie a fait du shopping avec sa mère.<br/>Elodie a fait les magasins avec sa mère.</td><td>Elodie went shopping with her mum.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>

		<div style={{width:"49%",marginRight:"0.5%",float:"right"}}>
			<ul>
				<li>"What a [noun]!":<SubList>
					<TableLI>
						<tbody>
							<tr><td>Quelle bonne idée!</td><td>What a good idea!</td></tr>
							<tr><td>Quel cadeau extraordinaire!</td><td>What an amazing gift!</td></tr>
							<tr><td>Quelles excuses minables!</td><td>What lousy excuses!</td></tr>
							<tr><td>Quels beaux enfants!</td><td>What beautiful children!</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Verbs of opinions:<SubList>
					<li>When using verbs of opinions such as <b>penser</b> (to think) and <b>croire</b> (to believe) to say 'I believe that / I think that' in French, you always need to put que ('that') after them.</li>
					<TableLI>
						<tbody>
							<tr><td>Vous pensez qu'elle chante bien.<br/>You think (that) she sings well.</td></tr>
							<tr><td>Nous pensons que c'est une bonne idée.<br/>We think it's a good idea.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>"Everyone":<SubList>
					<li>The expression "tout le monde" is used in French to refer to everyone/everybody. This expression is always singular.</li>
					<TableLI>
						<tbody>
							<tr><td>Tout le monde est gentil.<br/>Everybody is nice.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Continents/countries/counties/regions/states:<SubList>
					<li>In French, countries, continents, regions and states are either feminine, masculine or plural.</li>
					<li>Most places ending in 'e' are feminine, while places ending in other letters are masculine.</li>
					<li>Some countries are plural: they're usually made up of several "parts".</li>
					<TableLI>
						<tbody>
							<tr><td>le Mexique</td><td>Mexico</td></tr>
							<tr><td>le Japon</td><td>Japan</td></tr>
							<tr><td>les États-Unis</td><td>USA</td></tr>
						</tbody>
					</TableLI>
					<li>Countries/continents/states/regions are used with the definite article <b>le</b>, <b>la</b>, <b>l'</b> or <b>les</b>, when used in general statements.</li>
					<li>When talking about going to or from a country, you won't use the definite article: <i>Je vais en France ce weekend</i>.</li>
					<li>Cities do not use articles: <i>J'aime Paris et Londres</i>.</li>
					<li>To express in/to + [country]:<SubList>
						<li><b>en</b> with feminine countries and masculine countries starting with a vowel</li>
						<li><b>au</b> with masculine countries</li>
						<li><b>aux</b> with plural countries</li>
						<TableLI>
							<tbody>
								<tr><td>Il est en Angleterre maintenant</td><td>He's in England now</td></tr>
								<tr><td>On est au Portugal</td><td>We are in Portugal</td></tr>
								<tr><td>Mon ami Sahid vit en Iran</td><td>My friend Sahid lives in Iran</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>To express in/to + [regions/states/counties]:<SubList>
						<li><b>en</b> with feminine regions/states/counties</li>
						<li><b>dans le</b> with masculine counties starting with a consonant or aspirated h</li>
						<li><b>dans l'</b> with masculine regions/states/counties starting with a vowel or mute h</li>
						<TableLI>
							<tbody>
								<tr><td>Mon frère va en Californie</td><td>My brother goes to California</td></tr>
								<tr><td>J'habite dans le New Jersey</td><td>I live in New Jersey</td></tr>
								<tr><td>Nous allons dans l'Illinois</td><td>We're going to Illinois</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>For cities:<SubList>
						<li>Use <b>à</b> when describing going to or being in a city.</li>
						<li>Use <b>de</b> to indicate being, coming or returning from a city:</li>
						<TableLI>
							<tbody>
								<tr><td>Je vais à Paris</td><td>I'm going to Paris</td></tr>
								<tr><td>Il revient de Londres</td><td>He's coming back from London</td></tr>
								<tr><td>Je suis de La Rochelle</td><td>I'm from La Rochelle</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li><b>Dans</b> vs <b>en</b> with locations:<SubList>
						<li><b>Dans</b> (+ <b>un</b>/<b>une</b>, <b>le</b>/<b>la</b>/<b>l'</b>/<b>les</b>, <b>des</b>) and <b>en</b> are both used to mean in a location (town, class...).</li>
						<TableLI>
							<tbody>
								<tr><td>Je suis en classe</td><td>I'm in class</td></tr>
								<tr><td>Je suis dans la classe</td><td>I'm in the classroom</td></tr>
							</tbody>
						</TableLI>
						<li><b>Dans</b> + [article] + [noun] refers to the physical place or building</li>
						<li><b>En</b> + [noun] refers to a place in general, or to the function represented by the place.</li>
						<TableLI>
							<tbody>
								<tr><td>Il y a une boulangerie dans la ville</td><td>There is a bakery in the town</td></tr>
								<tr><td>Ma fille est en école d'ingénieur</td><td>My daughter is in engineering school.</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
				</SubList></li>
				<li>Articles for uncountable nouns:<SubList>
					<li>Some nouns are uncountable - you don't put a number before them. For example, we generally say "I want some honey", not "I want one honey". you always need <b>du</b>, <b>de la</b>, or <b>des</b> before those uncountable nouns!</li> 
					<li>Use definite articles <b>le</b>, <b>la</b>, <b>l'</b>, <b>les</b> when using verbs of preference (aimer, adorer, préférer, etc).</li>
					<TableLI>
						<tbody>
							<tr><td>Je prends du sucre avec mon café</td><td>I take sugar with my coffee</td></tr>
							<tr><td>J'achète des pâtes</td><td>I buy pasta</td></tr>
							<tr><td>Il déteste le café</td><td>He hates coffee</td></tr>
							<tr><td>Il adore le chocolat</td><td>I love chocolate</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Negative sentences with indefinite and partitive articles:<SubList>
					<li>Indefinite articles <b>un</b> and <b>une</b> become <b>de</b> or <b>d'</b> (in front of a vowel or mute h) after a negative expression (same with partitive articles <b>du</b>, <b>de</b> <b>la</b>, <b>de l'</b>).</li>
					<li>Partitive articles <b>du</b>, <b>de la</b>, <b>de l'</b> and <b>des</b> also become <b>de</b> or <b>d'</b> (in front of a vowel or mute h) in negative sentences.</li>
					<TableLI>
						<tbody>
							<tr><td>Il a une voiture</td><td>He has a car</td></tr>
							<tr><td>Il n'a pas de voiture</td><td>He doesn't have a car</td></tr>
							<tr><td>Je mange des pommes</td><td>I eat apples</td></tr>
							<tr><td>Je ne mange pas de pommes</td><td>I don't eat any apples</td></tr>
						</tbody>
					</TableLI>
					<li>This rule does not apply to sentences using the verb <b>être</b> and other <a href='https://progress.lawlessfrench.com/learn/theme/1512981'>state verbs</a>.</li>
					<TableLI>
						<tbody>
							<tr><td>Je ne suis pas une menteuse</td><td>I'm not a liar</td></tr>
							<tr><td>Le plomb ne devient pas de l'or</td><td>Lead doesn't become gold</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Weights and measures:<SubList>
					<li>The definite article (le, la, les) is used with weights and measures to mean "per".</li>
					<TableLI>
						<tbody>
							<tr><td>Les pommes coûtent 1,50 € le kilo</td><td>The apples cost € 1.50 per kilo</td></tr>
							<tr><td>J'ai payé 2000 € la tonne</td><td>I paid € 2,000 per ton</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Body parts and clothing:<SubList>
					<li>When referring to someone's own body parts or own pieces of clothing, in French the definite article (le, la, l', les) is used rather than the possessive adjective (ma, mon, sa, son etc).</li>
					<TableLI>
						<tbody>
							<tr><td>Ils ont les yeux fermés</td><td>They have their eyes closed</td></tr>
							<tr><td>J'ai mal à la tête</td><td>My head hurts</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Titles, languages & academic subjects:<SubList>
					<li>Definite articles (le, la, l', les) are used with titles, languages & academic subjects in French.</li>
					<TableLI>
						<tbody>
							<tr><td>La science est...</td><td>Science is...</td></tr>
							<tr><td>Le président Mitterrand est...</td><td>President Mitterrand is...</td></tr>
						</tbody>
					</TableLI>
					<li>Only in the phrase "parler + [language]" can you use both forms, with or without le.</li>
					<TableLI>
						<tbody>
							<tr><td>Il parle portugais / Il parle le portugais.</td></tr>
							<tr><td>He speaks Portuguese.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Surnames:<SubList>
					<li>Unlike in English, you don't add an -s to surnames in French when talking about a whole family.</li>
					<TableLI>
						<tbody>
							<tr><td>Les Richardson nous ont invités.</td></tr>
							<tr><td>The Richardsons invited us.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>neuf</b> vs <b>nouveau</b>:<SubList>
					<li>While both mean 'new', neuf implies that it's never been used before, brand new (Note that it cannot apply to living things, e.g. pets), whereas nouveau just means 'new' in a more general sense.</li>
					<li>neuf is placed AFTER the noun</li>
					<li>nouveau is placed BEFORE the noun</li>
				</SubList></li>
				<li>French negations with conjugated verb + infinitive:<SubList>
					<TableLI>
						<tbody>
							<tr><td>Tu ne veux pas venir ce soir?</td><td>Don't you want to come tonight?</td></tr>
						</tbody>
					</TableLI>
					<li>You cannot say: "Tu ne veux venir pas ce soir". </li>
				</SubList></li>
				<li>To express a purpose:<SubList>
					<li>To express a purpose in French (in order to [do something]), we use the preposition <b>pour</b> + [infinitif].</li>
					<li>You can also use the more elegant expression <b>afin de</b> + [infinitif] in the same context.</li>
					<TableLI>
						<tbody>
							<tr><td>Je vais au cinéma pour voir un film.</td><td>I'm going to the cinema (in order) to see a film.</td></tr>
							<tr><td>Je prends des leçons afin d'apprendre le français.</td><td>I'm taking lessons (in order) to learn French.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>Sentir:</b><SubList>
					<TableLI>
						<tbody>
							<tr><td>je</td><td>sens</td></tr>
							<tr><td>tu</td><td>sens</td></tr>
							<tr><td>il, elle, on</td><td>sent</td></tr>
							<tr><td>nous</td><td>sentons</td></tr>
							<tr><td>vous</td><td>sentez</td></tr>
							<tr><td>ils, elles</td><td>sentent</td></tr>
						</tbody>
					</TableLI>
					<li><b>Sentir</b> is first of all used to express the sense of smell. It can also be used in a larger sense to express to feel something, and in some cases, <b>sentir</b> can even be used to express taste.</li>
					<li>You use <b>sentir</b> to express both to smell/feel/taste [something] and to smell like/of [something].</li>
					<TableLI>
						<tbody>
							<tr><td>Est-ce que vous sentez ce parfum?</td><td>Do you smell that perfume?</td></tr>
							<tr><td>je ne sens rien.</td><td>I don't feel anything.</td></tr>
							<tr><td>Est-ce qu'elle sent ça?</td><td>Does she feel that?</td></tr>
							<tr><td>Est-ce que tu sens la tomate?</td><td>Do you taste the tomato?</td></tr>
							<tr><td>Tu sens la friture</td><td>You smell of fried food</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="beginner3">Beginner Part 3</h2>
	<div className="content">
		<div style={{marginLeft:"1%",width:"48%",float:"left"}}>
			<ul>
				<li>Means of transportation:<SubList>
					<li>When talking about travelling somewhere, you will use <b>à</b> for "individual" modes of transport (walking, bicycle, bike etc), and <b>en</b> for "group" modes of transport (bus, coach, car, subway, etc).</li>
					<li>Note that you can also use <b>par le</b> with trains and <b>par</b> with planes, and that for bicycles, you can use either <b>à vélo</b> or <b>en vélo</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>Tu vas en ville à pied.</td><td>You go to town on foot/walking.</td></tr>
							<tr><td>Elle va au travail en métro.</td><td>She goes to work by /metro.</td></tr>
							<tr><td>Je vais à l'école à vélo.<br/>Je vais à l'école en vélo.</td><td>I'm going to school by bike.</td></tr>
							<tr><td>Nous venons en train.<br/>Nous venons par le train</td><td>We're coming by train.</td></tr>
							<tr><td>Tu voyages en avion.<br/>Tu voyages par avion.</td><td>You travel by plane.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>When referring to the street, road, avenue, or boulevard people live on (using <b>habiter</b>):<SubList>
					<li>You can either use <b>dans la/le</b>, simply <b>la/le</b> or nothing at all:</li>
					<TableLI>
						<tbody>
							<tr><td>J'habite dans la rue Pasteur.<br/>J'habite la rue Pasteur.<br/>J'habite rue Pasteur.</td><td>I live on Rue Pasteur.</td></tr>
						</tbody>
					</TableLI>
					<li>With <b>être</b> (to be) or <b>vivre</b> (to live), you can use either <b>dans la/le</b> or nothing at all.</li>
					<TableLI>
						<tbody>
							<tr><td>Ce magasin est dans l'avenue Jeanne d'Arc.<br/>Ce magasin est avenue Jeanne d'Arc.<br/></td><td>This shop is on Avenue Jeanne d'Arc.</td></tr>
						</tbody>
					</TableLI>
					<li>You can use <b>sur l'avenue</b> when used with <b>se promener</b> (to have a walk). <u>Example:</u> <i>Nous aimons nous promener sur l'avenue</i>.</li>
				</SubList></li>
				<li>Some prepositional phrases:<SubList>
					<TableLI><tbody>
						<tr>
						<td>à côté de</td>
						<td>next to </td>
						</tr>
						<tr>
						<td>en face de</td>
						<td>opposite</td>
						</tr>
						<tr>
						<td>à l'extérieur de<br/>en dehors de</td>
						<td>outside</td>
						</tr>
						<tr>
						<td>à l'intérieur de</td>
						<td>inside</td>
						</tr>
						<tr>
						<td>près de</td>
						<td>close to / near</td>
						</tr>
						<tr>
						<td>loin de</td>
						<td>far from</td>
						</tr>
						<tr>
						<td>au coin de</td>
						<td>by&nbsp;/ at the corner of</td>
						</tr>
						</tbody>
					</TableLI>
					<li><b>À l'extérieur de</b> means outside in a geographical way.</li>
					<li><b>En dehors de</b> is more the abstract outside, in the sense of apart from, but can also be used with locations.</li>
					<TableLI>
						<tbody>
							<tr><td>En dehors de cela, je pense que c'est une mauvaise idée.</td><td>Apart from that, I think it's a bad idea.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Compound nouns:<SubList>
					<li>In English, we often simply squish nouns together to form new words for things: wine glass, snowball, ironing board, etc. In French though, compound words like this are almost always separated by <b>à</b> or <b>de</b> or <b>en</b> and the meaning changes depending on which is used.</li>
					<li><b>à</b> usually indicates what something is designed for, e.g. <i>un verre à vin</i> (a glass of wine).</li>
					<li><b>de</b> or <b>en</b> usually implies what something is made of, e.g. <i>un sac de cuir</i> / <i>un sac en cuir</i>.</li>
					<li><b>à la / à l' / au / aux</b> are used particularly with food to mean with, made with or flavoured with:</li>
					<TableLI>
						<tbody>
							<tr><td>une glace à la vanille</td></tr>
							<tr><td>une tarte aux pommes</td></tr>
							<tr><td>un sandwich au jambon</td></tr>
						</tbody>
					</TableLI>
					<li>Compound nouns formed with <b>[noun] + à + [infinitive]</b> are often used to indicate function (<i>salle à manger</i> - dining room).</li>
				</SubList></li>
				<li>Indefinite adjectives:<SubList>
					<li><b>Plusieurs</b> (several) is always and only plural.</li>
					<li><b>Quelques</b> (a few) also occurs before plural nouns.</li>
					<li><b>Chaque</b> (each) is always singular.</li>
					<li><b>Certain</b> (certain) shows gender and number.</li>
					<li><b>Quel</b> (which, what) shows gender and number.</li>
					<TableLI><thead><tr>
							<th></th>
							<th>Feminine</th>
							<th>Masculine</th>
						</tr></thead>
						<tbody><tr>
						<th>Singular</th>
						<td>certaine</td>
						<td>certain</td>
						</tr>
						<tr>
						<th>Plural</th>
						<td>certaines</td>
						<td>certains</td>
						</tr>
					</tbody></TableLI>
					<TableLI><thead><tr><th></th><th>Feminine</th><th>Masculine</th></tr></thead>
						<tbody><tr>
							<th>Singular</th>
							<td>quelle</td>
							<td>quel</td>
						</tr>
						<tr>
							<th>Plural</th>
							<td>quelles</td>
							<td>quels</td>
						</tr>
					</tbody></TableLI>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
							<td>plusieurs hôtels</td>
							<td>several hotels</td>
						</tr>
						<tr>
							<td>quelques minutes</td>
							<td>a few minutes</td>
						</tr>
						<tr>
							<td>chaque auto</td>
							<td>each car</td>
						</tr>
						<tr><td>un certain jour</td><td>a certain day</td></tr>
						<tr>
							<td>certains billets</td>
							<td>certain tickets</td>
						</tr>
						<tr><td>Quelle heure est-il?</td><td>What time is it?</td></tr>
						<tr><td>Je sais dans quel région il est.</td><td>I know in what region he is.</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Large cardinal numbers include:<SubList>
					<TableLI><tbody><tr>
							<td>100</td>
							<td>cent</td>
						</tr>
						<tr>
							<td>200</td>
							<td>deux cents</td>
						</tr>
						<tr>
							<td>300</td>
							<td>trois cents</td>
						</tr>
						<tr>
							<td>400</td>
							<td>quatre cents</td>
						</tr>
						<tr>
							<td>500</td>
							<td>cinq cents</td>
						</tr>
						<tr>
							<td>600</td>
							<td>six cents</td>
						</tr>
						<tr>
							<td>700</td>
							<td>sept cents</td>
						</tr>
						<tr>
							<td>800</td>
							<td>huit cents</td>
						</tr>
						<tr>
							<td>900</td>
							<td>neuf cents</td>
						</tr>
						<tr>
							<td>1000</td>
							<td>mille</td>
						</tr>
						<tr>
							<td>1100</td>
							<td>onze cents / mille cent</td>
						</tr>
						<tr>
							<td>1200</td>
							<td>douze cents / mille deux cents</td>
						</tr>
						<tr>
							<td>1300</td>
							<td>treize cents / mille trois cents</td>
						</tr>
						<tr>
							<td>1400</td>
							<td>quatorze cents / mille quatre cents</td>
						</tr>
						<tr>
							<td>1500</td>
							<td>quinze cents / mille cinq cents</td>
						</tr>
						<tr>
							<td>1600</td>
							<td>seize cents / mille six cents</td>
						</tr>
						<tr>
							<td>1700</td>
							<td>dix-sept cents / mille sept cents</td>
						</tr>
						<tr>
							<td>1800</td>
							<td>dix-huit cents / mille huit cents</td>
						</tr>
						<tr>
							<td>1900</td>
							<td>dix-neuf cents / mille neuf cents</td>
						</tr>
						<tr>
							<td>2000</td>
							<td>deux mille</td>
						</tr>
						<tr>
							<td>3000</td>
							<td>trois mille</td>
						</tr>
						<tr>
							<td>10000</td>
							<td>dix mille</td>
						</tr>
						<tr>
						<td>20000</td>
						<td>vingt mille</td>
						</tr>
						<tr>
						<td>30000</td>
						<td>trente
						mille</td>
						</tr>
						<tr>
						<td>100000</td>
						<td>cent mille</td>
						</tr>
						<tr>
						<td>200000</td>
						<td>deux
						cent mille</td>
						</tr>
						<tr>
						<td>300000</td>
						<td>trois cent mille</td>
						</tr>
						<tr>
						<td>1000000</td>
						<td>un
						million</td>
						</tr>
						<tr>
						<td>5000000</td>
						<td>cinq millions</td>
						</tr>
						<tr>
							<td>1000000000</td>
							<td>un milliard</td>
						</tr>
					</tbody></TableLI>
					<li>The numbers million and milliard are marked nouns:</li>
					<TableLI><tbody><tr>
						<td>cent francs</td>
						<td>one hundred francs</td>
						</tr>
						<tr>
						<td>mille
						francs</td>
						<td>one
						thousand francs</td>
						</tr>
						<tr>
						<td>un million de francs</td>
						<td>one million francs</td>
						</tr>
						<tr>
						<td>un milliard de francs</td>
						<td>one billion francs</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Weather phenomena are expressed by verbs having as subjects the impersonal subject pronoun <b>il</b>. There are three such verb patterns:<SubList>
					<li><b>Il fait</b>, followed by:<SubList>
						<li>certain adjectives</li>
						<li><i>du + Noun</i></li>
					</SubList></li>
					<li><b>Il y a</b>,  followed by <i>du/de la + Noun</i>.</li>
					<li>Special verbs (<b>pleuvoir</b> = to rain, <b>geler</b> = to freeze, <b>neiger</b> = to snow)</li>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
						<td>Il fait froid.</td>
						<td>It's cold weather.</td>
						</tr>
						<tr>
						<td>Il fait chaud.</td>
						<td>It's hot weather.</td>
						</tr>
						<tr>
						<td>Il fait sec.</td>
						<td>It's dry weather.</td>
						</tr>
						<tr>
						<td>Il fait beau (temps).</td>
						<td>It's nice weather.</td>
						</tr>
						<tr>
						<td>Il fait mauvais (temps).</td>
						<td>It's bad weather.</td>
						</tr>
						<tr>
						<td>Il fait frais.</td>
						<td>It's cool weather.</td>
						</tr>
						<tr><td>Il fait du soleil.</td><td>It's sunny weather.</td></tr>
						<tr><td>Il fait du vent.</td><td>It's windy weather</td></tr>
						<tr>
							<td>Il y a du soleil.</td>
							<td>It's sunny weather.</td>
						</tr>
						<tr>
							<td>Il y a du vent.</td>
							<td>It's windy weather</td>
						</tr>
						<tr>
						<td>Il pleut.</td>
						<td>It's raining.</td>
						</tr>
						<tr>
						<td>Il gèle.</td>
						<td>It's freezing.</td>
						</tr>
						<tr>
						<td>Il neige.</td>
						<td>It's snowing.</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
				<li>The seasons:<SubList>
					<li>To say in + [winter, summer, autumn], you will use either:<SubList opened>
						<li>en + [hiver, été, automne]</li>
						<li>l' + [hiver, été, automne] </li>
					</SubList></li>
					<li>For spring: au printemps</li>
					<TableLI>
						<tbody>
							<tr><td>En hiver, je vais skier.</td><td>In winter, I go skiing.</td></tr>
							<tr><td>L'hiver, il fait très froid.</td><td>In winter, it's very cold.</td></tr>
							<tr><td>Au printemps, on se sent heureux.</td><td>In spring, we feel happy.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>Adjectives:</b> words that modify nouns or pronouns:<SubList>
					<li><b>Number:</b><SubList>
						<li>Plural of most French adjectives is formed by adding an <b>-s</b> to the singular form.</li>
						<li>Adjectives ending in <b>s</b> or <b>x</b> in the singular do not change in the plural.</li>
						<li>Adjectives ending in <b>eau</b> in the masculine singular add an <b>x</b> to form the masculine plural.</li>
						<TableLI>
						<thead><tr><th>Singular</th><th>Plural</th></tr></thead>
							<tbody><tr><td>le <b>petit</b> magasin</td><td>les <b>petits</b> magasins</td></tr>
							<tr><td>la <b>grande</b> route</td><td>les <b>grandes</b> routes</td></tr>
							<tr><td>le <b>vieux</b> magasin (old)</td><td>les <b>vieux</b> magasins</td></tr>
							<tr><td>le <b>mauvais</b> hôtel</td><td>les <b>mauvais</b> hôtels</td></tr>
							<tr><td>le <b>nouveau</b> magasin</td><td>les <b>nouveaux</b> magasins</td></tr>
						</tbody></TableLI>
					</SubList></li>
					<li><b>Gender:</b><SubList>
						<li>In general the feminine form is obtained by adding an <b>e</b> to the masculine form (unless it already ends in an <b>e</b> in the masculine form).</li>
						<li>Unlike e, adjectives ending in é follow the general rule.</li>
						<TableLI>
							<thead><tr><th>Masculine</th><th>Feminine</th></tr></thead>
							<tbody>
								<tr><td>un <b>petit</b> paquet</td><td>une <b>petite</b> valise</td></tr>
								<tr><td>un <b>jeune</b> employé</td><td>une <b>jeune</b> employée</td></tr>
								<tr><td>un <b>autre</b> boulanger</td><td>une <b>autre</b> pâtisserie</td></tr>
								<tr><td>un paquet <b>recommandé</b></td><td>une lettre <b>recommandée</b></td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li><b>Ordinal number:</b><SubList>
						<li>Ordinal numbers are formed by adding <b>ième</b> to the cardinal numbers.</li>
						<TableLI>
						<thead><tr>
								<th>Masculine / Masculin</th>
								<th>Feminine / F&eacute;minin</th>
							</tr></thead>
							<tbody><tr>
								<td>le&nbsp;<b>deuxi&egrave;me</b>&nbsp;jour</td>
								<td>la&nbsp;<b>deuxi&egrave;me</b>&nbsp;semaine</td>
							</tr>
							<tr>
								<td>le&nbsp;<b>troisi&egrave;me</b>&nbsp;matin</td>
								<td>la&nbsp;<b>troisi&egrave;me</b>&nbsp;fois</td>
							</tr>
							<tr>
								<td>le&nbsp;<b>quarante-cinqui&egrave;me</b>&nbsp;mot</td>
								<td>la <b>quarante-cinqui&egrave;me</b> question</td>
							</tr>
						</tbody></TableLI>
					</SubList></li>
					<li><b>Special cases:</b><SubList>
						<li>When the masculine form ends in <b>x</b>, the feminine form will end in <b>se</b>.</li>
						<li>When the masculine form ends in <b>ier</b>, the feminine form will end in <b>ière</b>.</li>
						<li>When the masculine form ends in <b>f</b>, the feminine form will end in <b>ve</b>.</li>
						<TableLI>
						<thead><tr><th>Masculine</th><th>Feminine</th></tr></thead>
							<tbody><tr><td>Il est <b>heureux</b></td><td>Elle est <b>heureuse</b></td></tr>
							<tr><td>le <b>premier</b> étage</td><td>la <b>première</b> semaine</td></tr>
							<tr><td>le <b>dernier</b> jour</td><td>la <b>dernière</b> année</td></tr>
							<tr><td>un manteau <b>neuf</b></td><td>une robe <b>neuve</b></td></tr>
						</tbody></TableLI>
						<li>Some adjectives have two shapes for the masculine singular: one is used before words beginning with a vowel, the other, before words beginning with a consonant.</li>
						<TableLI style={{width:"100%"}}>
						<thead><tr><th colSpan="3">Masculine</th><th colSpan="2">Feminine</th></tr></thead>
							<tbody><tr><td colSpan="2" style={{textAlign:"center"}}>Singular</td><td rowSpan="2" style={{textAlign:"center"}}>Plural</td><td rowSpan="2" style={{textAlign:"center"}}>Singular</td><td rowSpan="2" style={{textAlign:"center"}}>Plural</td></tr>
							<tr><td style={{textAlign:"center"}}>Before a vowel</td><td style={{textAlign:"center"}}>Before a consonant</td></tr>
							<tr><td>vieil</td><td>vieux</td><td>vieux</td><td>vieille</td><td>vieilles</td></tr>
							<tr><td>bel</td><td>beau</td><td>beaux</td><td>belle</td><td>belles</td></tr>
							<tr><td>nouvel</td><td>nouveau</td><td>nouveaux</td><td>nouvelle</td><td>nouvelles</td></tr>
						</tbody></TableLI>
					</SubList></li>
					<li><b>Exceptions:</b></li>
					<TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>Masculine</th><th>Feminine</th></tr></thead>
						<tbody><tr><td>un costume blanc</td><td>une chemise blanche</td></tr>
						<tr><td>un temps frais</td><td>une soirée fraîche </td></tr>
						<tr><td>un climat sec</td><td>une saison sèche</td></tr>
						<tr><td>un costume marron</td><td>une robe marron </td></tr>
						<tr><td>un gros  livre </td><td>une grosse caisse</td></tr>
						<tr><td>un ancien hôtel</td><td>une ancienne route</td></tr>
						<tr><td>un bon pâtissier</td><td>une bonne boulangerie</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li><b>Object pronouns</b> precede the verb in affirmative, negative or interrogative sentences:<SubList>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr><td>me, m'</td><td>me, to me </td></tr>
						<tr><td>nous</td><td>us, to us</td></tr>
						<tr><td>vous</td><td>you, to you </td></tr>
						<tr><td>le, l'</td><td>him, it </td></tr>
						<tr><td>la, l'</td><td>her, it </td></tr>
						<tr><td>les</td><td>them </td></tr>
					</tbody></TableLI>
					<li>Elle <b>me</b> convient tout à fait.</li>
					<li>Combien <b>vous</b> dois-je?</li>
					<li>Je <b>la</b> prends.</li>
					<li>Pourquoi ne <b>l'</b>envoyez-vous pas de chez vous?</li>
				</SubList></li>
				<li><b>Question-words:</b><SubList>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr><td>qui?</td><td>who?</td></tr>
						<tr><td>qu', que?</td><td>what?</td></tr>
						<tr><td>où?</td><td>where?</td></tr>
						<tr><td>quand?</td><td>when?</td>
						</tr>
						<tr><td>pourquoi?</td><td>why?</td></tr>
						<tr><td>comment?</td><td>how?</td></tr>
						<tr><td>combien?</td><td>how much, how many?</td></tr>
						<tr><td>quel, quelle?</td><td>which, what?</td></tr>
					</tbody></TableLI>
					<li>Most of the time question words would be at the end of the statement, but they can also sometimes be at the beginning of the statement.</li>
					<li><b>Quoi</b> can only be at the end of the sentence.</li>
					<li>In who + [verb] questions - (who does, who cooks...?) - <b>qui</b> is always at the beginning of the question - (qui fait, qui cuisine...?) - BUT in other cases, such as whom... or who is it?, <b>qui</b> can be in either place.</li>
					<TableLI>
						<tbody>
							<tr><td>Comment tu vas?<br/>Tu vas comment?</td><td>How are you?</td></tr>
							<tr><td>Tu viens quand?</td><td>When are you coming?</td></tr>
							<tr><td>Qui fait la vaisselle ce soir?</td><td>Who washes the dishes tonight?</td></tr>
							<tr><td>Elle aime qui?</td><td>Who(m) does she love?</td></tr>
						</tbody>
					</TableLI>
					<li>You can place the question word before <b>est-ce que</b> followed by the statement in a normal order.</li>
					<TableLI>
						<tbody>
							<tr><td>Où est-ce que tu vas?</td><td>Where are you going?</td></tr>
							<tr><td>Qu'est-ce qu'elle veut faire?</td><td>What does she want to do?</td></tr>
						</tbody>
					</TableLI>
					<li>The question-words are followed by subject-verb inversion, whether the subject is a noun or a pronoun.</li>
					<TableLI><thead><tr>
							<th>Examples:</th>
							<th>Structure:</th>
						</tr></thead>
						<tbody><tr>
							<td>Comment va votre fr&egrave;re?</td>
							<td>Q + Verb + Noun</td>
						</tr>
						<tr>
							<td>Comment va-t-il?</td>
							<td>Q + Verb + SP</td>
						</tr>
						</tbody></TableLI>
					<li>The question-word <b>combien</b> may occur before a noun; in this position it has the form <b>combien de</b>.<SubList opened={true}>
						<li>Combien vous dois-je?</li>
						<li>Combien de malles avez-vous?</li>
					</SubList></li>
				</SubList></li>
				<li>Adjective Positions:<SubList>
					<li>Follow the noun (post-nominal).</li>
					<TableLI><tbody><tr><td>une valise verte</td></tr>
						<tr><td>un employé français</td></tr>
					</tbody></TableLI>
					<li>Precede the noun (pre-nominal).</li>
					<TableLI><thead><tr>
							<th>Type of adjectives</th>
							<th>Example</th>
						</tr></thead>
						<tbody><tr>
							<td>demonstrative adjectives</td>
							<td>ces&nbsp;enfants</td>
						</tr>
						<tr>
							<td>indefinite adjectives</td>
							<td>plusieurs&nbsp;enfants</td>
						</tr>
						<tr>
							<td>interrogative adjectives</td>
							<td>quelle&nbsp;heure</td>
						</tr>
						<tr>
							<td>possessive adjectives</td>
							<td>ma&nbsp;soeur</td>
						</tr>
						<tr>
							<td>numeral adjectives</td>
							<td>deux&nbsp;enfants</td>
						</tr>
						<tr>
							<td>ordinal adjectives</td>
							<td>premier &eacute;tage</td>
						</tr>
					</tbody></TableLI>
					<li>Some adjectives can occasionally change their position for stylistic reasons.</li>
					<TableLI><thead><tr>
							<th>French / Fran&ccedil;ais</th>
							<th>English / Anglais</th>
						</tr></thead>
						<tbody><tr>
							<td>d&apos;excellentes&nbsp;vacances</td>
							<td>excellent vacation</td>
						</tr>
						<tr>
							<td>des vacances&nbsp;excellentes</td>
							<td>excellent vacation</td>
						</tr>
						</tbody></TableLI>
					<li>Some adjectives are used in different positions according to the nouns they qualify.</li>
					<TableLI><thead><tr>
							<th>French / Fran&ccedil;ais</th>
							<th>English / Anglais</th>
						</tr></thead>
						<tbody><tr>
							<td>la&nbsp;prochaine&nbsp;fois</td>
							<td>next time</td>
						</tr>
						<tr>
							<td>la semaine&nbsp;prochaine</td>
							<td>next week</td>
						</tr>
						</tbody></TableLI>
					<li>Some adjectives have different meanings according to their position:<SubList>
						<TableLI>
						<thead><tr><th>Adjectives</th><th>Pre-nominal</th><th>Post-nominal</th></tr></thead><tbody>
							<tr>
							<td>seul</td>
							<td>only one</td>
							<td>alone</td>
							</tr>
							<tr>
							<td>cher</td>
							<td>dear</td>
							<td>expensive</td>
							</tr>
							<tr>
							<td>ancien</td>
							<td>former</td>
							<td>old, ancient</td>
							</tr>
							<tr>
							<td>vrai</td>
							<td>real</td>
							<td>true</td>
							</tr>
							<tr>
							<td>dernier</td>
							<td>last of a series</td>
							<td>last, preceding</td>
							</tr>
						</tbody></TableLI>
					</SubList></li>
				</SubList></li>
				<li><b>'En'</b> replaces 'de + noun or pronoun':<SubList>
					<li>The object pronoun <b>en</b> is used instead of 'le, la, les' if the noun it replaces is used in an indefinite or partitive sense.</li>
					<TableLI><tbody><tr>
						<td>Voilà des billets.</td>
						<td>Here are some tickets.</td>
						</tr>
						<tr>
						<td>En 
						voilà.</td>
						<td>Here are some.</td>
						</tr>
						<tr>
						<td>Voilà les billets.</td>
						<td>Here are the tickets.</td>
						</tr>
						<tr>
						<td>Les voilà.</td>
						<td>Here they are.</td>
						</tr>
						<tr>
						<td>Il achète du pain.</td>
						<td>He is buying some bread.</td>
						</tr>
						<tr>
						<td>Il en 
						achète.</td>
						<td>He is buying some.</td>
						</tr>
						<tr>
						<td>Il achète le pain.</td>
						<td>He is buying the bread.</td>
						</tr>
						<tr>
						<td>Il l' achète</td>
						<td>He is buying it.</td>
						</tr>
					</tbody></TableLI>
					<li>The object pronoun <b>en</b> is also used when the noun is preceded by a number or an adverb of quantity.</li>
					<TableLI><tbody><tr>
						<td>Donnez-moi quatre
						chemises.</td>
						<td>Give me four shirts.</td>
						</tr>
						<tr>
						<td>Donnez-m'en quatre.</td>
						<td>Give me four.</td>
						</tr>
						<tr>
						<td>Nous avons plusieurs
						chambres libres.</td>
						<td>We have several rooms vacant. </td>
						</tr>
						<tr>
						<td>Nous en avons
						plusieurs de libres.</td>
						<td>We have several vacant. </td>
						</tr>
					</tbody></TableLI>
					<li><b>En</b> can be used for 'de + location', meaning from there.</li>
					<TableLI><tbody><tr>
						<td>Il vient du Midi.</td>
						<td>He is coming from the south of France.</td>
						</tr>
						<tr>
						<td>Il en vient.</td>
						<td>He is coming from there.</td>
						</tr>
						<tr>
						<td>Il part du bureau à 6
						heures.</td>
						<td>He leaves the office at 6 o'clock.</td>
						</tr>
						<tr>
						<td>Il en part à 6
						heures.</td>
						<td>He leaves it at 6 o'clock.</td>
						</tr>
					</tbody></TableLI>
					<li><b>En</b> is used with verbs followed by 'de', even if the noun or pronoun is used in a definite way.</li>
					<TableLI><tbody><tr>
						<td>Il a besoin de l'auto.</td>
						<td>He needs the car.</td>
						</tr>
						<tr>
						<td>Il en a besoin.</td>
						<td>He needs it.</td>
						</tr>
						<tr>
						<td>Il a besoin de
						celles-ci.</td>
						<td>He needs these.</td>
						</tr>
						<tr>
						<td>Il en a besoin.</td>
						<td>He needs them.</td>
						</tr>
						<tr>
						<td>Elle parle du
						discours.</td>
						<td>She's talking about the speech.</td>
						</tr>
						<tr>
						<td>Elle en parle.</td>
						<td>She's talking about it.</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
				<li><b>Imperatives:</b><SubList>
					<li>Verb forms in <b>ez</b> occurring initially and neither preceded nor followed by the subject pronoun 'vous' are used to indicate a request or a command.</li>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
							<td>Vous parlez fran&ccedil;ais.</td>
							<td>You&apos;re speaking French. / You speak French</td>
						</tr>
						<tr>
							<td>Parlez fran&ccedil;ais.</td>
							<td>Speak French.</td>
						</tr>
					</tbody></TableLI>
					<li>Similarly, <b>ons</b> forms in the same frame are regarded as imperatives, with the meaning 'Let's ...'</li>
					<TableLI><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
						<tr>
							<td>Parlons fran&ccedil;ais.</td>
							<td>Let&apos;s speak French.</td>
						</tr>
						<tr>
							<td>Allons dans le Midi.</td>
							<td>Let&apos;s go to the south of France.</td>
						</tr>
					</tbody></TableLI>
					<li>Four verbs have special imperative stems:<SubList>
						<TableLI>
						<thead><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr></thead>
							<tbody>
							<tr>
								<td rowSpan="2">avoir</td>
								<td rowSpan="2">to have</td>
								<td>Ayez&nbsp;de la monnaie.</td>
								<td>Have change.</td>
							</tr>
							<tr>
								<td>Ayons&nbsp;un enfant.</td>
								<td>Let&apos;s have a child</td>
							</tr>
							<tr>
								<td rowSpan="2">&ecirc;tre</td>
								<td rowSpan="2">to be</td>
								<td>Soyez&nbsp;en avance.</td>
								<td>Be early.</td>
							</tr>
							<tr>
								<td>Soyons&nbsp;fous.</td>
								<td>Let&apos;s be crazy. /Let&apos;s go wild.</td>
							</tr>
							<tr>
								<td rowSpan="2">savoir</td>
								<td rowSpan="2">to know</td>
								<td>Sachez&nbsp;ce que vous voulez.</td>
								<td>Know what you want.</td>
							</tr>
							<tr>
								<td>Sachons&nbsp;dire non.</td>
								<td>Let&apos;s say &quot;no&quot;</td>
							</tr>
							<tr>
								<td rowSpan="2">vouloir</td>
								<td rowSpan="2">to want</td>
								<td>Veuillez&nbsp;me suivre.</td>
								<td>Please follow me.</td>
							</tr>
							<tr>
								<td>Veuillons&nbsp;</td>
								<td>(form rarely used)</td>
							</tr>
						</tbody></TableLI>
					</SubList></li>
					<li>Object pronouns follow affirmative imperatives and precede negative imperatives:<SubList>
						<TableLI>
						<thead><tr><th>French</th><th>English</th></tr></thead>
							<tbody><tr>
							<td >Parlez-lui ce soir.</td>
							<td>Speak to him tonight.</td>
							</tr>
							<tr >
							<td >Ne lui
							parlez pas ce soir.</td>
							<td>Don't speak to him tonight.</td>
							</tr>
							<tr>
							<td >Donnons-lui le numéro.</td>
							<td>Let's give him the number.</td>
							</tr>
							<tr >
							<td >Ne lui
							donnons pas le numéro.</td>
							<td>Let's not give him the
							number.</td>
							</tr>
						</tbody></TableLI>
					</SubList></li>
				</SubList></li>
				<li>The object pronoun <b>y</b> is invariable. It precedes the verb, except in the imperative affirmative:<SubList>
					<li><b>Y</b> replaces <i>à + noun or pronoun</i>.</li>
					<TableLI><thead><tr>
							<th>French / Fran&ccedil;ais</th>
							<th>English / Anglais</th>
						</tr></thead>
						<tbody><tr>
							<td>Il travaille &agrave; la gare.</td>
							<td>He works at the station.</td>
						</tr>
						<tr>
							<td>Il&nbsp;y&nbsp;travaille.</td>
							<td>He works there.</td>
						</tr>
						<tr>
							<td>Est-il au bureau?</td>
							<td>Is he at the office?</td>
						</tr>
						<tr>
							<td>Y&nbsp;est-il?</td>
							<td>Is he there?</td>
						</tr>
					</tbody></TableLI>
					<li><b>Y</b> could be translated by 'of or about it' or 'of or about them', but should only refer to an animal or an inanimate object.</li>
					<TableLI><thead><tr>
							<th>French / Fran&ccedil;ais</th>
							<th>English / Anglais</th>
						</tr></thead>
						<tbody><tr>
							<td>Nous pensons aux vacances.</td>
							<td>We think about the vacation.</td>
						</tr>
						<tr>
							<td>Nous&nbsp;y&nbsp;pensons.</td>
							<td>We think about it.</td>
						</tr>
						<tr>
							<td>Nous pensons &agrave; la neige.</td>
							<td>We&rsquo;re thinking about the snow.</td>
						</tr>
						<tr>
							<td>Nous&nbsp;y&nbsp;pensons.</td>
							<td>We&rsquo;re thinking about it.</td>
						</tr>
					</tbody></TableLI>
				</SubList></li>
			</ul>
		</div>
		<div style={{marginRight:"1%",width:"48%",float:"right"}}>
			<ul>
				<li>Comparative:<SubList>
					<li>'plus ... que' corresponds to the English comparative '...er than' or 'more ... than'.</li>
					<li>'moins ... que' corresponds to the English 'less ... than'.</li>
					<li>'aussi ... que' corresponds to the English 'as ... as'.</li>
					<TableLI>
						<thead><tr>
							<th>French</th>
							<th>English</th>
							</tr></thead>
							<tbody><tr>
								<td>La chemise blanche est plus chère que la bleue.</td>
								<td>The white shirt is more expensive than the blue one.</td>
							</tr>
							<tr>
								<td>Il a fait moins froid que l'ann&eacute;e derni&egrave;re.</td>
								<td>The weather has been less cold than last year.</td>
							</tr>
							<tr>
								<td>Je t&eacute;l&eacute;phone moins souvent que lui.</td>
								<td>I telephone less often than he does</td>
							</tr>
							<tr>
								<td>Aussi courts que d'habitude?</td><td>As short as usual?</td>
							</tr>
							<tr>
								<td>Elle coûte aussi cher que l'autre.</td><td>It costs as much as the other one.</td>
							</tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Superlative:<SubList>
					<TableLI>
						<thead><tr>
							<th>Superlative / Superlatif</th>
							<th>Meaning in English</th>
						</tr></thead>
						<tbody><tr>
						<td>le plus ...</td>
						<td colSpan="1" rowSpan="3">corresponds to English &lsquo;the most&rsquo; or &lsquo;the &hellip;est&rsquo;.</td>
						</tr>
						<tr>
						<td>la plus ...</td>
						</tr>
						<tr>
						<td>les plus ...</td>
						</tr>
						<tr>
						<td>le moins</td>
						<td colSpan="1" rowSpan="3">corresponds to English &lsquo;the least&rsquo;</td>
						</tr>
						<tr>
						<td>la moins</td>
						</tr>
						<tr>
						<td>les moins</td>
						</tr>
						</tbody>
					</TableLI>
					<li>In the superlative form, the adjectives which habitually precede the noun can either precede or follow the noun.</li>
					<TableLI><thead><tr>
						<th>French / Fran&ccedil;ais</th>
						<th>English / Anglais</th>
						</tr></thead>
						<tbody><tr>
						<td>La plus jolie chambre.</td>
						<td>The prettiest room.</td>
						</tr>
						<tr>
						<td>La chambre la plus jolie.</td>
						<td>The prettiest room.</td>
						</tr>
					</tbody></TableLI>
					<li>The adjectives which normally follow the noun must follow the noun when used in the superlative.</li>
					<TableLI><thead><tr>
						<th>French / Fran&ccedil;ais</th>
						<th>English / Anglais</th>
					</tr></thead>
					<tbody><tr>
						<td>Les jours les plus courts sont en hiver.</td>
						<td>The shortest days are in the winter.</td>
					</tr>
					<tr>
						<td>Voici la robe la moins ch&egrave;re.</td>
						<td>Here is the least expensive dress.</td>
					</tr>
					</tbody></TableLI>
				</SubList></li>
				<li>A past tense called the <b>Passé Composé</b> is composed of the present of the auxiliary <b>avoir</b> (to have) or <b>être</b> (to be) followed by a past participle.</li>
				<li>The Passé Composé of the verbs conjugated with the auxiliary <b>avoir</b>:<SubList>
					<TableLI><thead><tr>
							<th>Infinitive / Infinitif</th>
							<th>Past participle / Participe pass&eacute;</th>
							<th>English / Anglais</th>
						</tr></thead>
						<tbody><tr>
							<td>accepter</td>
							<td>accept&eacute;</td>
							<td>to accept</td>
						</tr>
						<tr>
							<td>acheter</td>
							<td>achet&eacute;</td>
							<td>to buy</td>
						</tr>
						<tr>
							<td>aimer</td>
							<td>aim&eacute;</td>
							<td>to like, to love</td>
						</tr>
						<tr>
							<td>appeler</td>
							<td>appel&eacute;</td>
							<td>to call</td>
						</tr>
						<tr>
							<td>apporter</td>
							<td>apport&eacute;</td>
							<td>to bring</td>
						</tr>
						<tr>
							<td>assurer</td>
							<td>assur&eacute;</td>
							<td>to insure</td>
						</tr>
						<tr>
							<td>changer</td>
							<td>chang&eacute;</td>
							<td>to change</td>
						</tr>
						<tr>
							<td>chercher</td>
							<td>cherch&eacute;</td>
							<td>to look for, to seek</td>
						</tr>
						<tr>
							<td>commencer</td>
							<td>commenc&eacute;</td>
							<td>to begin, to start</td>
						</tr>
						<tr>
							<td>composer</td>
							<td>compos&eacute;</td>
							<td>to compose, to dial</td>
						</tr>
						<tr>
							<td>compter</td>
							<td>compt&eacute;</td>
							<td>to count, to intend</td>
						</tr>
						<tr>
							<td>couper</td>
							<td>coup&eacute;</td>
							<td>to cut</td>
						</tr>
						<tr>
							<td>co&ucirc;ter</td>
							<td>co&ucirc;t&eacute;</td>
							<td>to cost</td>
						</tr>
						<tr>
							<td>critiquer</td>
							<td>critiqu&eacute;</td>
							<td>to criticize</td>
						</tr>
					</tbody></TableLI>
					<li>SP + avoir + past participle:</li>
					<TableLI>
						<tbody>
						<tr>
							<td>j&apos;ai parl&eacute;</td>
							<td>I spoke / I&apos;ve spoken</td>
						</tr>
						<tr>
							<td>tu as parl&eacute;</td>
							<td>you spoke / you&apos;ve spoken (singular)</td>
						</tr>
						<tr>
							<td>il a parl&eacute; (elle, on)</td>
							<td>he spoke / he has spoken&nbsp;(she, one)</td>
						</tr>
						<tr>
							<td>nous avons parl&eacute;</td>
							<td>we spoke / we have spoken</td>
						</tr>
						<tr>
							<td>vous avez parl&eacute;</td>
							<td>you spoke / you&apos;ve spoken (plural)</td>
						</tr>
						<tr>
							<td>ils ont parl&eacute; &nbsp; (elles)</td>
							<td>they spoke / they&apos;ve spoken</td>
						</tr>
						</tbody>
					</TableLI>
					<li>SP + ne + avoir + pas + past participle:</li>
					<TableLI><tbody>
						<tr>
						<td>je n'ai pas parlé
						</td>
						<td>I didn't speak</td>
						</tr>
						<tr>
						<td>tu n'as pas parlé</td>
						<td>you didn't speak
						(singular)</td>
						</tr>
						<tr>
						<td>il n'a pas parlé (elle, on)</td>
						<td>he didn't speak (she, one)</td>
						</tr>
						<tr>
						<td>nous n'avons pas parlé</td>
						<td>we didn't speak</td>
						</tr>
						<tr>
						<td>vous n'avez pas parlé</td>
						<td>you didn't speak (plural)</td>
						</tr>
						<tr>
						<td>ils n'ont pas parlé (elles)</td>
						<td>they didn't speak</td>
						</tr>
						</tbody>
					</TableLI>
					<li>Avoir + SP + past participle?:</li>
					<TableLI>
						<tbody>
						<tr>
						<td>ai-je parlé?
						</td>
						<td>did I speak?</td>
						</tr>
						<tr>
						<td>as-tu parlé?</td>
						<td>did you speak? (singular)</td>
						</tr>
						<tr>
						<td>a-t-il parlé? (elle, on)</td>
						<td>did he speak? (she, one)</td>
						</tr>
						<tr>
						<td>avons-nous parlé?</td>
						<td>did we speak?</td>
						</tr>
						<tr>
						<td>avez-vous parlé?</td>
						<td>did you speak? (plural)</td>
						</tr>
						<tr>
						<td>ont-ils parlé? (elles)</td>
						<td>did they speak?</td>
						</tr>
						</tbody>
					</TableLI>
					<li>Ne + avoir + SP + pas + past participle?:</li>
					<TableLI>
						<tbody>
						<tr>
						<td>n'ai-je pas parlé?
						</td>
						<td>didn't I speak?</td>
						</tr>
						<tr>
						<td>n'as-
						tu pas parlé? </td>
						<td>didn't you speak?
						(singular)</td>
						</tr>
						<tr>
						<td>n'a-t-il pas parlé?
						(elle, on)</td>
						<td>didn't he speak? (she, one)</td>
						</tr>
						<tr>
						<td>n'avons-nous
						pas parlé?</td>
						<td>didn't we speak?</td>
						</tr>
						<tr>
						<td>n'avez-vous pas parlé?</td>
						<td>didn't you speak? (plural)</td>
						</tr>
						<tr>
						<td>n'ont-ils
						pas parlé? (elles)</td>
						<td>didn't they speak?</td>
						</tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>The Passé composé of the verbs conjugated with the auxiliary <b>être</b>:<SubList>
					<TableLI>
						<thead>
							<tr>
								<th>Infinitive / Infinitif</th>
								<th>Past participle / Participe pass&eacute;</th>
								<th>English / Anglais</th>
							</tr></thead>
							<tbody><tr>
								<td>aller</td>
								<td>all&eacute;</td>
								<td>to go</td>
							</tr>
							<tr>
								<td>arriver</td>
								<td>arriv&eacute;</td>
								<td>to arrive</td>
							</tr>
							<tr>
								<td>descendre</td>
								<td>descendu</td>
								<td>to go down</td>
							</tr>
							<tr>
								<td>devenir</td>
								<td>devenu</td>
								<td>to become</td>
							</tr>
							<tr>
								<td>entrer</td>
								<td>entr&eacute;</td>
								<td>to enter</td>
							</tr>
							<tr>
								<td>monter</td>
								<td>mont&eacute;</td>
								<td>to go up</td>
							</tr>
							<tr>
								<td>mourir</td>
								<td>mort</td>
								<td>to die</td>
							</tr>
							<tr>
								<td>na&icirc;tre</td>
								<td>n&eacute;</td>
								<td>to be born</td>
							</tr>
							<tr>
								<td>partir</td>
								<td>parti</td>
								<td>to leave</td>
							</tr>
							<tr>
								<td>passer</td>
								<td>pass&eacute;</td>
								<td>to go by, to come by</td>
							</tr>
							<tr>
								<td>rentrer</td>
								<td>rentr&eacute;</td>
								<td>to come back, to go back</td>
							</tr>
							<tr>
								<td>rester</td>
								<td>rest&eacute;</td>
								<td>to stay</td>
							</tr>
							<tr>
								<td>retourner</td>
								<td>retourn&eacute;</td>
								<td>to return</td>
							</tr>
							<tr>
								<td>revenir</td>
								<td>revenu</td>
								<td>to come back</td>
							</tr>
							<tr>
								<td>sortir</td>
								<td>sorti</td>
								<td>to go out</td>
							</tr>
							<tr>
								<td>tomber</td>
								<td>tomb&eacute;</td>
								<td>to fall</td>
							</tr>
							<tr>
								<td>venir</td>
								<td>venu</td>
								<td>to come</td>
							</tr>
							<tr>
								<td>redescendre</td>
								<td>redescendu</td>
								<td>to go down again</td>
							</tr>
							<tr>
								<td>remonter</td>
								<td>remont&eacute;</td>
								<td>to go up again</td>
							</tr>
							<tr>
								<td>repartir</td>
								<td>reparti</td>
								<td>to leave again</td>
							</tr>
							<tr>
								<td>ressortir</td>
								<td>ressorti</td>
								<td>to go out again</td>
							</tr>
							<tr>
								<td>retomber</td>
								<td>retomb&eacute;</td>
								<td>to fall again</td>
							</tr>
					</tbody>
					</TableLI>
				</SubList></li>
				<li>The Passé Composé of the verb <b>arriver</b> (with the auxiliary être):<SubList>
					<li>SP + être + past participle:<SubList>
						<TableLI>
							<thead><tr>
								<th>French / Fran&ccedil;ais</th>
								<th>English / Anglais</th>
							</tr></thead>
							<tbody><tr>
								<td>je suis arriv&eacute;</td>
								<td>I arrived</td>
							</tr>
							<tr>
								<td>tu es arriv&eacute;</td>
								<td>you arrived (singular)</td>
							</tr>
							<tr>
								<td>il est arriv&eacute; (elle, on)</td>
								<td>he arrived&nbsp;(she, one)</td>
							</tr>
							<tr>
								<td>nous sommes&nbsp;arriv&eacute;s</td>
								<td>we arrived</td>
							</tr>
							<tr>
								<td>vous &ecirc;tes&nbsp;arriv&eacute;s</td>
								<td>you arrived (plural)</td>
							</tr>
							<tr>
								<td>ils sont&nbsp;arriv&eacute;s&nbsp;&nbsp; (elles)</td>
								<td>they arrived</td>
							</tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>SP + ne + être + pas + past participle:<SubList>
						<TableLI>
								<thead><tr>
									<th>French / Fran&ccedil;ais</th>
									<th>English / Anglais</th>
								</tr></thead>
								<tbody><tr>
									<td>je ne suis pas arriv&eacute;</td>
									<td>I didn&apos;t arrive</td>
								</tr>
								<tr>
									<td>tu n&apos;es pas arriv&eacute;</td>
									<td>you didn&apos;t arrive (singular)</td>
								</tr>
								<tr>
									<td>il n&apos;est pas arriv&eacute; (elle, on)</td>
									<td>he didn&apos;t arrive&nbsp;(she, one)</td>
								</tr>
								<tr>
									<td>nous ne sommes pas arriv&eacute;s</td>
									<td>we didn&apos;t arrive</td>
								</tr>
								<tr>
									<td>vous n&apos;&ecirc;tes pas arriv&eacute;s</td>
									<td>you didn&apos;t arrive (plural)</td>
								</tr>
								<tr>
									<td>ils ne sont pas pas arriv&eacute;s&nbsp;&nbsp; (elles)</td>
									<td>they didn&apos;t arrive</td>
								</tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>être + SP + past participle?<SubList>
						<TableLI>
						<thead><tr>
									<th>French / Fran&ccedil;ais</th>
									<th>English / Anglais</th>
								</tr></thead>
								<tbody><tr>
									<td>suis-je arriv&eacute;?</td>
									<td>did I arrive?</td>
								</tr>
								<tr>
									<td>es-tu arriv&eacute;?</td>
									<td>did you arrive? (singular)</td>
								</tr>
								<tr>
									<td>est-il arriv&eacute;? (elle, on)</td>
									<td>did he arrive? (she, one)</td>
								</tr>
								<tr>
									<td>sommes-nous arriv&eacute;s?</td>
									<td>did we arrive?</td>
								</tr>
								<tr>
									<td>&ecirc;tes-vous arriv&eacute;s?</td>
									<td>did you arrive? (plural)</td>
								</tr>
								<tr>
									<td>sont-ils arriv&eacute;s? (elles)</td>
									<td>did they arrive?</td>
								</tr>
						</tbody></TableLI>
					</SubList></li>
					<li>ne + être + SP + pas + past participle?<SubList>
						<TableLI>
						<thead><tr>
								<th>French / Fran&ccedil;ais</th>
								<th>English / Anglais</th>
							</tr></thead>
							<tbody><tr>
								<td>ne suis-je pas arriv&eacute;?</td>
								<td>didn&apos;t I arrive?</td>
							</tr>
							<tr>
								<td>n&apos;es-tu pas arriv&eacute;?</td>
								<td>didn&apos;t you arrive? (singular)</td>
							</tr>
							<tr>
								<td>n&apos;est-il pas arriv&eacute;? (elle, on)</td>
								<td>didn&apos;t he arrive? (she, one)</td>
							</tr>
							<tr>
								<td>ne sommes-nous pas arriv&eacute;s?</td>
								<td>didn&apos;t we arrive?</td>
							</tr>
							<tr>
								<td>n&apos;&ecirc;tes-vous pas arriv&eacute;s?</td>
								<td>didn&apos;t you arrive? (plural)</td>
							</tr>
							<tr>
								<td>ne sont-ils pas arriv&eacute;s? (elles)</td>
								<td>didn&apos;t they arrive?</td>
							</tr>
					</tbody></TableLI>
					</SubList></li>
				</SubList></li>
				<li>Expressions of quantity:<SubList>
					<li>Noun expressing <b>quantity + de + Noun</b>:</li>
					<TableLI>
						<tbody>
							<tr><td>Apportez-nous une carafe de vin rouge.</td></tr>
						</tbody>
					</TableLI>
					<li>Adverb expressing <b>quantity + de + Noun:</b></li>
					<TableLI>
						<tbody><tr>
						<td>J&apos;ai beaucoup de travail.</td>
						<td>I&apos;ve got a lot of work.</td>
					</tr>
					<tr>
						<td>J&apos;ai trop de travail.</td>
						<td>I&apos;ve got too much work.</td>
					</tr>
					<tr>
						<td>J&apos;ai tant de travail.</td>
						<td>I&apos;ve got so much work.</td>
					</tr>
					<tr>
						<td>J&apos;ai peu de travail.</td>
						<td>I&apos;ve got little work.</td>
					</tr>
					<tr>
						<td>J&apos;ai pas mal de travail.</td>
						<td>I&apos;ve got quite a bit of work</td>
					</tr>
					</tbody></TableLI>
					<li>When comparing quantities, <b>de</b> should precede both nouns:<SubList>
						<TableLI>
						<thead><tr>
							<th colSpan="2">French / Fran&ccedil;ais</th>
							<th>English / Anglais</th>
							</tr></thead>
							<tbody><tr>
							<td>plus</td>
							<td rowSpan="3">de&nbsp;+ Noun +&nbsp;que de&nbsp;+ Noun</td>
							<td>more&nbsp;+ Noun +&nbsp;than&nbsp;+ Noun</td>
							</tr>
							<tr>
							<td>moins</td>
							<td>less&nbsp;+ Noun +&nbsp;than&nbsp;+ Noun</td>
							</tr>
							<tr>
							<td>autant</td>
							<td>as much + Noun + as + Noun</td>
							</tr>
						</tbody></TableLI>
						<li>Il y a plus de vin rouge que de vin blanc.</li>
						<li>Nous avons moins de malles que de valises.</li>
					</SubList></li>
					<li>If such expressions occur without a noun following, the verb should be preceded by <b>en</b>:<SubList>
						<TableLI>
						<thead><tr><th>With a noun following</th><th>Without a noun following</th></tr></thead>
							<tbody><tr>
								<td>Je voudrais une chambre avec salle de bains.</td>
								<td>J&apos;en voudrais une avec salle de bains.</td>
							</tr>
							<tr>
								<td>Je crois qu&apos;il y a un restaurant au coin de la rue.</td>
								<td>Je crois qu&apos;il y en a un au coin de la rue.</td>
							</tr>
							<tr>
								<td>J&apos;ai deux coins fen&ecirc;tres.</td>
								<td>J&apos;en ai deux.</td>
							</tr>
							<tr>
								<td>Voici trois mod&egrave;les en marron.</td>
								<td>En voici trois en marron.</td>
							</tr>
							<tr>
								<td>Donnez-moi quatre chemises.</td>
								<td>Donnez-m&apos;en quatre.</td>
							</tr>
							<tr>
								<td>Nous avons plusieurs chambres de libres.</td>
								<td>Nous en avons plusieurs de libres.</td>
							</tr>
							<tr>
								<td>N&apos;y a-t-il pas plusieurs restaurants dans le quartier?</td>
								<td>N&apos;y en a-t-il pas plusieurs dans le quartier?</td>
							</tr>
							<tr>
								<td>Nous avons quelques livres.</td>
								<td>Nous en avons&nbsp;quelques-uns.</td>
							</tr>
							<tr>
								<td>Nous avons quelques chemises.</td>
								<td>Nous en avons quelques-unes.</td>
							</tr>
							<tr>
								<td>Nous vendons beaucoup de chemises.</td>
								<td>Nous en vendons beaucoup.</td>
							</tr>
						</tbody></TableLI>
					</SubList></li>
				</SubList></li>
				<li>Expressing the close past:<SubList>
					<li>Recent past actions are expressed with the phrase: venir de + [infinitif].</li>
					<TableLI>
						<tbody>
							<tr><td>Je viens de finir mon livre</td><td>I've just finished my book</td></tr>
							<tr><td>Tu viens de rater ton train.</td><td>You've just missed your train.</td></tr>
							<tr><td>Laurent vient d'arriver à l'instant</td><td>Laurent has just arrived this instant</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>To tell the time on the hour:<SubList>
					<li>To express "it is [time]", you use: "Il est + [heure]".</li>
					<TableLI>
						<tbody>
							<tr><td>Il est dix heures.</td><td>It is ten o'clock.</td></tr>
							<tr><td>Il est minuit.</td><td>It is midnight.</td></tr>
							<tr><td>Il est midi.</td><td>It is noon.</td></tr>
						</tbody>
					</TableLI>
					<li>To express "half past", you use: [number of hours] + heure(s) + et demie</li>
					<TableLI>
						<tbody>
							<tr><td>Il est six heures et demie.</td><td>It is half past six.</td></tr>
							<tr><td>Il est trois heures et demie.</td><td>It is half past three.</td></tr>
						</tbody>
					</TableLI>
					<li>For <b>midi/minuit</b>, use <b>demi</b>:</li>
					<TableLI>
						<tbody>
							<tr><td>Il est minuit et demi.</td><td>It is half past midnight.</td></tr>
							<tr><td>Il est midi et demi.</td><td>It is half past noon.</td></tr>
						</tbody>
					</TableLI>
					<li>To express "quarter past", you use: [number of hours] + heure(s) + et quart</li>
					<li>To express "quarter to", you use: [number of hours] + heure(s) + moins le quart</li>
					<TableLI>
						<tbody>
							<tr><td>Il est sept heures et quart.</td><td>It is quarter past seven.</td></tr>
							<tr><td>Il est minuit et quart.</td><td>It is quarter past midnight.</td></tr>
							<tr><td>Il est cinq heures moins le quart.</td><td>It is quarter to five.</td></tr>
							<tr><td>Il est midi moins le quart.</td><td>It is quarter to twelve. (noon)</td></tr>
						</tbody>
					</TableLI>
					<li>To express "quarter past", you use: [number of hours] + heure(s) + et quart</li>
					<li>To express "quarter to", you use: [number of hours] + heure(s) + moins le quart</li>
					<TableLI>
						<tbody>
							<tr><td>Il est sept heures et quart.</td><td>It is quarter past seven.</td></tr>
							<tr><td>Il est midi moins le quart.</td><td>It is quarter to twelve.</td></tr>
						</tbody>
					</TableLI>
					<li>You use <b>à ... heure</b> to say at what time something happens.</li>
					<li><b>En</b> expresses the length of time something takes to be done.</li>
					<li><b>Dans</b> indicates the time until something will happen.</li>
					<TableLI>
						<tbody>
							<tr><td>Je vais manger à huit heures.</td><td>I will eat at eight o'clock.</td></tr>
							<tr><td>Nous allons partir à midi.</td><td>We're going to leave at midday.</td></tr>
							<tr><td>Nous mangerons dans une heure.</td><td>We will eat in an hour's time.</td></tr>
							<tr><td>Nous avons mangé en 40 minutes.</td><td>We ate in forty minutes.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>To express a time unit or a duration:<SubList>
					<li>In French, there are two words to talk about the different moments of the day (<b>matin/matinée</b>, <b>soir/soirée</b>), days (<b>jour/journée</b>) and years (<b>an/année</b>).</li>
					<li>When we talk about a day or the year as a time unit in which an action took place, we use the masculine forms.</li>
					<li>When we consider a day or year in its duration, when we emphasise the length of time, we use the feminine forms.</li>
					<TableLI>
						<tbody>
							<tr><td>Je prends le train le matin.</td><td>I take the train in the morning.</td></tr>
							<tr><td>J'ai travaillé toute la matinée.</td><td>I worked the whole morning.</td></tr>
							<tr><td>Le soir, je bois un verre avec mes amis.</td><td>In the evening, I have a drink with my friends.</td></tr>
							<tr><td>Cette soirée s'est très bien passée.</td><td>That evening went very well.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>To express timeliness:<SubList>
					<li>To say that you are late/early/on time in French, you use the expressions: "(être) en retard", "(être) en avance" or "(être) à l'heure".</li>
					<TableLI>
						<tbody>
							<tr><td>Je suis désolé d'être en retard.</td><td>I'm sorry I'm late.</td></tr>
							<tr><td>Je ne suis jamais à l'heure!</td><td>I am never on time!</td></tr>
						</tbody>
					</TableLI>
					<li>To indicate the degree of timeliness (to be [5 minutes] late/early) in French, you can use these two expressions:<SubList>
						<li><u>late:</u> avoir [5 minutes] de  retard OR être en retard de [5 minutes]</li>
						<li><u>early:</u> avoir [5 minutes] d'avance OR être en avance de [5 minutes]</li>
						<TableLI>
							<tbody>
								<tr><td>Notre train a été en retard de 2 heures à cause de la neige.</td><td>Our train was two hours late because of the snow.</td></tr>
								<tr><td>tu as vingt minutes d'avance</td><td>you are twenty minutes early</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>In sentences with <b>arriver/venir/commencer/finir</b>:<SubList>
						<li>"avec [5 minutes] de retard" / "avec [5 minutes] d'avance" or "[5 minutes] en retard" / "[5 minutes] en avance".</li>
						<TableLI>
							<tbody>
								<tr><td>Je suis arrivé avec dix minutes de retard.<br/>Je suis arrivé dix minutes en retard.</td><td>I arrived ten minutes late.</td></tr>
								<tr><td>Le concert a fini avec une heure de retard.<br/>Le concert a fini une heure en retard.</td><td>The concert ended one hour late.</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
				</SubList></li>
				<li>There are two types of verb phrases: The <b>past participle</b> verb phrases and the <b>infinitive</b> verb phrases.</li>
				<li>Some verbs often followed by an infinitive:<SubList>
					<TableLI>
						<thead>
							<tr><th>Group 1: verb + infinitive</th><th>Group 2: verb + de + infinitive</th><th>Group 3: verb + à + infinitive</th></tr>
						</thead>
						<tbody>
							<tr><td>aller</td><td>venir de</td><td>commencer à</td></tr>
							<tr><td>faire</td><td>essayer de</td><td>tenir à</td></tr>
							<tr><td>vouloir</td><td>avoir peur de</td><td>réussir à</td></tr>
							<tr><td>pouvoir</td><td>avoir raison de</td><td></td></tr>
							<tr><td>savoir</td><td>avoir besoin de</td><td></td></tr>
							<tr><td>devoir</td><td>accepter de</td><td></td></tr>
							<tr><td>venir</td><td>dire de</td><td></td></tr>
							<tr><td>aimer</td><td>demander de</td><td></td></tr>
							<tr><td>compter</td><td>être heureux de</td><td></td></tr>
							<tr><td>désirer</td><td>être en train de</td><td></td></tr>
							<tr><td>espérer</td><td>finir de</td><td></td></tr>
							<tr><td>laisser</td><td>il y a lieu de</td><td></td></tr>
							<tr><td>monter</td><td>risquer de</td><td></td></tr>
							<tr><td>passer</td><td>remercier de</td><td></td></tr>
							<tr><td>rentrer</td><td>terminer de</td><td></td></tr>
							<tr><td>sortir</td><td>oublier de</td><td></td></tr>
							<tr><td>il faut</td><td>venir de</td><td></td></tr>
						</tbody>
					</TableLI>
					<li>Examples:<SubList opened={true}>
						<li>Ils vont partir la semaine prochaine.</li>
						<li>Je ne veux pas faire laver l'auto.</li>
						<li>Nous essayons de téléphoner.</li>
						<li>Il commence à neiger.</li>
						<li>Elles ne tiennent pas à partir.</li>
					</SubList></li>
				</SubList></li>
				<li>Object pronouns in infinitive verb phrases precede the infinitive:<SubList>
					<li><u>Pattern:</u> SP + verb + object pronoun + infinitive</li>
					<TableLI>
						<thead>
							<tr><th>French / Français</th><th>English / Anglais</th></tr>
						</thead>
						<tbody>
							<tr><td>Je vais les lire dans ma chambre.</td><td>I'm going to read them in my room.</td></tr>
							<tr><td>Voulez-vous lui parler?</td><td>Do you want to speak to him?</td></tr>
							<tr><td>Elle doit y aller.</td><td>She must go there.</td></tr>
						</tbody>
					</TableLI>
					<li>However with certain verbs such as <b>faire</b>, <u>the pattern will be as follows</u>: SP + object pronoun + verb + infinitive.</li>
					<li>faire with the meaning of 'to have something done'.</li>
					<TableLI><tbody>
						<tr><td>Je les fais traduire.</td><td>I have them translated.</td></tr>
					</tbody></TableLI>
					<li>Among the verbs already encountered which follow the same pattern are: <b>laisser</b> with the meaning of 'to let' and <b>envoyer</b> chercher with the meaning of 'to send for'.</li>
					<TableLI><tbody>
						<tr><td>Je les laisse entrer.</td><td>I let them come in.</td></tr>
						<tr><td>Je les envoie chercher.</td><td>I send for them.</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li>Some frequently occurring verbs in French are always preceded by object pronouns when not followed by nouns:<SubList>
					<TableLI>
						<thead>
							<tr>
								<th scope="col">Infinitive / Infinitif</th>
								<th scope="col">French / Fran&ccedil;ais</th>
								<th scope="col">English / Anglais</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td rowSpan="2">aller</td>
								<td>Y allez-vous?</td>
								<td>Are you going?</td>
							</tr>
							<tr>
								<td>Oui, j&apos;y vais.</td>
								<td>Yes, I&apos;m going.</td>
							</tr>
							<tr>
								<td rowSpan="2">avoir</td>
								<td>En avez-vous?</td>
								<td>Have you any?</td>
							</tr>
							<tr>
								<td>Oui, j&apos;en ai.</td>
								<td>Yes, I have.</td>
							</tr>
							<tr>
								<td rowSpan="2">avoir besoin de</td>
								<td>En avez-vous besoin?</td>
								<td>Do you need any?</td>
							</tr>
							<tr>
								<td>Oui, j&apos;en ai besoin.</td>
								<td>Yes, I do.</td>
							</tr>
							<tr>
								<td rowSpan="2">&ecirc;tre</td>
								<td>Etes-vous am&eacute;ricain?</td>
								<td>Are you an American?</td>
							</tr>
							<tr>
								<td>Oui, je le suis.</td>
								<td>Yes, I am.</td>
							</tr>
							<tr>
								<td rowSpan="2">dire</td>
								<td>Dites-vous qu&apos;il arrive?</td>
								<td>Are you saying he&apos;s arriving?</td>
							</tr>
							<tr>
								<td>Oui, je le dis.</td>
								<td>Yes, I&apos;m saying so.</td>
							</tr>
							<tr>
								<td rowSpan="2">falloir</td>
								<td>Faut-il partir?</td>
								<td>Is it necessary to leave?</td>
							</tr>
							<tr>
								<td>Oui, il le faut.</td>
								<td>Yes, it is.</td>
							</tr>
							<tr>
								<td rowSpan="2">faire</td>
								<td>Faites-vous des g&acirc;teaux?</td>
								<td>Do you make cakes?</td>
							</tr>
							<tr>
								<td>Oui, j&apos;en fais.</td>
								<td>Yes, I do.</td>
							</tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Expanded Noun Phrases:<SubList>
					<TableLI>
							<thead>
								<tr>
									<th colSpan="7" rowSpan="1" scope="col">Order of expanded noun phrases</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td colSpan="1" rowSpan="5">tout</td>
									<td>le, la</td>
									<td colSpan="1" rowSpan="4">
										(cardinal number)
									</td>
									<td colSpan="1" rowSpan="4">
										m&ecirc;me
									</td>
									<td colSpan="1" rowSpan="12">
										autre<br/>(ordinal number)
									</td>
									<td>beau</td>
									<td colSpan="1" rowSpan="12">Noun</td>
								</tr>
								<tr>
									<td>ce</td>
									<td>bon</td>
								</tr>
								<tr>
									<td>mon</td>
									<td>faux</td>
								</tr>
								<tr>
									<td>quel</td>
									<td>grand</td>
								</tr>
								<tr>
									<td colSpan="3" rowSpan="1">un</td>
									<td>gros</td>
								</tr>
								<tr>
									<td colSpan="4" rowSpan="7">
										chaque, quelques, plusieurs
									</td>
									<td>jeune</td>
								</tr>
								<tr>
									<td>joli</td>
								</tr>
								<tr>
									<td>mauvais</td>
								</tr>
								<tr>
									<td>nouveau</td>
								</tr>
								<tr>
									<td>petit</td>
								</tr>
								<tr>
									<td>vieux</td>
								</tr>
								<tr>
									<td>vrai</td>
								</tr>
						</tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="Beginner4">Beginner Part 4</h2>
	<div className="content">
		<div style={{marginLeft:"1%",width:"48%",float:"left"}}>
			<ul>
				<li>Decimal and currency:<SubList>
					<li>In French, commas are used where decimal points are in English!</li>
					<TableLI>
						<thead>
							<tr><th>French</th><th>English</th></tr>
						</thead>
						<tbody>
							<tr><td>19,99</td><td>19.99</td></tr>
							<tr><td>18000,99</td><td>18,000.99</td></tr>
						</tbody>
					</TableLI>
					<li>The currency sign is written after the price. If the value is a price in euros, you may write the Euro sign (€) in place of the decimal point:</li>
					<TableLI>
						<thead>
							<tr><th>French</th><th>English</th></tr>
						</thead>
						<tbody>
							<tr><td>66,50 £</td><td>£ 66.50</td></tr>
							<tr><td>20 000 $</td><td>$ 20,000</td></tr>
							<tr><td>5,67€</td><td>€5.67</td></tr>
							<tr><td>5€67</td><td>€5.67</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Ordinal numbers:<SubList>
					<TableLI>
						<tbody>
							<tr><td>First</td><td>premier (m) / première (f)</td></tr>
							<tr><td>Second</td><td>deuxième<br/>second (m) / seconde (f)</td></tr>
							<tr><td>Third</td><td>troisième</td></tr>
							<tr><td>Fourth</td><td>quatrième</td></tr>
							<tr><td>Fifth</td><td>cinquième</td></tr>
							<tr><td>Sixth</td><td>sixième</td></tr>
							<tr><td>Ninth</td><td>neuvième</td></tr>
						</tbody>
					</TableLI>
					<li>Cardinal numbers (deux, trois, quatre...) are used for royalty in French where ordinals (second, third, fourth...) are used in English.</li>
					<TableLI>
						<tbody>
							<tr><td>Elisabeth deux est la reine d'Angleterre.</td><td>Elisabeth the second is queen of England.</td></tr>
							<tr><td>Louis quatorze était surnommé Le Roi Soleil.</td><td>Louis the fourteenth's nickname was The Sun King.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Talking about leisure activities:<SubList>
					<li>To describe which musical instrument you play, you can "jouer + de + definite article (le/la/l'/les) + [instrument]".</li>
					<TableLI>
						<tbody>
							<tr><td>Je joue de la guitare.</td><td>I play the guitar.</td></tr>
							<tr><td>Elle joue du violon.</td><td>She plays violin.</td></tr>
						</tbody>
					</TableLI>
					<li>With sports, you use either <b>faire de</b> and <b>jouer à</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>Je fais du sport tous les jours.</td><td>I do sport every day.</td></tr>
							<tr><td>Tu fais de la natation.</td><td>You swim (regularly / in a club).</td></tr>
							<tr><td>Je fais du ski quand je suis dans les Alpes.</td><td>I ski when I'm in the Alps.</td></tr>
							<tr><td>Je skie avec ma famille.</td><td>I'm skiing with my family.</td></tr>
						</tbody>
					</TableLI>
					<li>English has two present tenses: I dance (simple), and I am dancing (continuous). French has no present continuous tense, so we use <b>faire de</b> to distinguish the regular activity that you do, from the one-off activity you are doing.</li>
					<TableLI>
						<tbody>
							<tr><td>Ils jouent au basket.</td><td>They play basketball.</td></tr>
							<tr><td>Je joue aux échecs</td><td>I paly chess.</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Expressing ongoing actions:<SubList>
					<li>Use the expression: <b>être + en train de + [infinitive]</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>Elle est en train de faire ses devoirs</td><td>She is doing her homework</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>To be afraid/scared:<SubList>
					<li>Use the expression <b>avoir peur de</b>.</li>
					<TableLI>
						<tbody>
							<tr><td>Elle a peur des araignées</td><td>She is scared of spiders.</td></tr>
							<tr><td>J'ai peur de tomber</td><td>I'm scared of falling</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>"ça y est":<SubList>
					<li>The expression "ça y est" (literally 'that is there') is used to emphasise a sense of relief after an action's been completed: that's it, it's done, finally!</li>
					<TableLI>
						<tbody>
							<tr><td>Tu as fini ton repas ? - Oui, ça y est!</td><td>Have you finished your meal? - Yes, it's done!</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
			</ul>
		</div>
		<div style={{marginRight:"1%",width:"48%",float:"right"}}>

		</div>
	</div>

	<h2 id="pronouns">French Pronouns</h2>
	<div className="content">
		<div style={{marginLeft:"1%",width:"48%",float:"left"}}>
			<h3>Personal Pronouns</h3>
			<ul>
			<TableLI><thead>
				<tr>
				<th>
					Subject
				</th>
				<th>
					Reflexive
				</th>
				<th>
					Direct Object
				</th>
				<th>
					Indirect Object
				</th>
				<th>
					Prepositional
				</th>
				</tr></thead>
				<tbody><tr>
				<td>
					Je (I)
				</td>
				<td>
					Me (myself)
				</td>
				<td>
					Me (me)
				</td>
				<td>
					Me (me)
				</td>
				<td>
					Moi (me)
				</td>
				</tr>
				<tr>
				<td>
					Tu (you informal)
				</td>
				<td>
					Te (yourself, informal)
				</td>
				<td>
					Te (you, informal)
				</td>
				<td>
					Te (you, informal)
				</td>
				<td>
					Toi (you, informal)
				</td>
				</tr>
				<tr>
				<td>
					Il (he)
				</td>
				<td>
					Se (himself)
				</td>
				<td>
					Le (him)
				</td>
				<td>
					Lui (him)
				</td>
				<td>
					Lui (him)
				</td>
				</tr>
				<tr>
				<td>
					Elle (she)
				</td>
				<td>
					Se (herself)
				</td>
				<td>
					La (her)
				</td>
				<td>
					Lui (her)
				</td>
				<td>
					Elle (her)
				</td>
				</tr>
				<tr>
				<td>
					Nous (we)
				</td>
				<td>
					Nous (ourselves)
				</td>
				<td>
					Nous (us)
				</td>
				<td>
					Nous (us)
				</td>
				<td>
					Nous (us)
				</td>
				</tr>
				<tr>
				<td>
					Vous (plural you or formal singular you)
				</td>
				<td>
					Vous (yourselves or yourself, formal)
				</td>
				<td>
					Vous (plural you or formal singular you)
				</td>
				<td>
					Vous (plural you or formal singular you)
				</td>
				<td>
					Vous (plural you or formal formal)
				</td>
				</tr>
				<tr>
				<td>
					Ils (they)
				</td>
				<td>
					Se (themselves)
				</td>
				<td>
					Les (them)
				</td>
				<td>
					Leur (them)
				</td>
				<td>
					Eux (them)
				</td>
				</tr>
				<tr>
				<td>
					Elles (they)
				</td>
				<td>
					Se (themselves)
				</td>
				<td>
					Les (them)
				</td>
				<td>
					Leur (them)
				</td>
				<td>
					Elles (them)
				</td>
				</tr>
			</tbody></TableLI>
			<li><b>Reflexive Pronouns:</b> You use these when the action reflects back on you. Je <b>me</b> brosse les dents - I brush my teeth (for myself).</li>
			<li><b>Direct object pronouns</b> in French represent the things or persons affected directly by the verb's action. Il <b>la</b> voit - He sees her.</li>
			<li><b>Indirect object pronouns</b> replace people who are indirectly affected by the action. Tu <b>m'</b>as donné un chat - You gave me a cat.</li>
			<li><b>Prepositional Pronouns</b> (or <b>stressed pronouns</b>): emphasizes the subject. Ça ne marche pas pour moi - It doesn't work for me.</li>
			</ul>
		</div>
		<div style={{marginRight:"1%",width:"48%",float:"right"}}>
			<h3>Impersonal Pronouns</h3>
			<ul>
				<li><b>Adverbial Pronouns:</b> en, y<SubList>
					<li>"Y" replaces "à + location"</li>
					<li>En replaced "de + indefinite article + noun"</li>
					<TableLI><thead><tr><th>English</th><th>French</th></tr></thead><tbody>
						<tr><td>Je vais à la piscine.</td><td>I'm going to the pool.</td></tr>
						<tr><td>J'y vais.</td><td>I'm going there.</td></tr>
						<tr><td>Tu as du sucre?</td><td>Do you have some sugar?</td></tr>
						<tr><td>Oui, j'en ai.</td><td>Yes, I have some.</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li><b>Demonstrative Pronouns:</b><SubList>
					<TableLI><thead><tr><th>Masculine Singular</th><th>Feminine Singular</th><th>Masculine Plural</th><th>Feminine Plural</th></tr></thead>
						<tbody><tr><td>Celui</td><td>Celle</td><td>Ceux</td><td>Celles</td></tr>
					</tbody></TableLI>
					<li>To use this pronoun, you have to include one of the following after it:<SubList opened={true}>
						<li>Propositional phrase</li>
						<li>Relative clause</li>
						<li>Particle "-ci" or "-là" - used for emphasis</li>
					</SubList></li>
					<li><a href='https://francais.lingolia.com/en/grammar/pronouns/demonstrative-pronouns'><b>Demonstrative pronouns</b> replace a noun, while <b>demonstrative determiners</b> accompany the noun they modify.</a></li>
					<li><a href='https://francais.lingolia.com/en/grammar/pronouns/demonstrative-pronouns'>Demonstrative determiners always come directly before a noun. <u>Example:</u> Ce mouton est mignon.</a></li>
					<li><a href='https://francais.lingolia.com/en/grammar/pronouns/demonstrative-pronouns'>Demonstrative pronouns stand alone, they do not accompany a noun. <u>Example:</u> Ce mouton est celui du berger.</a></li>
					<li><a href='https://francais.lingolia.com/en/grammar/pronouns/demonstrative-pronouns'>In French, there are also compound forms of the demonstrative pronouns: <b>celui-ci</b>, <b>celle-ci</b>, <b>celui-là</b>, <b>celle-là</b>. The forms ending in -ci indicate something that's close to the speaker. The forms ending in -là indicate something that's farther away from the speaker. <u>Example:</u> Lequel? Celui-ci ou celui-là?</a></li>
				</SubList></li>
				<li><b>Indefinite Demonstrative Pronouns</b> (ce, ceci, cela, ça):<SubList>
					<li>You use indefinite demonstrative pronouns to refer to an unknown noun.</li>
					<li>Ceci n'est pas une pipe - This is not a pipe.</li>
				</SubList></li>
				<li><b>Impersonal Subjects</b> (ce, il):<SubList>
					<li>If the subjects of sentences are people, you use personal pronouns. But, if they're object, you use "ce" or "il" to introduce impersonal verb or expression.</li>
					<li>J'ai jeté un liver; il a volé - I threw a book; it flew.</li>
				</SubList></li>
				<li><b>Indefinite Pronouns</b> (autre, certains, plusieurs, ...): You use indefinite pronouns to indicate an unknown quantity or description. You can translate these as "other", "certain", "many" in English.</li>
				<li><b>Interrogative pronouns</b> (qui, que, lequel): Qui a gagné le jeu - Who won the game?</li>
				<li><b>Possessive pronouns:</b><SubList opened={true}>
					<TableLI><thead><tr><th>Possessive Adjective</th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr></thead>
						<tbody><tr>
						<td>My
						</td>
						<td>Mon
						</td>
						<td>Ma
						</td>
						<td>Mes
						</td>
						</tr>
						<tr>
						<td>Your (informal)
						</td>
						<td>Ton
						</td>
						<td>Ta
						</td>
						<td>Tes
						</td>
						</tr>
						<tr>
						<td>His/Her/Its
						</td>
						<td>Son
						</td>
						<td>Sa
						</td>
						<td>Ses
						</td>
						</tr>
						<tr>
						<td>Our
						</td>
						<td>Notre
						</td>
						<td>Notre
						</td>
						<td>Nos
						</td>
						</tr>
						<tr>
						<td>Your (plural or singular formal)
						</td>
						<td>Votre
						</td>
						<td>Votre
						</td>
						<td>Vos
						</td>
						</tr>
						<tr>
						<td>Their
						</td>
						<td>Leur
						</td>
						<td>Leur
						</td>
						<td>Leurs
						</td>
						</tr>
					</tbody></TableLI>
					<li>Your address - votre adresse</li>
					<li>Her passport - son passeport</li>
				</SubList></li>
				<li><b>Relative Pronouns</b> (qui, que, dont, où, lequel):<SubList>
					<li>These pronouns can link different parts of the sentence together.</li>
					<li>Nous allons là <b>où</b> nous avons passé notre lune de miel - We're going where we spent our honeymoon.</li>
				</SubList></li>
				<li><b>Indefinite Relative Pronouns</b> (ce qui, ce que, ce dont, ce à quoi):<SubList>
					<li>Similar to the previous type of pronoun, but instead, the thing it replaces is unknown.</li>
					<li>Ce que tu veux ne peut pas arriver - What you want can't happen.</li>
				</SubList></li>
			</ul>
		</div>
	</div>

</>

