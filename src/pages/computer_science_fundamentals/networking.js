
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import SubList from "../../articleRelatedStuff/SubList";

export const title = "Networking Notes";
export const sourcesColor = {59: null};
export const content = <>
  <h1>Networking</h1>
  {getSourcesOL(sourcesColor)}

  <h2 id="introduction">Introduction</h2>
  <div className="content">
	  <div style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <ul>
        <li>Communicating at a Distance:<SubList>
          <li>If five people are in different rooms, how could pairs of people
communicate with each other then? One way might be to run a
wire between each pair of people with a microphone on one end
and a speaker on the other end.</li>
          <li>Each person would need four speakers (one for each of the other
people) and enough pieces of wire to connect all the microphones
and speakers. This is a problem with five people and it gets far
worse when there are hundreds or thousands of people.</li>
          <li>Using wires, microphones, and speakers is how early telephone
systems from the 1900s allowed people to make phone calls.</li>
          <li>Because they could not have separate wires between every pair of
telephones, these systems did not allow all pairs of people to be
connected at the same time. Each person had a single connection
to a human "operator". The operator would connect two wires together
to allow a pair of people to talk, and then disconnect them
when the conversation was finished.</li>
        </SubList></li>
        <li>Computers Communicate Differently:<SubList>
          <li>In the earliest days of connecting computers to one another, pairs
of computers were connected with wires.</li>
          <li>The simplest way to
send data from one computer to another was to line up the outgoing
messages in a queue and send the messages one after
another as fast as the computers and the wires could carry the
data. Each message would wait for its turn until the messages
ahead of it were sent, and then it would get its chance to be sent
across the connection.</li>
          <li>When the computers were in the same building, the building
owner could run wires to connect them. If the computers were
in the same town, the owners of the computers generally had
to lease wires from the telephone companies to connect their
computers. They often would have the phone company connect
the wires together in their central office so that it was not
necessary for one computer to "dial" the other computer to
send data.</li>
          <li><b><u>Leased line:</u></b> An "always up" connection that an organization
leased from a telephone company or other utility to send data
across longer distances.</li>
          <li>When the computers were even farther away, in different cities,
the leased lines were extended using the longer wires connecting
the central offices.</li>
          <li>Since there were so few wires between
central offices, these long-distance leased lines were quite expensive
and their cost increased dramatically as the length of the
leased line increased.</li>
        </SubList></li>
        <li>Early Wide Area Store-and-Forward Networks:<SubList>
          <li>In the 1970s and 1980s, people working at universities around the world wanted to send each other data and messages using these computer-to-computer connections.</li>
          <li>Since the cost for each connection was so high and increased with distance, computers generally only had connections to other nearby computers.</li>
          <li>If the computer that you were connected to was connected to
another computer and that computer in turn was connected to
another computer, and so on, you could send a message a long
distance as long as each of the computers along the route of the
message agreed to store and forward your message.</li>
          <li>Over time, with relatively few connections you could send data
long distances across a patchwork of network connections as long
as you were patient.</li>
            <li>Along the way, after your message reached
one computer, it would have to wait until its turn came to be
sent to the next computer along the route. </li>
            <li>A message would
arrive at an intermediate computer, be stored for a while (perhaps
hours, depending on traffic), and then be forwarded one more
connection (or "hop").</li>
            <li>Sending entire messages one at a time this way, a message might
take minutes, hours, or even days to arrive at its ultimate destination,
depending on the traffic at each of the hops.</li>
            <li><b><u>Store-and-forward network:</u></b> A network where data is sent
from one computer to another with the message being stored
for relatively long periods of time in an intermediate computer
waiting for an outbound network connection to become available.</li>
        </SubList></li>
        <li>Packets and Routers:<SubList>
          <li>The most important innovation that allowed messages to move
more quickly across a multi-hop network was to break each message
into small fragments and send each fragment individually.</li>
          <li>In networking terms, these pieces of messages are called <b>packets</b>.</li>
          <li>The idea of breaking a message into packets was pioneered
in the 1960s, but it was not widely used until the 1980s because it
required more computing power and more sophisticated networking
software.</li>
          <li>When messages are broken into packets and each packet is sent
