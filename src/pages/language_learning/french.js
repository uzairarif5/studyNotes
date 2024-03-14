import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "French Notes";
export const sourcesColor = {24: null, 25: null, 16: null};
export const content = <>
    <h1>French Notes</h1>
    <div id="date"><b>Last Edit:</b> {document.lastModified}</div>
    {getSourcesOL(sourcesColor)}
    <h2 id="elearningFrench">From "elearningfrench.com"</h2>
    <div className="content">
        <div style={{width:"49%",marginLeft:"0.5%",float:"left"}}>
            <h3>Lesson 1</h3>
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
                </SubList></li>
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
                <li>The most frequently occurring verb in French is <b>être</b>, to be. Here are its forms, which vary grammatically according to the noun or subject pronoun with which it is tied:<SubList>
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
            </ul>
            <h3>Lesson 2</h3>
            <ul>
                <li>Indefinite articles:<SubList>
                    <li>'une' occurs before feminine singular nouns.</li>
                    <li>'un' occurs before masculine singular nouns.</li>
                    <li>'des' is the plural form for the indefinite article.</li>
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
                </SubList></li>
                <li>Verb avoir:<SubList>
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
            </ul>
            <h3>Lesson 3</h3>
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
                    <TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
                        <tr><td>Allez-vous à la gare?</td><td>Are you going to the station?</td></tr>
                        <tr><td>Je suis à l'hôtel.</td><td>I am at the hotel.</td></tr>
                        <tr><td>Aux guichets deux et trois.</td><td>At ticket windows two and three.</td></tr>
                        <tr><td>Il est au lit.</td><td>He is in bed.</td></tr>
                        <tr><td>C'est à la soeur de Janine.</td><td>It belongs to Janine's sister.</td></tr>
                    </tbody></TableLI>
                </SubList></li>
                <li>Prefixing <b>Est-ce que</b> to the Subject-Verb type of utterance makes it into a yes/no question:</li>
                <TableLI style={{width:"90%",marginLeft:"5%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
                    <tr><td>C'est 42 francs.</td><td>It's 42 francs.</td></tr>
                    <tr><td>Est-ce que c'est 42 francs?</td><td>Is it 42 francs?</td></tr>
                    <tr><td>Je peux vous donner deux coins fenêtres?</td><td>I can give you two window seats.</td></tr>
                    <tr><td>Est-ce que je peux vous donner deux coins fenêtres?</td><td>Can I give you two window seats?</td></tr>
                </tbody></TableLI>
            </ul>
            <h3>Lesson 4</h3>
            <ul>
                <li>In French, the possessive determiners (my, his, her, our, etc.) agree in gender and number with the noun which follows.<SubList>
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
                <li>Du, de la, de l', des have different equivalents in English:<SubList>
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
                </SubList></li>
                <li>Numbers to 100:<SubList>
                    <TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>Number</th><th>French</th><th>Number</th><th>French</th></tr></thead>
                    <tbody>
                        <tr><td>20</td><td>vingt</td><td>21</td><td>vingt et un</td></tr>
                        <tr><td>30</td><td>trente</td><td>31</td><td>trente et un</td></tr>
                        <tr><td>40</td><td>quarante</td><td>41</td><td>quarante et un</td></tr>
                        <tr><td>50</td><td>cinquante</td><td>51</td><td>cinquante et un</td></tr>
                        <tr><td>60</td><td>soixante</td><td>61</td><td>soixante et un</td></tr>
                        <tr><td>70</td><td>soixante-dix</td><td>71</td><td>soixanteet onze</td></tr>
                        <tr><td>80</td><td>quatre-vingt</td><td>81</td><td>quatre-vingt un</td></tr>
                        <tr><td>90</td><td>quatre-vingt-dix</td><td>91</td><td>quatre-vingt onze</td></tr>
                        <tr><td>100</td><td>cent</td><td>101</td><td>cent un</td></tr>
                    </tbody></TableLI>
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
                </SubList></li>
                <li>The form <b>chez</b>, like the forms <b>à</b> and <b>de</b> is a preposition and occurs before nouns and pronouns. However, <b>chez</b>  occurs only before a noun (or pronoun) which refers to a person, <b>à</b> has no such restriction:<SubList>
                    <TableLI style={{width:"90%",marginLeft:"5%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
                        <tr><td>chez (a person)</td><td>at, to a person's house, home, office, store, place of business, etc.</td></tr>
                        <tr><td>à (a place)</td><td>at, to a place, etc.</td></tr>
                    </tbody></TableLI>
                    <TableLI style={{width:"70%",marginLeft:"15%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
                        <tr><td>Je vais chez le boulanger.</td><td>I'm going to the baker's.</td></tr>
                        <tr><td>Je vais à la boulangerie.</td><td>I'm going to the bakery.</td></tr>
                    </tbody></TableLI>
                </SubList></li>
                <li>The third of the highly frequent verbs in French is <b>aller</b> (to go):<SubList>
                    <TableLI style={{width:"80%",marginLeft:"10%"}}><thead><tr><th>French</th><th>English</th></tr></thead><tbody>
                        <tr><td>je vais</td><td>I go / I am going</td></tr>
                        <tr><td>tu vas</td><td>you go / you are going (singular)</td></tr>
                        <tr><td>il va (elle,on)</td><td>he goes / he is going (she, one)</td></tr>
                        <tr><td>nous allons</td><td>we go / we are going</td></tr>
                        <tr><td>vous allez</td><td>you go / you are going (plural)</td></tr>
                        <tr><td>ils vont (elles)</td><td>they go / they are going</td></tr>
                    </tbody></TableLI>
                </SubList></li>
            </ul>
        </div>

        <div style={{width:"49%",marginRight:"0.5%",float:"right"}}>
            <h3>Lesson 5</h3>
            <ul>
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
                <li>After the sequence <i>ne + Verb + pas</i>, the determiners <i>un</i>, <i>une</i> and <i>des</i> are replaced by <i>de</i> (or <i>d'</i> if followed by a word beginning with a vowel):</li>
                <TableLI style={{width:"60%",marginLeft:"20%"}}><thead><tr><th>Affirmative</th><th>Negative</th></tr></thead>
                    <tbody><tr>
                        <td>Il a un livre.</td>
                        <td>Il n'a pas de livre.</td>
                    </tr>
                    <tr>
                        <td>Il a des livres.</td>
                        <td>Il n'a pas de livres.</td>
                    </tr>
                </tbody></TableLI>
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
                            <td>onze cents ou mille cent</td>
                        </tr>
                        <tr>
                            <td>1200</td>
                            <td>douze cents ou mille deux cents</td>
                        </tr>
                        <tr>
                            <td>1300</td>
                            <td>treize cents ou mille trois cents</td>
                        </tr>
                        <tr>
                            <td>1400</td>
                            <td>quatorze cents ou mille quatre cents</td>
                        </tr>
                        <tr>
                            <td>1500</td>
                            <td>quinze cents ou mille cinq cents</td>
                        </tr>
                        <tr>
                            <td>1600</td>
                            <td>seize cents ou mille six cents</td>
                        </tr>
                        <tr>
                            <td>1700</td>
                            <td>dix-sept cents ou mille sept cents</td>
                        </tr>
                        <tr>
                            <td>1800</td>
                            <td>dix-huit cents ou mille huit cents</td>
                        </tr>
                        <tr>
                            <td>1900</td>
                            <td>dix-neuf cents ou mille neuf cents</td>
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
                <li>Here are the forms of the highly frequent verb <b>faire</b> (to do, to make):<SubList>
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
            </ul>
            <h3>Lesson 7</h3>
            <ul>
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
                        <li>Adjectives ending in é follow the general rule and add an e in the feminine form.</li>
                        <TableLI>
                            <thead><tr><th>Masculine</th><th>Feminine</th></tr></thead>
                            <tbody>
                                <tr><td>un <b>petit</b> paquet</td><td>une <b>petite</b> valise</td></tr>
                                <tr><td>un <b>jeune</b> employé</td><td>une <b>jeune</b> employée</td></tr>
                                <tr><td>un <b>autre</b> boulanger</td><td>une <b>autre</b> pâtisserie</td></tr>
                                <tr><td>un paquet <b>recommandé</b></td><td>une lettre <b>recommandée</b></td></tr>
                            </tbody>
                        </TableLI>
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
                <li><b>Ce</b> occurs only as a third person subject of the verb être. <b>Ce</b> is used instead of 'il, elle, etc.' if the verb 'être' is followed by either:<SubList>
                    <li>A noun marker (le, mon, etc.): C'est un très bon restaurant.</li>
                    <li>A pronoun: C'est tout ce qui reste.</li>
                    <li>A clause: C'est exactement ce qu'il me faut.</li>
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
            </ul>
            <h3>Lesson 8</h3>
            <ul>
                <li><b>Adjective Positions:</b> In French, some adjectives:<SubList>
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
            </ul>
            <h3>Lesson 9</h3>
            <ul>
                <li>Comparative:<SubList>
                    <li>'plus ... que' corresponds to the English comparative '...er than' or 'more ... than'.</li>
                    <li>'moins ... que' corresponds to the English 'less ... than'.</li>
                    <li>'aussi ... que' corresponds to the English 'as ... as'.</li>
                    <li>
                        <table>
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
                        </tbody></table>
                    </li>
                </SubList></li>
                <li>Superlative:<SubList>
                    <li>
                        <table><thead><tr>
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
                        </tbody></table>
                    </li>
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
                <li>A past tense called the <b>Passé Composé</b> is composed of the present of the auxiliary <b>avoir</b> (to have) or <b>être</b> (to be) followed by a past participle.<SubList>
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
                        <thead>
                        <tr>
                            <th>French / Fran&ccedil;ais</th>
                            <th>English / Anglais</th>
                        </tr>
                        </thead>
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
                </SubList></li>
                <li>If a noun in the plural form is preceded by an adjective, 'de' should be used instead of the indefinite article 'des':</li>
                <TableLI><tbody><tr><td>Avez-vous des nouvelles de votre frère?</td></tr>
                    <tr><td>Avez-vous de bonnes nouvelles de votre frère?</td></tr>
                </tbody></TableLI>
            </ul>
            <h3>Lesson 10</h3>
            <ul>
                <li>The passé composé of the verbs conjugated with the auxiliary être (to be):<SubList>
                    <li>
                        <table><thead>
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
                    </tbody></table>
                    </li>
                </SubList></li>
                <li>The Passé Composé of the verb arriver (with the auxiliary être):<SubList>
                    <li>SP + être + past participle:<SubList>
                        <li>
                            <table>
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
                            </tbody></table>
                        </li>
                    </SubList></li>
                    <li>SP + ne + être + pas + past participle:<SubList>
                        <li>
                            <table>
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
                            </tbody></table>
                        </li>
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
                    <li><b>Noun expressing quantity + de + Noun</b>.</li>
                    <li><b>Adverb expressing quantity + de + Noun:</b><SubList>
                        <TableLI>
                        <thead><tr>
                                <th>French / Fran&ccedil;ais</th>
                                <th>English / Anglais</th>
                            </tr></thead>
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
                    </SubList></li>
                    <li>When comparing quantities, de should precede both nouns:<SubList>
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
            </ul>
            <h3>Lesson 11</h3>
            <ul>
                <li>There are two types of verb phrases: The <b>past participle</b> verb phrases and the <b>infinitive</b> verb phrases.</li>
                <li>The infinitive verb phrases is divided into three groups:<SubList>
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
            </ul>
        </div>
    </div>

    <h2 id="optilingo">From "optilingo.com/blog/french/french-pronouns/"</h2>
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
                    <li>To use this pronoun, you have to include on of the following after it:<SubList opened={true}>
                        <li>Propositional phrase</li>
                        <li>Relative clause</li>
                        <li>Particle "-ci" or "-là" - used for emphasis</li>
                    </SubList></li>
                    <li><a href='https://francais.lingolia.com/en/grammar/pronouns/demonstrative-pronouns'><b>Demonstrative pronouns</b> replace a noun, while <b>demonstrative determiners</b> accompany the noun they modify. If the noun does not appear explicitly in the sentence, we use a demonstrative pronoun in its place to single it out from a group. <u>Example:</u> Je parle de celui du milieu.</a></li>
                    <li><a href='https://francais.lingolia.com/en/grammar/pronouns/demonstrative-pronouns'>In French, there are also compound forms of the demonstrative pronouns: <b>celui-ci</b>, <b>celle-ci</b>, <b>celui-là</b>, <b>celle-là</b>. The forms ending in -ci indicate something that's close to the speaker (from ici - here). The forms ending in -là indicate something that's farther away from the speaker (là-bas - there). <u>Example:</u> Lequel? Celui-ci ou celui-là?</a></li>
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
                <li><b>Negative Pronouns:</b> ne __ personne, ne __ rien ...</li>
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

    <h2 id="doulingo">Doulingo</h2>
    <div className="content">
        <div style={{marginLeft:"1%",width:"48%",float:"left"}}>
            <h3>Units 20 - 29</h3>
            <ul>
                <li>Use forms of <b>le</b> with preferences, and forms of <b>de</b> when implying "some" amount of a thing:<SubList>
                    <li>In French, you always need <b>du</b>, <b>de la</b>, or <b>des</b> before uncountable nouns.</li>
                    <TableLI><tbody>
                        <tr><td>Je prends du sucre avec mon café.</td></tr>
                        <tr><td>J'achète des pâtes.</td></tr>
                    </tbody></TableLI>
                    <li>When you're talking about things you like (or don't like!), you should always use <b>le</b>, <b>la</b>, or <b>les</b>. Example: "Il adore le chocolat".</li>
                </SubList></li>
                <li>To say that you're going to do something, use a form of <b>aller</b> with an infinitive:<SubList>
                    <TableLI><tbody>
                        <tr><td>Je vais voyager.</td></tr>
                        <tr><td>Nous n'allons pas partir.</td></tr>
                        <tr><td>Tu vas visiter Paris?</td></tr>
                    </tbody></TableLI>
                </SubList></li>
                <li>In English, we can use <i>do</i> or <i>does</i> to make a question. In French, you can begin questions with "Est-ce que...":<SubList>
                    <TableLI><tbody>
                        <tr><td>Est-ce que tu veux du lait ?</td><td>Do you want some milk?</td></tr>
                        <tr><td>Est-ce qu'Anne comprend ?</td><td>Does Anne understand?</td></tr>
                        <tr><td>Est-ce que vous voyagez ensemble ?</td><td>Do you travel together?</td></tr>
                    </tbody></TableLI>
                </SubList></li>
                <li>French adjectives usually come after the  noun, but in some cases the adjective actually comes first. This applies to adjectives that are talking about: <b>Beauty</b>, <b>Age</b>, <b>Goodness</b>, <b>Size</b> (<b>BAGS</b>):<SubList>
                    <TableLI><tbody>
                        <tr><td>Cette boulangerie a de beaux gâteaux</td></tr>
                        <tr><td>C'est délicieux avec un petit café</td></tr>
                    </tbody></TableLI>   
                </SubList></li>
                <li>In English, we say "He brushes his teeth" or "I wash my face", but in French you'd normally use <b>le</b>, <b>la</b> or <b>les</b> instead of my or his before parts of the body. Example: "Elle se brosse les cheveux".</li>
                <li>In English, we say things like taller or shorter to make comparisons. In French, you say <b>plus</b> (or <b>moins</b>) before the adjective instead:<SubList>
                    <TableLI><tbody>
                        <tr><td>Ma fille est plus jeune que toi</td><td>My daughter is younger (more young) than you</td></tr>
                        <tr><td>Ma fille est moins vieille que toi</td><td>My daughter is younger (less old) than you</td></tr>
                    </tbody></TableLI>
                </SubList></li>
                <li>To tell someone to do something, simply drop the <b>tu</b>:<SubList>
                    <TableLI><tbody>
                        <tr><td>Tu dors beaucoup</td><td>You sleep a lot</td></tr>
                        <tr><td>Dors bien</td><td>Sleep well</td></tr>
                        <tr><td>Tu bois du jus d'orange</td><td>You drink some orange juice</td></tr>
                        <tr><td>Bois plus de jus d'orange</td><td>Drink more orange juice</td></tr>
                    </tbody></TableLI>
                    <li>When telling someone to do something with an -er verb, like <b>marcher</b> or <b>tourner</b>, simply drop the -s from the <b>tu</b> form. Example: "Ne reste pas ici" and "Tourne ici".</li>
                    <TableLI><tbody>
                        <tr><td>Tourne ici</td><td>Turn here</td></tr>
                        <tr><td>Ne reste pas ici</td><td>Don't stay here</td></tr>
                    </tbody></TableLI>
                    <li>For vous, there's no change. Example: "Restez dans la voiture".</li>
                </SubList></li>
                <li>In a negative sentence (that is, one with <b>ne… pas</b>) <b>du</b>, <b>de la</b>, and <b>des</b> become plain old <b>de</b> or <b>d'</b>:<SubList>
                    <TableLI><tbody>
                        <tr><td>Je mange de la viande</td><td>I eat meat</td></tr>
                        <tr><td>Je ne mange pas de viande</td><td>I don't eat meat</td></tr>
                        <tr><td>Je mange des œufs</td><td>I eat eggs</td></tr>
                        <tr><td>Je ne mange pas d'œufs</td><td>I don't eat eggs</td></tr>
                    </tbody></TableLI>
                </SubList></li>
                <li>The <b>de</b> in <i>près de</i> combines with <b>le</b> and <b>les</b>. Example: "Les fruits sont près des légumes."</li>
                <li>In French, when you say "I want this one" or "You need that one", the word you choose depends on the noun's gender and number:<SubList>
                    <TableLI>
                        <thead><tr><th colSpan="2">Masculine</th><th colSpan="2">Feminine</th></tr></thead>
                        <tbody>
                            <tr><td>celui-ci</td><td>celui-là</td><td>celle-ci</td><td>celle-là</td></tr>
                            <tr><td>ceux-ci</td><td>ceux-là</td><td>celles-ci</td><td>celles-là</td></tr>
                        </tbody>
                    </TableLI>
                </SubList></li>
            </ul>
            <h3>Unit 30 - 39</h3>
        </div>
        <div style={{marginRight:"1%",width:"48%",float:"right"}}>
        </div>
    </div>
</>