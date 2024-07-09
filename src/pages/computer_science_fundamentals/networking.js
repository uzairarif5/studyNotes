
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { CodePre } from "../../articleRelatedStuff/Code";
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
          <li>If five people are in different rooms, how could pairs of people communicate with each other then? One way might be to run a
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
      <li>The Internetworking Protocol layer extends our network from a single hop (Link layer) to a series of hops that result in packets quickly and efficiently being routed from your computer to a destination IP address and back to your computer.</li>
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
    </ul>
	  <ul style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
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
      </SubList></li>
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

  <h2 id="domain_name">The Domain Name System</h2>
  <div className="content">
	  <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <li>The <b>Domain Name System</b> lets you access websites by their domain name like (<code>www.khanacademy.org</code>), so you don't have to keep a list of numeric Internet Protocol (IP) addresses like "212.78.1.25":<SubList>
        <li>IP address are determined by where your computer connects to the Internet. When you have a portable computer and you move from one location to another, you get a new IP address at each new location.</li>
        <li>Since no one connects to your portable computer, it does not matter if your IP address changes from time to time. But since so many people connect to a web server, it would be inconvenient if the server moved to a new location and needed to change its IP address.</li>
        <li>When your computer makes a connection to a system using a domain name address, the first thing your computer does is look up the IP address that corresponds to the domain name. Then your computer makes the connection using the IP address.</li>
      </SubList></li>
      <li>Adding the separate step of looking up the IP address for a DNS address also makes it easier to move a server from one location to another:<SubList>
        <li>The server is given a new IP address and the entry for the domain address is updated.</li>
        <li>Once the DNS entry is updated, new requests for the domain name are given the new IP address.</li>
        <li>Since end users access most servers using domain names and never see the IP address, a server can be moved to a new network connection without affecting the end user's ability to access the server.</li>
      </SubList></li>
    </ul>
    <ul style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <li>Allocating Domain Names:<SubList>
        <li>If you recall from the previous section, IP addresses are allocated based on where you connect a new network to the Internet.</li>
        <li>Domain names are allocated based on organizations that "own" the domain name.</li>
        <li>At the top of the domain name hierarchy is an organization called the <b>International Corporation for Assigned Network Names and Numbers</b>:<SubList>
          <li>ICANN chooses the top-level domains (TLDs) like <code>.com</code>, <code>.edu</code>, and <code>.org</code> and assigns those to other organizations to manage.</li>
          <li>ICANN also assigns two-letter country code top-level domain names like <code>.us</code>, <code>.za</code> and <code>.jp</code> to countries around the world We call these <b>Country-Code Top-Level Domain Names</b> (<b>ccTLDs</b>).</li>
          <li>Countries often add second-level TLDs, like <code>.co.uk</code> for commercial organizations within the UK.</li>
        </SubList></li>
        <li>Once a domain name is assigned to an organization, the controlling organization is allowed to assign subdomains within the domain. As an example, the <code>.edu</code> top-level domain is assigned to the Edu-cause organization. Edu-cause assigns domains like <code>umich.edu</code> to higher education institutions.</li>
        <li>Once the University of Michigan is given control of <code>umich.edu</code>, it can make its own choices for subdomains within its new domain.</li>
        <li>Domains ending in <code>.com</code> and <code>.org</code> can be purchased by individuals. The individual owners of those domains are allowed to manage their domain and create subdomains under it for their own use or use by others.</li>
        <li><b>Registrar:</b> A company that can register, sell, and host domain names.</li>
      </SubList></li>
      <li>Reading Domain Names:<SubList>
        <li>When we look at an IP address like "212.78.1.25", the left prefix is the "Network Number", so in a sense we read IP addresses from left to right, where the left part of the IP address is the most general part of the address.</li>
        <li>For domain names, we read from right to left.</li>
        <li><code>drchuck.personal.si.umich.edu</code>: The most general part of this domain name is ".edu", which meanshigher education institutions. The subdomain "umich.edu" is a particular higher education institution.</li>
      </SubList></li>
    </ul>    
  </div>

  <h2 id="transport_layer">Transport Layer</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <li>The purpose of the Transport layer is to compensate for the fact that the Link and Internetworking layers might lose data:<SubList>
        <li>A key element of the Internetworking layer is that it does not attempt to guarantee delivery of any particular packet. The Internetworking layer is nearly perfect, but sometimes packets can be lost or misrouted.</li>
        <li>Just like the IP layer, the Transport layer adds a small amount of data to each packet to help solve the problems of packet reassembly and retransmission.</li>
      </SubList></li>
      <li>Packet Headers:<SubList>
        <li>If you were to look at a packet going across one of many links between its source and destination computers, you would see a link header, an IP header, and a Transport Control Protocol (TCP) header, along with the actual data in the packet.</li>
        <li>The link header is removed when the packet is received on one link and a new link header is added when the packet is sent out on the next link on its journey.</li>
        <li>The IP and TCP headers stay with a packet as it is going across each link in its journey.</li>
        <TableLI>
          <thead>
            <tr><th>Link Header</th><th>IP Header</th><th>TCP Header</th><th>Data Packet</th></tr>
          </thead>
          <tbody>
            <tr><td>From | To</td><td>From | To | TTL</td><td>Port | Offset</td><td>...</td></tr>
          </tbody>      
        </TableLI>
        <li>The IP header holds the source and destination Internet Protocol (IP) addresses as well as the Time to Live (TTL) for the packet.</li>
        <li>The IP header is set on the source computer and is unchanged (other than the TTL) as the packet moves through the various routers on its journey.</li>
        <li>The TCP headers indicate where the data in each packet belongs.</li>
      </SubList></li>
      <li>Packet Reassembly and Retransmission:<SubList>
        <li>As the destination computer receives the packets, it looks at the offset position from the beginning of the message so it can put the packet into the proper place in the reassembled message.</li>
        <li>If it receives a packet further down a message, it places that packet in a buffer, keeping track of the fact that there is now a gap in the message that is being reconstructed. When the earlier packet arrives a moment later, it fits perfectly into the gap in the reassembled data.</li>
        <li>To avoid overwhelming the network, the Transport layer in the sending computer only sends a certain amount of data before waiting for an acknowledgement from the Transport layer on the destination computer that the packets were received.</li>
        <li>The amount of data that the sending computer will send before pausing to wait for an acknowledgment is called the <b>window size</b>.</li>
        <li>If the acknowledgments come back quickly, the sending computer increases its window size, but if the acknowledgments come back slowly, the sending computer transmits less data.</li>
        <li>If a packet is lost:<SubList>
          <li>If a packet is lost, it will never arrive at the destination computer and so the destination computer will never send an acknowledgment for that data.</li>
          <li>Because the sending computer does not receive an acknowledgment, it quickly reaches the point where it has sent enough unacknowledged data to fill up the window and stops sending new packets. At this point, both computers are waiting.</li>
          <li>To make sure that the computers do not wait forever, the destination computer keeps track of the amount of time since it received the last packet of data.</li>
          <li>At some point, the receiving computer decides too much time has passed and sends a packet to the sending computer indicating where in the stream the receiving computer has last received data. When the sending computer receives this message, it backs up and resends data from the last position that the receiving computer had successfully received.</li>
        </SubList></li>
      </SubList></li>
      <li>The Transport Layer In Operation:<SubList>
        <li>Once the receiving computer acknowledges the data, the sending computer can discard the sent data.</li>
        <li>We can look at this graphically when a message is broken into many packets.</li>
        <li><ImgComp src={require("./networking_pics/5.png")} style={{width:"80%"}}/></li>
        <li>Here, the first ten packets of the message have been sent and acknowledged by the destination computer (a).</li>
        <li>The sending computer has sent six more packets (S), and then stopped because it reached its window size.</li>
        <li>There are three packets that have been sent but not yet received (S).</li>
        <li>The Transport layer on the receiving computer has received and acknowledged ten packets (a) and delivered them to the receiving application.</li>
        <li>The Transport layer on the destination computer has received more three packets (R), but one packet is out of order.</li>
        <li>Receiving a packet out of order is not a cause for concern if the missing packet arrives in a reasonably short amount of time.</li>
        <li>As long as all the packets are received, the receiving Transport layer will reconstruct the message, fitting the packets together like puzzle pieces, and deliver them to the receiving application.</li>
      </SubList></li>
      <li>Application Clients and Servers:<SubList>
        <li>The purpose of the Transport layer is to provide reliable connections between networked applications so those applications can send and receive streams of data.</li>
        <li>For an application, this is as simple as asking the Transport layer to make a connection to an application running on a remote host.</li>
        <li>We call the application that initiates the connection on the local computer the <b>client</b> and the application that responds to the connection request the <b>server</b>.</li>
      </SubList></li>
      <li>Server Applications and Ports:<SubList>
        <li>A remote computer might have any number of different server applications running at the same time. <u>Examples:</u> Web Server, Video Server, Mail Server.</li>
        <li>A web client (a browser) needs to connect to the web server running on the remote computer. So a client application not only needs to know which remote computer to connect to, it also needs to choose a particular application to interact with on that remote computer.</li>
        <li>We use a concept called <b>ports</b> to allow a client application to choose which server application it wants to interact with. Ports are like telephone extensions. All of the extensions have the same phone number (IP Address) but each extension (server application) has a different extension number (port number).</li>
        <li>When a server application starts up, it listens for incoming connections on the specified port. Once the server application has registered that it is ready to receive incoming connections, it waits until the first connection is made.</li>
      </SubList></li>
    </ul>
    <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <figure>
        <ImgComp src={require("./networking_pics/4.png")} style={{width:"50%"}}/>
        <figcaption>Waiting for a lost packet</figcaption>
      </figure>
    </div>
  </div>

  <h2 id="application_layer">Application Layer</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <li>The Application layer is where the networked software like web browsers, mail programs, video players, or networked video players operate.</li>
      <li>Client and Server Applications:<SubList>
        <li>The architecture for a networked application is called <b>client/server</b>.</li>
        <li>The <b>server</b> portion of the application runs somewhere on the Internet and has the information that users want to view or interact with.</li>
        <li>The <b>client</b> portion of the application makes connections to the server application, retrieves information, and shows it to the user.</li>
        <li>These applications use the Transport layer on each of their computers to exchange data. To browse a web address like <code>www.khanacademy.org</code>, you must have a webapplication running on your computer.</li>
        <li>When you type an address into your web browser, it connects to the appropriate web server, retrieves pages for you to view, and then shows you the pages. The web browser on your computer sends a request to connect to <code>www.khanacademy.org</code>. Your computer looks up the domain name to find the corresponding IP address for the server and makes a transport connection to that IP address, then begins to request data from the server over that network connection.</li>
        <li>When the data is received, the web browser shows it to you. Sometimes web browsers display a small animated icon to let you know that the data is being retrieved across the network.</li>
        <li>On the other end of the connection is another application called a <b>web server</b>. The web server program is always up and waiting for incoming connections.</li>
        <li>So when you want to see a web page, you are connecting to a server application that is already running and waiting for your connection.</li>
      </SubList></li>
      <li>Application Layer Protocols:<SubList>
        <li>Just like people talking on telephones, each pair of network applications needs a set of rules that govern the conversation.</li>
        <li>A set of rules that govern how we communicate is called a <b>protocol</b>. The definition of the word protocol is "a rule which describes how an activity should be performed, especially in the field of diplomacy".</li>
        <li>The formal name of the protocol between web clients and web servers is the <b>HyperText Transport Protocol</b>, or <b>HTTP</b> for short. When you put http: or https: on the beginning of a URL that you type into the browser, you are indicating that you would like to retrieve a document using the HTTP protocol.</li>
        <li>One of the reasons that HTTP is so successful is that it is relatively simple compared to most client/server protocols.</li>
        <li>Even though the basic use of HTTP is relatively simple, there is a lot of detail that allows web clients and servers communicate efficiently and transfer a wide range of information and data.</li>
      </SubList></li>
      <li>Exploring the HTTP Protocol:<SubList>
        <li>In this section we will manually exercise the HTTP protocol by pretending to be a web browser and sending HTTP commands to a web server to retrieve data.</li>
        <li>To play with the HTTP protocol, we will use one of the earliest Internet applications ever built. The telnet application was first developed in 1968, and was developed according to one of the earliest standards for the Internet.</li>
        <li>The Internet was created in 1985 by the NSFNet project and the precursor to the NSFNet called the ARPANET was brought up in 1969. Telnet was designed and built even before the first TCP/IP network was in production.</li>
        <li>Interestingly, the telnet application is still present in most modern operating systems. The telnet application was also present in Windows 95 through Windows XP, but is not included in later versions of Windows. If you have a later version of Windows, you can download and install a telnet client to do the examples in this section.</li>
        <li>Telnet is a simple application. Run telnet from the command line (or terminal) and type the following command: <code>telnet www.dr-chuck.com 80</code>.</li>
        <li>We use the port to indicate which application server we would like to connect to. Port 80 is where we typically expect to find an HTTP (web) server application on a host.</li>
        <li>If there is no web server listening on port 80, our connection will time out and fail. But if there is a web server, we will be connected to that web server and whatever we type on our keyboard will be sent directly to the server.</li>
        <li>At this point, we need to know the HTTP protocol and type the commands precisely as expected. If we don't know the protocol, the web server will not be too friendly.</li>
        <li>Here is an example of things not going well:</li>
        <li><CodePre>{`
telnet www.dr-chuck.com 80
Trying 198.251.66.43...
Connected to www.dr-chuck.com. Escape character is '^]'.
HELP
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>501 Method Not Implemented</title>
...
</body></html>
Connection closed by foreign host.
        `}</CodePre></li>
        <li>We type telnet in the terminal requesting a connection to port 80 (the web server) on the host <code>www.dr-chuck.com</code>.</li>
        <li>You can see as our transport layer is looking up the domain name, finding that the actual address is <code>198.251.66.43</code>, and then making a successful connection to that server. Once we are connected, the server waits for us to type a command followed by the enter or return key. </li>
        <li>Since we don't know the protocol, we type "HELP" and enter. The server is not pleased, gives us an error message, and then closes the connection. We do not get a second chance. If we do not know the protocol, the web server does not want to talk to us.</li>
        <li>Now let's try again to request a document using the correct syntax:</li>
        <li><CodePre>{`
telnet www.dr-chuck.com 80
Trying 198.251.66.43...
Connected to www.dr-chuck.com.
Escape character is '^]'.
GET http://www.dr-chuck.com/page1.htm HTTP/1.0 HTTP/1.1 200 OK
Last-Modified: Sun, 19 Jan 2014 14:25:43 GMT
Content-Length: 131
Content-Type: text/html

<h1>The First Page</h1>
<p>
If you like, you can switch to the
<a href="http://www.dr-chuck.com/page2.htm">
Second Page</a>.
</p>
Connection closed by foreign host.
        `}</CodePre></li>
        <li>We make the connection to the web browser again using telnet, then we send a <code>GET</code> command that indicates which document we want to retrieve. We use version 1.0 of the HTTP protocol because it is simpler than HTTP 1.1. Then we send a blank line by pressing "return" or "enter" to indicate that we are done with our request.</li>
        <li>Since we have sent the proper request, the host responds with a series of headers describing the document, followed by a blank line, then it sends the actual document.</li>
        <li>The headers communicate metadata (data about data) about the document that we have asked to retrieve. For example, the first line contains a status code.</li>
        <li>The status codes for HTTP are grouped into ranges: 2XX codes indicate success, 3XX codes are for redirecting, 4XX codes indicate that the client application did something wrong, and 5xx codes indicate that the server did something wrong.</li>
      </SubList></li>
      <li>The IMAP Protocol for Retrieving Mail:<SubList>
        <li>The HTTP protocol is only one of many client/server application protocols used on the Internet. Another common protocol is used so that a mail application running on your computer can retrieve mail from a central server.</li>
        <li>Since your personal computer might not be turned on at all times, when mail is sent to you it is sent to a server and stored on that server until you turn on your computer and retrieve any new email.</li>
        <li>Like many application standards, the <b>Internet Message Access Protocol</b> (<b>IMAP</b>) is described in a series of <b>Request For Comment</b> (<b>RFC</b>) documents.</li>
        <li>IMAP is a more complicated protocol than the web protocol, so we won't be able to use the telnet command to fake the protocol.</li>
        <li>Here is a simple example showing what the client (C:) sends and how the server (S:) responds:</li>
        <li><CodePre>{`
C: A142 SELECT INBOX
S: * 172 EXISTS
S: * 1 RECENT
S: * OK [UNSEEN 12] Message 12 is first unseen
S: * OK [UIDVALIDITY 3857529045] UIDs valid
S: * OK [UIDNEXT 4392] Predicted next UID
S: * FLAGS (\\Answered \\Flagged \\Deleted \\Seen \\Draft)
S: * OK [PERMANENTFLAGS (\\Deleted \\Seen \\*)] Limited
S: A142 OK [READ-WRITE] SELECT completed
        `}</CodePre></li>
        <li>The messages that are sent by the client and server are not designed to be viewed by an end user so they are not particularly descriptive.</li>
        <li>These messages are precisely formatted and are sent in a precise order so that they can be generated and read by networked computer applications on each end of the connection.</li>
      </SubList></li>
      <li>Flow Control:<SubList>
        <li>When we looked at the Transport layer, we talked about the "window size", which was the amount of data that the Transport layer on the sending computer will send before pausing to wait for an acknowledgement.</li>
        <li><ImgComp src={require("./networking_pics/5.png")} style={{width:"80%"}}/></li>
        <li>In the figure above, we see a message broken into packets, with some of the packets sent and acknowledged.</li>
        <li>Six packets have been sent but not yet acknowledged and the sending Transport layer has reached the limit of the transmit window, so it is pausing until it receives an acknowledgement from the receiving computer's Transport layer.</li>
        <li>The receiving computer has received three packets, one of which is out of order. When we were looking at this example before from the point of view of the Transport layer, we ignored where the packets to be sent were coming from and where the packets were going to in the receiving computer.</li>
        <li>Now that we are looking at the Application layer, we can add the two applications that are the source and the destination of the stream of data.</li>
        <li>Let's assume the web browser has made a transport connection to the web server and has started downloading an image file. The web server has opened the image file and is sending the data from the file to its Transport layer as quickly as possible.</li>
        <li>The Transport layer must follow the rules of window size, so it can only send a certain amount of data at a time. When the window fills up, the web server is paused until the Transport layer on the destination computer has started to receive and acknowledge packets.</li>
        <li>As the Transport layer on the destination computer starts to receive packets, reconstruct the stream of data, and acknowledge packets, it delivers the reconstructed stream of packets to the web browser application display on the user's screen.</li>
        <li><ImgComp src={require("./networking_pics/6.png")} style={{width:"80%"}}/></li>
        <li>Sometimes on a slow connection you can see your browser "paint" pictures as the data is downloaded.</li>
        <li>If we redraw our picture of packets in the Transport layer, adding both of the application layers where the packets are in the middle of an image, now it looks like this:<SubList>
          <li>The web server is reading the image file (F) and sending it as a stream to the web browser as quickly as it can send the data.</li>
          <li>The source Transport layer has broken the stream into packets and used IP to send the packets to the destination computer.</li>
          <li>The Transport layer has sent six packets (S) and has stopped sending because it has reached its window size and paused the web server.</li>
          <li>Three of those six packets have made it to the Transport layer on the destination computer (R) and three of the packets are still making their way across the Internet (S).</li>
          <li>As the destination Transport layer pieces the stream back together, it both sends an acknowledgement (ACK) and delivers the data to the receiving application (the web browser).</li>
          <li>The web browser reconstructs the image (A) and displays it to the user as the data is received.</li>
        </SubList></li>
        <li>A key thing to notice in this picture is that the transport layers do not keep the packets for the entire file. They only retain packets that are in transit and unacknowledged.</li>
        <li>Once packets are acknowledged and delivered to the destination application, there is no reason for either the source or destination Transport layer to hold on to the packets.</li>
        <li>When the acknowledgment flows back from the destination computer to the source computer, the Transport layer on the source computer unpauses the web server application and the web server continues to read data from the file and send it to the source Transport layer for transmission.</li>
        <li>This ability to start and stop the sending application to make sure we send data as quickly as possible without sending data so fast that they clog up the Internet is called <b>flow control</b>.</li>
        <li>The applications are not responsible for flow control, they just try to send or receive data as quickly as possible and the two transport layers start and stop the applications as needed based on the speed and reliability of the network.</li>
      </SubList></li>
      <li>Writing Networked Applications:<SubList>
        <li>The applications which send and receive data over the network are written in one or more programming languages.</li>
        <li>As an example, the code below is all it takes in the Python programming language to make a connection to a web server and retrieve a document.</li>
        <li><CodePre language="python">{`
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('www.py4inf.com', 80))
mysock.send('GET http://www.py4inf.com/code/romeo.txt HTTP/1.0\\n\\n')

while True:
  data = mysock.recv(512)
  if ( len(data) < 1 ):
    break
  print data
mysock.close()
        `}</CodePre></li>
        <li>The key point is that it only takes ten lines of application code to make and use a network connection.</li>
        <li>This code is simple because the Transport, Internetwork, and Link layers so effectively solve the problems at each of their layers that applications using the network can ignore nearly all of the details of how the network is implemented.</li>
        <li>In the Python application, in this line of code <code>mysock.connect(('www.py4inf.com', 80))</code> we have specified that we are connecting to the application that is listening for incoming connections on port 80 on the remote computer <code>www.py4inf.com</code>.</li>
        <li>By choosing port 80 we are indicating that we want to connect to a World Wide Web server on that host and are expecting to communicate with that server using the HyperText Transport Protocol.</li>
      </SubList></li>  
    </ul>
    <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <ImgComp src={require("./networking_pics/7.png")} style={{width:"50%"}}/>
    </div>
  </div>

  <h2 id="secure_transport_layer">Secure Transport Layer</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <li>The Link, Internetwork, and Transport layers were focused on the efficient movement of data and solving the problems of a large-scale shared distributed network without worrying about the privacy of that data:<SubList>
        <li>In the early days of the Internet, networks were small and all of the routers were in secure locations. As long as each computer connected to the Internet protected itself from unwanted incoming connections, it was felt that there was no need to protect data from prying eyes while it was crossing the network.</li>
        <li>As the use of the Internet grew rapidly in the late 1980s and literally exploded when the Web became mainstream in 1994, security and privacy of network traffic became very important problems to solve.</li>
      </SubList></li>
      <li>There are two general approaches to securing network activity:<SubList>
        <li>The first makes sure that all of the network hardware (routers and links) is in physically secure locations so it is not possible for someone to sneak in and monitor traffic while it is crossing the Internet.</li>
        <li>While you might be able to ensure that some of the router operators adhered to strict security procedures and policies, sooner or later a mistake will be made.</li>
        <li>Once WiFi was added to the mix and your packets went over radio waves, a network attacker could just sit in a coffee shop and intercept packets as they passed through the air.</li>
        <li>Under these conditions, the only reasonable solution is to encrypt data in your computer before it is sent across its first physical link, and then decrypt the data in the destination computer after it arrives.</li>
        <li>Using this approach, we assume that an attacker can see all of the packets that you send, but they cannot decrypt the data that they have captured. </li>
      </SubList></li>
      <li>Two Kinds of Secrets:<SubList>
        <li>The traditional way to encrypt transmissions is using a shared secret (a password, a sentence, a number) that only the sending and receiving parties know. With the secret, it is easy to decrypt the received data, but if you received the data without possessing the secret, it would be effectively impossible to decrypt the message.</li>
        <li>It might seem like a good idea to distribute the shared secrets over the Internet, but if we assume that the attackers are monitoring and capturing all network traffic, they could also capture the unencrypted message that contained the shared secret.</li>
        <li>The solution to this problem came in the 1970s when the concept of <b>asymmetric key encryption</b> was developed. The idea of asymmetric key encryption is that one key is used to encrypt the message and another key is used to decrypt it. The computer that will be receiving the encrypted data chooses both the encryption key and decryption key. Then the encryption key is sent to the computer that will be sending the data. The sending computer encrypts the data and sends it across the network. The receiving computer uses the decryption key to decrypt the data.</li>
        <li>We call the encryption key the <b>public key</b> because it can be widely shared. We call the decryption key the <b>private key</b> because it never leaves the computer where it was created.</li>
      </SubList></li>
      <li>Secure Sockets Layer (SSL):<SubList>
        <li>Since network engineers decided to add security nearly 20 years after the Internet protocols were developed, it was important not to break any existing Internet protocols or architecture.</li>
        <li>Their solution was to add an optional partial layer between the Transport layer and the Application layer. They called this partial layer the <b>Secure Sockets Layer (SSL)</b> or <b>Transport Layer Security (TLS)</b>.</li>
        <li>When an application requested that the Transport layer make a connection to a remote host, it could request that the connection either be encrypted or unencrypted.</li>
        <li>If an encrypted connection was requested, the Transport layer encrypted the data before breaking the stream into packets. This meant that the Transport layer, Internetwork layer, and physical (link) layers could still perform exactly the same way whether the packets were encrypted or non-encrypted.</li>
        <li>The applications making the connections were also spared the details of how encryption and decryption worked. Since encryption was a simple and transparent addition to the Transport layer, there was no need to change the routers that operate at the Internetwork and Link layers.</li>
        <li>There was no need to change any Link layer hardware to make encryption work. And applications did not need to be modified except to request that a connection be encrypted when appropriate.</li>
      </SubList></li>
      <li>Encrypting Web Browser Traffic:<SubList>
        <li>Web browsers use the URL convention of replacing <code>http:</code> with <code>https:</code> to indicate that the browser is to communicate with the web server using the Secure Transport Layer instead of the unencrypted Transport layer.</li>
        <li>Your browser will usually show a lock icon in the address bar to let you know that you are communicating with a secure web site.</li>
        <li>There is a small overhead in setting up the <code>https</code> connections and a small cost to encrypt and decrypt the data that is being sent.</li>
        <li>Since <code>https</code> was slightly more costly, for a while it was used only for pages that contained passwords, bank account numbers, or other sensitive data. But over time as networks have become faster and the https implementations have gotten much more efficient, there is a trend toward encrypting all web server interactions whenever you are interacting with a web server where you have an account.</li>
        <li>The current trend is towards using https for all web traffic.</li>
      </SubList></li>
      <li>Certificates and Certificate Authorities:<SubList>
        <li>While public/private key encryption works to allow the distribution of encryption keys across insecure networks and the use of those keys to encrypt transmissions, there is still a problem of knowing if the public key that you have received when you connected to a server is really from the organization it claims to be from.</li>
        <li>Perhaps you think you are connecting to <code>www.amazon.com</code> but a rogue computer intercepts your traffic, claiming to be <code>www.amazon.com</code> and giving you a public key to use for encryption. If your web browser trusts the key, it will use the rogue computer's public key to encrypt your banking information and send it to the rogue computer.</li>
        <li>Since the rogue computer gave you the public key, it also has the corresponding private key and is able to decrypt and abscond with your banking information.</li>
        <li>So your computer needs to know who the key is actually coming from. This is achieved by sending you a public key that is digitally signed by a <b>Certificate Authority (CA)</b>.</li>
        <li>When your computer or browser is initially installed, it knows about a number of well-known certificate authorities.</li>
        <li>If your browser is given a public key that is signed by one of the well-known certificate authorities, it trusts the key and uses it to encrypt and send your data.</li>
        <li>If your computer receives a public key that is not signed by one of its trusted certificate authorities, it will warn you before sending your data using the key.</li>
        <li>If you see a warning message about an untrusted certificate, you should probably say "no" and figure out why your network traffic is not being routed to the server that you think it is going to before sending any sensitive data.</li>
      </SubList></li>
    </ul>
    <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <ImgComp src={require("./networking_pics/8.png")} style={{width:"50%"}}/>
    </div>
  </div>

  <h2 id="osi">The OSI Model</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={59}>
      <li>So far we have spent all of our time describing the four-layer model used to design and implement the TCP/IP protocols and applications that make up the Internet. However, the TCP/IP model is not the only model we can use to help us understand how networks work:<SubList>
        <li>The other model commonly used to make sense of network design is called the <b>Open System Interconnection (OSI)</b> model.</li>
        <li>In today's networked world, the OSI model and the TCP/IP model serve two different purposes.</li>
        <li>While TCP/IP is the most widely used network technology today, many different types of networks have been implemented and deployed over the past 50 years.</li>
      </SubList></li>
      <li>The OSI model has seven layers instead of the four layers of the TCP/IP model:<SubList numbered>
        <li><b>Physical:</b> deals with the physical attributes of the actual wired, wireless, fiber optic, or other connection that is used to transport data across a single link.</li>
        <li><b>Data Link:</b> concerned with how the systems using a physical link cooperate with one another. When data is broken into packets, the Data Link layer defines special sequences to indicate the beginning and end of each packet.</li>
        <li><b>Network:</b> deals with the global assignment of “routable” addresses to the various systems connected to the network. The Network layer governs how routers forward packets across multiple hops to get from their source to their destination.</li>
        <li><b>Transport:</b> The Transport layer in the OSI model manages packet loss and retransmission as well as flow control and window size.</li>
        <li><b>Session:</b> deals with "ports" so that a connecting client application can “find” the correct server application on a particular system.</li>
        <li><b>Presentation:</b> focuses on how data is represented and encoded for transmission across the network. The Presentation layer also handles data encryption and decryption.</li>
        <li><b>Application:</b> contains the applications themselves.</li>
      </SubList></li>
      <li>The design problems solved in the Physical and Data Link layers of the OSI model are addressed by the Link layer of the TCP/IP model.</li>
      <li>The Secure Sockets Layer (SSL) in the TCP/IP model corresponds to parts of the Session and Presentation layers in the OSI model.</li>
      <li>The TCP/IP Application Layer combines the non-security aspects of the OSI Presentation layer and the OSI Application layer.</li>
    </ul>
    <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={59}>
      <figure>
        <ImgComp src={require("./networking_pics/9.png")} style={{width:"70%"}}/>
        <figcaption>Comparing the TCP/IP model and the OSI model</figcaption>
      </figure>
    </div>
  </div>
</> 