separately, if a short message was sent after a large message
had begun, the short message did not have to wait until the entire
long message was finished. The first packet of the short message
only had to wait for the current packet of the large message to be
finished.</li>
          <li>The system alternated sending packets from the long
and short messages until after a while the short message was
completely sent and the long message resumed making full use
of the network connection.</li>
          <li>Breaking the message into packets also greatly reduced the
amount of storage needed in the intermediate computers because
instead of needing to store an entire message for as long
as a few hours, the intermediate computer only needed to store
a few packets for a few seconds while the packets waited for
their turns on the outbound link.</li>
          <li>As networks moved away from the store-and-forward approach,
they started to include special-purpose computers that specialized
in moving packets. These were initially called <b>"Interface Message
Processors</b> or <b>IMPs</b> because they acted as the interface
between general-purpose computers and the rest of the network.</li>
          <li>Later these computers dedicated to communications were called <b>routers</b> because their purpose was to route the packets they
received towards their ultimate destination.</li>
          <li>When multiple computers at one location were connected together
in a <b>Local Area Network</b> (or <b>LAN</b>) using physical wiring,
you would connect a router to the local area network. By sending
data through the router, all the computers on the local area
network could send data across the <b>Wide Area Network</b> (or
<b>WAN</b>).</li>
        </SubList></li>
        <li>Addressing and Packets:<SubList>
          <li>In the early store-and-forward networks it was important to know
the source and destination computers for every message. </li>
          <li>Each
computer was given a unique name or number that was called
the <b>address</b> of the computer.</li>
          <li>By
having a source and destination address in each message, the
computers that stored and forwarded the message would be able
to pick the best path for the message if more than one path was available.</li>
          <li>When a long message was split into much smaller packets and
each packet was sent individually, the source and destination addresses
had to be added to each packet, so that routers could
choose the best path to forward each packet of the message.</li>
          <li>In
addition to the source and destination addresses, it was also necessary
to add data to each packet indicating the "offset" or position
of the packet in the overall message so that the receiving
computer could put the packets back together in the right order
to reconstruct the original message.</li>
        </SubList></li>
        <li>The term "Internet" comes from the idea of
"internetworking", which captures the idea of connecting many
networks together.</li>
<li>Our computers connect to local networks and
the Internet connects the local networks together so all of our
computers can talk to each other.</li>
      </ul>
	  </div>
	  <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <ImgComp src={require("./networking_pics/1.png")} style={{width:"70%"}}/>
	  </div>
  </div>

  <h2 id="network_architecture">Network Architecture</h2>
  <div className="content">
	  <div style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <ul>
        <li>The engineers who built the first internets broke the overall problem into four basic subproblems that could be worked on independently by different groups: <b>Link</b>, <b>Internetwork</b>, <b>Transport</b>, and <b>Application</b>.</li>
        <li><u>The Link Layer:</u><SubList>
          <li>The Link layer is responsible for connecting your computer to its
          local network and moving the data across a single hop.</li>
          <li>The most common Link layer technology today is wireless networking.</li>
          <li>A smartphone communicates
with a tower that is a few kilometers away. If you are using your
smartphone on a train, it needs to switch to a new tower every
few minutes when the train is moving.</li>
          <li>A laptop that is connected to a WiFi network is usually communicating with a base station
within 200 meters.</li>
          <li>A desktop computer that is connected using
a wired connection is usually using a cable that is 100 meters
long or shorter.</li>
          <li>Link layer technologies are often shared amongst
multiple computers at the same location.</li>
          <li>The Link layer needs to solve two basic problems when dealing with these shared local area networks:<SubList>
            <li>How to encode and send data across the link:<SubList>
              <li>If the link is wireless,
engineers must agree on which radio frequencies are to be used
to transmit data and how the digital data is to be encoded in the
radio signal.</li>
              <li>For wired connections, they must agree on what
voltage to use on the wire and how fast to send the bits across
the wire.</li>
              <li>For Link layer technologies that use fiber optics, they
must agree on the frequencies of light to be used and how fast to
send the data.</li>
            </SubList></li>
            <li>How to cooperate with other computers that might want to send data at the same time:<SubList>
              <li>We need to find a fair way to allow each station to wait its turn to use the shared network. The idea of breaking a large message into packets and then sending each packet separately makes this sharing easier.</li>
              <li>If only one
computer wants to send data, it will send its packets one right
after another and move its data across the network as quickly as
it can.</li>
              <li>If three computers want to send data at the same time,
each computer will send one packet and then wait while the other
two computers send packets. After each of the other computers
              sends a packet, the first computer will send its next packet.</li>
              <li>How does a computer know if other computers want to send
              data at the same time?<SubList>
                <li>Engineers designed an ingenious method
to solve this problem called <b>Carrier Sense Multiple Access with
Collision Detection</b>, or <b>CSMA/CD</b>.</li>
                <li>When your computer wants to send data,
it first listens to see if another computer is already sending data
on the network (Carrier Sense).</li>
                <li>If no other computer is sending
data, your computer starts sending its data.</li>
                <li>As your computer is
sending data it also listens to see if it can receive its own data. If
your computer receives its own data, it knows that the channel
is still clear and continues transmitting.</li>
                <li>If two computers
started sending at about the same time, the data collides, and
your computer does not receive its own data.</li>
                <li>When a collision is
detected, both computers stop transmitting, wait a bit, and retry
the transmission.</li>
                <li>The two computers that collided wait different
lengths of time to retry their transmissions to reduce the chances
of a second collision.</li>
                <li>When your computer finishes sending a packet of data, it pauses
to give other computers that have been waiting a chance to send
data.</li>
                <li>If another computer senses that your computer has stopped
sending data (Carrier Sense) and starts sending its own packet,
your computer will detect the other computer's use of the network
and wait until that computer's packet is complete before
attempting to send its next packet.</li>
                <li>When only one computer is
sending data, that computer can make good use of the shared
network by sending packets one after another, and when many
computers want to use the shared network at the same time,
each computer gets a fair share of the link.</li>
              </SubList></li>
            </SubList></li>
          </SubList></li>
          <li>Fiber optic cables and leased lines are generally
not shared and are used for connections between routers. These
non-shared connections are still part of the Link layer.</li>
        </SubList></li>
        <li><u>The Internetwork Layer:</u><SubList>
          <li>Once your packet destined for the Internet makes it across the
first link, it will be in a router.</li>
          <li>Your packet has a source address
and destination address and the router needs to look at the destination
address to figure out how to best move your packet towards
its destination.</li>
          <li>With each router handling packets destined
for any of many billions of destination computers, it's not possible
for every router to know the exact location and best route to every
possible destination computer, so the router makes its best
guess as to how to get your packet closer to its destination. Each of the other routers along the way also does its best to get
your packet closer to the destination computer.</li>
          <li>As your packet
gets closer to its final destination, the routers have a better idea
of exactly where your packet needs to go.</li>
          <li>When the packet
reaches the last link in its journey, the link layer knows exactly
where to send your packet.</li>
          <li>But just like when you are traveling, unexpected problems or delays
can come up that require a change in plans as your packets
are sent across the network.</li>
          <li>Routers exchange special messages to inform each other about
any kind of traffic delay or network outage so that packets can
be switched from a route that is no longer working to a different
route.</li>
          <li>The routers that make up the core of the Internet are smart
and adapt quickly to both small and large outages or failures of
network connections.</li>
          <li>Sometimes a connection slows down because
it is overloaded. Other times a connection is physically broken
when a construction crew mistakenly digs up a buried wire
and cuts it. Sometimes there is a natural disaster like a hurricane
or typhoon that shuts down the routers and links in a large geographical
area. The routers quickly detect these outages and
reroute around them if possible.</li>
          <li>But sometimes things go wrong and packets are lost. Dealing with
lost packets is the reason for the next layer in our architecture.</li>
        </SubList></li>
        <li><u>The Transport Layer:</u><SubList>
          <li>Sometimes these packets get lost or badly delayed. Other
times the packets arrive at their destination out of order because
a later packet found a quicker path through the network than an
earlier packet.</li>
          <li>Each packet contains the source computer's address,
the destination computer's address, and an offset of where
this packet "fits" relative to the beginning of the message. Knowing
the offset of each packet from the beginning of the message
and the length of the packet, the destination computer can reconstruct
the original message even if the packets were received out
of order.</li>
          <li>As the destination computer reconstructs the message and delivers
it to the receiving application, it periodically sends an acknowledgement
back to the source computer indicating how much of
the message it has received and reconstructed.</li>
          <li>But if the destination
computer finds that parts of the reconstructed message
are missing, this probably means that these packets were lost
or badly delayed.</li>
          <li>After waiting a bit, the destination computer
sends a request to the source computer to resend the data that
seems to be missing.</li>
          <li>The sending computer must store a copy of the parts of the original
message that have been sent until the destination computer
acknowledges successful receipt of the packets.</li>
          <li>Once the source
computer receives the acknowledgment of successful receipt of
a portion of the message, it can discard the data that has been
acknowledged and send some more data.</li>
          <li>The amount of data that the source computer sends before waiting
for an acknowledgement is called the <b>window size</b>.</li>
          <li>If the window size is too small, the data transmission is slowed because
the source computer is always waiting for acknowledgments.</li>
          <li>If the source computer sends too much data before waiting for an
acknowledgment, it can unintentionally cause traffic problems by
overloading routers or long-distance communication lines.</li>
          <li>This problem is solved by keeping the window size small at the beginning
and timing how long it takes to receive the first acknowledgements.
If the acknowledgments come back quickly, the source
computer slowly increases the window size and if the acknowledgements
come back slowly, the source computer keeps the
window size small so as not to overload the network.</li>
          <li>Just like at the Link layer, a little courtesy on the Internet goes a long way
toward ensuring good use of the shared network infrastructure.</li>
          <li>This strategy means that when the network has high-speed connections
and is lightly loaded the data will be sent quickly, and
if the network is heavily loaded or has slow connections the data
will be slowed down to match the limitations of the network connections
between the source and destination computers.</li>
        </SubList></li>
        <li><u>The Application Layer:</u><SubList>
          <li>When the first widely used Internet came into being in the mid-
1980s, the first networked applications allowed users to log in to
remote computers, transfer files between computers, send mail
between computers, and even do real-time text chats between
computers.</li>
          <li>In the early 1990s, as the Internet came to more people and computer's
abilities to handle images improved, the World Wide Web
application was developed by scientists at the CERN high-energy
physics facility.</li>
          <li>Each application is generally broken into two halves. One half of
the application is called the <b>server</b>. It runs on the destination
computer and waits for incoming networking connections.</li>
          <li> The other half of the application is called the <b>client</b> and runs on the
source computer.</li>
          <li>The <b>Uniform Resource Locators (URLs)</b> that your web
browser shows in its address bar are the web servers that your
client is contacting to retrieve documents for you to view.</li>
          <li>When we develop the server half and the client half of a networked
application, we must also define an <b>application protocol</b>
that describes how the two halves of the application will exchange messages over the network.</li>
          <li>The protocols used for each application
are quite different and specialized to meet the needs of the
particular application.</li>
        </SubList></li>
        <li>Stacking the Layers:<SubList>
          <li>We usually show the four different layers (Link, Internetwork,
Transport, and Application) stacked on top of each other with
the Application layer at the top and the Link layer at the bottom.
The reason we show them this way is because each layer makes
use of the layers above and below it to achieve networked
communications.</li>
          <li>All four layers run in your computer where you run the client application
(like a browser), and all four layers also run in the destination
computer where the application server is running.</li>
          <li>You as the end user interact with the applications that make up the
top layer of the stack, and the bottom layer represents the WiFi,
cellular, or wired connection between your computer and the rest
of the Internet.</li>
          <li>Routers operate
at the Internetwork and Link layers. The source and destination
addresses at the Internetwork layer are all that is needed for
routers to move your packets across the series of links (hops) to
get them to the destination. The Transport and Application layers
only come into play after the Internetwork layer delivers your
packets to the destination computer.</li>
          <li>If you wanted to write your own networked application, you would
likely only talk to the Transport layer and be completely unconcerned
about the Internetwork and Link layers.</li>
          <li>The layered network model makes it simpler to write networked
applications because so many of the complex details of
moving data from one computer to another can be ignored.</li>
        </SubList></li>
      </ul>
    </div>
	  <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <ImgComp src={require("./networking_pics/2.png")} style={{width:"25%"}}/>
    </div>
  </div>
  
  <h2 id="linked_layer">Linked Layer</h2>
  <div className="content">
	  <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <li>Sharing the Air:<SubList>
        <li>When your laptop or phone is using WiFi to connect to the Internet, it is sending and receiving data with a small, low-powered radio. The radio in your computer can only send data about 300 meters, so your computer sends your packets to the router in your home.</li>
        <li>Sometimes we call the first router that handles your computer's packets the <b>base station</b> or <b>gateway</b>.</li>
        <li>All computers that are close enough to the base station with their radios turned on receive all of the packets the base station transmits, regardless of which computer the packet is supposed to be sent to.</li>
        <li>They also hear all the packets sent by every other nearby computer. So your computer needs a way to know which packets to treat as its own and which packets are being sent to other computers and can be safely ignored.</li>
        <li>An interesting side effect of the fact that all the computers within range can hear all packets is that a rogue computer could also be listening to and capturing your packets, perhaps getting ahold of important data like bank account numbers or passwords to online services.</li>
        <li>Each of the computers using WiFi has its own serial number, and the radio in the gateway also has a serial number. It is also called the <b>Media Access Control</b> or <b>MAC</b> address</li>
        <li>A MAC address is like a "from" or "to" address on a postcard. Every packet (radio postcard) sent across the WiFi has a source and destination address, so all of the computers know which messages are theirs.</li>
        <li>When you first connect to a new WiFi, your computer must discover the MAC address for the gateway of that particular WiFi:<SubList className={"research"}>
          <li>To do this, your computer sends a special message to a broadcast address, effectively asking the question, "Who is in charge of this WiFi?"</li>
          <li>It sends a broadcast message with its own serial number as the "from" address and the broadcast address as the "to" address to ask if there are any gateways present on the WiFi network.</li>
          <li>If there is a gateway on the network, the gateway sends a message containing its serial number back to your computer.</li>
          <li>If there are no replies, your computer waits a few seconds and then assumes there is no gateway for this network.</li>
          <li>When there is no gateway, your computer might show a different WiFi icon or not show the WiFi icon at all.</li>
          <li>Once your computer receives a message with the MAC address of the gateway, it can use that address to send packets that it wants the gateway to forward to the Internet.</li>
        </SubList></li>
        <li>You want to use the broadcast address as little as possible because every computer connected to the WiFi receives and processes any messages sent to the broadcast address to make sure the messages were not intended for them.</li>
      </SubList></li>
      <li>Courtesy and Coordination:<SubList>
        <li>Because many computers are sharing the same radio frequencies, it's important to coordinate how they send data.</li>
        <li>When there's a crowd of people in a room, they can't all talk at the same time or everything will be garbled. The same thing happens when multiple WiFi radios transmit at the same time on the same frequency.</li>
        <li>We need some way to coordinate all the radios to make best use of the shared frequencies. We will look at the basics of technical approaches to avoiding lost data due to "transmission collisions".</li>
        <li>The first technique is called <b>Carrier Sense</b>. The technique is to first listen for a transmission, and if there is already a transmission in progress, wait until the transmission finishes.</li>
        <li>Since all messages are broken into packets, usually your computer only has to wait for the computer currently sending data to finish a packet, after which your computer gets its chance to send data.</li>
        <li>If your computer's WiFi radio listens for data and hears silence, it can begin transmitting.</li>
        <li>But what if another computer's WiFi radio that wants to send a packet listened to and heard the same silence and decided to start transmitting at exactly the same time?</li>
        <li>Once your WiFi radio starts sending a packet it is important for it to listen to make sure it can receive its own data.</li>
        <li>If it is not receiving the same thing that it is sending, your WiFi radio assumes that a collision has happened (this is called <b>Collision Detection</b>) and stops transmitting, since it knows that no data will be received by the destination WiFi radio.</li>
        <li>When the WiFi radios detect a collision or garbled transmission, they compute a random amount of time to wait before retrying the transmission.</li>
        <li>The formal name for the listen, transmit, listen, and wait and retry if necessary is called <b>Carrier Sense Multiple Access with Collision Detection</b> or <b>CSMA/CD</b>.</li>
        <li>Wired Ethernet, cellular telephone data, and even Short Message Service (SMS/Texting) all use this "try then retry" approach.</li>
      </SubList></li>
      <li>Coordination in Other Link Layers:<SubList>
        <li>Sometimes when a link layer has many transmitting stations and needs to operate at near 100% efficiency for long periods of time, the design takes a different approach.</li>
        <li>In this approach, there is a token that indicates when each station is given the opportunity to transmit data. Stations cannot start a transmission unless they have the token. Instead of listening for silence and jumping in, they must wait for their turn to come around.</li>
        <li>When a station receives the token and has a packet to send, it sends the packet. Once the packet has been sent, the station gives up the token and waits until the token comes back to it.</li>
        <li>If none of the stations have any data to send, the token is moved from one computer to the next computer as quickly as possible.</li>
        <li>A group of people sitting around a meeting could communicate without ever interrupting each other by having a small ball that they pass around in a circle and only allowing the person who has the ball to speak. When you get the ball and have something to say you talk for a short period (transmit a packet of words) and then pass the ball on.</li>
      </SubList></li>
      <li>The token approach is best suited when using a link medium such as as a satellite link or a undersea fiber optic link where it might take too long or be too costly to detect a collision.</li>
      <li>The CSMA/CD (listen-try) is best suited when the medium is inexpensive, shorter distance, and there are a lot of stations sharing the medium that only send data in short bursts.</li>
    </ul>
	  <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <figure>
        <ImgComp src={require("./networking_pics/3.png")} style={{width:"60%"}}/>
        <figcaption>Communicating with a Token</figcaption>
      </figure>
    </div>
  </div>

  <h2 id="Internetworking Layer">Internetworking Layer</h2>
  <div className="content">
	  <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <li>Internet Protocol (IP) Addresses:<SubList>
        <li>Link addresses are assigned when the hardware is manufactured and stayed the same throughout the life of a computer.</li>
        <li>We cannot use link layer addresses to route packets across multiple networks because there is no relationship between a link layer address and the location where that computer is connected to the network.</li>
        <li>With portable computers and cell phones moving constantly, the system would need to track each individual computer as it moved from one location to another.</li>
        <li>To make this easier, we assign another address to every computer based on where the computer is connected to the network. There are two different versions of IP addresses. The old (classic) IPv4 addresses consist of four numbers separated by dots like this:<SubList>
          <TableLI>
            <caption>Example</caption>
            <tbody>
              <tr><td>212.78.1.25</td></tr>
            </tbody>
          </TableLI>
          <li>The most important thing about IP addresses is that they can be broken into two parts.1 The first part of the two-piece address is called the <b>Network Number</b>. If we break out an IPv4 address into two parts, we might find the following:</li>
          <TableLI>
            <tbody>
              <tr><td>Network Number: 212.78</td></tr>
              <tr><td>Host Identifier: 1.25</td></tr>
            </tbody>
          </TableLI>
          <li>In the example above, 65,536 computers could be connected to the network using the network number of "212.78".</li> 
          <li>When your packet arrives in a router and the router needs to decide which outbound link to send your packet to, the router does not have to look at the entire IP address. It only needs to look at the first part of the address to determine the best outbound link.</li>
        </SubList></li>
        <li>We have so many computers connected to the Internet now that we are running out of IPv4 addresses to assign to them. IPv6 address are longer and look like:</li>
        <TableLI>
          <tbody>
            <tr><td>2001:0db8:85a3:0042:1000:8a2e:0370:7334</td></tr>
          </tbody>
        </TableLI>
      </SubList></li>
      <li>How Routers Determine the Routes:<SubList>
        <li>While the idea of the collapsing many IP addresses into a single network number greatly reduces the number of individual endpoints that a router must track to properly route packets, each router still needs a way to learn the path from itself to each of the network numbers it might encounter.</li>
        <li>When a new core router is connected to the Internet, it does not know all the routes. It may know a few preconfigured routes, but to build a picture of how to route packets it must discover routes as it encounters packets.</li>
        <li>When a router encounters a packet that it does not already know how to route, it queries the routers that are its neighbors. The neighboring routers that know how to route the network number send their data back to the requesting router.</li>
        <li>Sometimes the neighboring routers need to ask their neighbors and so on until the route is actually found and sent back to the requesting router.</li>
        <li>In the simplest case, a new core router can be connected to the Internet and slowly build a map of network numbers to outbound links so it can properly route packets based on the IP address for each incoming packet. We call this mapping of network numbers to outbound links the <b>routing table</b> for a particular router.</li>
        <li>When the Internet is running normally, each router has a relatively complete routing table and rarely encounters a new network number.</li>
        <li>Once a router figures out the route to a new network number the first time it sees a packet destined for that network number, it does not need to rediscover the route for the network number unless something changes or goes wrong.</li>
      </SubList></li>
      <li>When Things Get Worse and Better:<SubList>
        <li>Sometimes the network has problems and a router must find a way to route data around the problems. A common problem is that one of the outbound links fails.</li>
        <li>The recovery when a router loses an outbound link is surprisingly simple:<SubList>
          <li>The router discards all of the entries in its routing table that were being routed on that link. Then as more packets arrive for those network numbers, the router goes through the route discovery process again, this time asking all the neighboring routers except the ones that can no longer be contacted due to the broken link.</li>
          <li>Packets are routed more slowly for a while as routing tables are rebuilt that reflect the new network configuration, but after a while things are humming along nicely. This is why it is important for there to always be at least two independent paths from a source network to a destination network in the core of the network.</li>
        </SubList></li>
        <li>If there are always at least two possible independent routes, we say that a network is a two-connected network. A two-connected network can recover from any single link outage.</li>
        <li>When you are at your home or school and have only one connection, if that connection goes down you are disconnected completely.</li>
        <li>The router is always interested in improving its routing tables, and looks for opportunities to improve its routing tables in its spare time. When there is a lull in communication, a router will ask a neighboring router for all or part of its routing table.</li>
        <li>The router looks through the neighbor's tables and if it looks like the other router has a better route to a particular network number, it updates its network table to forward packets for that network number through the link to the router that has a better route.</li>
      </SubList></li>
      <li>Determining Your Route:<SubList>
        <li>Most computers have a network diagnostic tool called <b>traceroute</b> (or <b>tracert</b>, depending on the operating system) that allows you to trace the route between your computer and a destination computer. </li>
        <li>The traceroute command does not actually "trace" your packet at all. It takes advantage of a feature in the IP network protocol that was designed to avoid packets becoming "trapped" in the network and never reaching their destination:<SubList>
          <li>Remember that the information in any single router is imperfect and is only an approximation of the best outbound link for a particular network number, and each router has no way of knowing what any other router will do.</li>
          <li>Sometimes the routers get confused and their routing tables form a loop.</li>
          <li>If a packet found its way into one of these routers, it would be routed around a circle forever.</li>
          <li>To solve this problem, the Internet Protocol designers added a number to each packet that is called the Time To Live (TTL).</li>
          <li>This number starts out with a value of about 30. Each time an IP packet is forwarded down a link, the router subtracts 1 from the TTL value.</li>
          <li>When the TTL reaches zero, the router assumes that something is wrong and throws the packet away.</li>
          <li>When the router throws a packet away, it usually sends back a courtesy notification, something like, "Sorry I had to throw your packet away". The message includes the IP address of the router that threw the packet away.</li>
        </SubList></li>
        <li>The traceroute program sends packets in a tricky manner to get the routers that your packets pass through to send it back notifications:<SubList>
          <li>First, traceroute sends a packet with a TTL of 1. That packet gets to the first router and is discarded and your computer gets a notification from the first router.</li>
          <li>Then traceroute sends a packet with a TTL of 2. That packet makes it through the first router and is dropped by the second router, which sends you back a note about the discarded packet.</li>
          <li>Then traceroute sends a packet with a TTL of 3, and continues to increase the TTL until the packet makes it all the way to its destination.</li>
          <li>With this approach, traceroute builds up an approximate path that your packets are taking across the network.</li>
        </SubList></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>     
      </SubList></li>
    </ul>
	  <ul style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <li>Getting an IP Address:<SubList>
        <li>If you close your laptop in one coffee shop and reopen it using your home WiFi, your computer will need a different IP address. This ability for your computer to get a different IP address when it is moved from one network to another uses a protocol called <b>Dynamic Host Configuration Protocol</b> (or <b>DHCP</b> for short).</li>
        <li>Going back to the Link layer section, recall the first thing your computer does at the link level is ask "Is there a base station on this network?" by sending a message to a special broadcast address.</li>
        <li>Once your computer is successfully connected at the link layer through that base station, it sends another broadcast message, this time asking "Is there a gateway connected to this network that can get me to the Internet? If there is, tell me your IP address and tell me what IP address I should use on this network."</li>
        <li>When the gateway router replies, your computer is given a temporary IP address to use on that network (for instance, while you are at the coffee shop). After the router has not heard from your computer for a while, it decides you are gone and loans the IP address to another computer.</li>
        <li>If this process of reusing a loaned IP address goes wrong, two computers end up on the same network with the same IP address.</li>
        <li>Perhaps you have seen a message on your computer to the effect of, "Another computer is using 192.168.0.5, we have stopped using this address". Your computer sees another computer with a link address other than its own using the IP address that your computer thinks is assigned to it.</li>
        <li>In some operating systems, when a computer connects to a network, issues a DHCP request, and receives no answer, it decides to assign itself an IP address anyway.</li>
        <li>Often these self-assigned addresses start with "169....". When your computer has one of these self-assigned IP addresses, it thinks it is connected to a network and has an IP address, but without a gateway, it has no possibility of getting packets routed across the local network and onto the Internet. </li>
        <li>The best that can be done is that a few computers can connect to a local network, find each other, and play a networked game. There is not much else that can be done with these self-assigned IP addresses.</li>
      </SubList></li>
      <li>A Different Kind of Address Reuse:<SubList>
        <li>If you made a list of the different addresses you received at the different locations, you might find that many of the locations give out addresses with a prefix of "192.168.".</li>
        <li>This seems to be a violation of the rule that the network number (IP address prefix) is tied to the place where the computer is connected to the Internet, but a different rule applies to addresses that start with "192.168." (The prefix 10. is also special).</li>
        <li>Addresses that start with "192.168". are called non-routable addresses. This means that they will never be used as real addresses that will route data across the core of the network. They can be used within a single local network, but not used on the global network.</li>
        <li>So then how is it that your computer gets an address like "192.168.0.5" on your home network and it works perfectly well on the overall Internet? This is because your home router/gateway/base station is doing something we call <b>Network Address Translation</b>, or <b>NAT</b>.</li>
        <li>The gateway has a single routable IP address that it is sharing across multiple workstations that are connected to the gateway.</li>
        <li>Your computer uses its non-routable address like "192.168.0.5" to send its packets, but as the packets move across the gateway, the gateway replaces the address with its actual routable address.</li>     
        <li>When packets come back to your workstation, the router puts your workstation's non-routable address back into the returning packets.</li>
        <li>This approach allows us to conserve the real routable addresses and use the same non-routable addresses over and over for workstations that move from one network to another.</li>
      </SubList></li>
      <li>Global IP Address Allocation:<SubList>
        <li>If you wanted to connect the network for a new organization to the Internet you would need to contact an Internet Service Provider and make a connection. Your ISP would give you a range of IP addresses (i.e., one or more network numbers) that you could allocate to the computers attached to your network.</li>
        <li>The ISP assigns you network numbers by giving you a portion of the network numbers they received from a higher-level Internet Service Provider.</li>
        <li>At the top level of IP address allocations are five <b>Regional Internet Registries</b> (<b>RIRs</b>). Each of the five registries allocates IP addresses for a major geographic area. Between the five registries, every location in the world can be allocated a network number.</li>
        <li>The five registries are North America (ARIN), South and Central America (LACNIC), Europe (RIPE NCC), Asia-Pacific (APNIC) and Africa (AFRNIC).</li>
        <li>When the classic IPv4 addresses like "212.78.1.25" were invented, only a few thousand computers were connected to the Internet.</li>
        <li>The Regional Internet Registries (RIRs) are leading the transition from IPv4 to IPv6. The transition from IPv4 to IPv6 will take many years. During that time, both IPv4 and IPv6 must work seamlessly together.</li>
      </SubList></li>
    </ul>
  </div>
</>