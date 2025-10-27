import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { CodePre } from "../../articleRelatedStuff/Code";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";

export const title = "Data Structures And Algorithms Notes (Part 2)";
export const sourcesColor = {19: null, 20: null};

export const content = <>
<h1>Data Structures And Algorithms Notes (Part 2)</h1>

<h2 id="hashing">Hashing</h2>
<div className="content" data-source="20">
	<div style={{width:"49%", marginLeft:"0.5%", float: "left"}}>
		<ul>
			<li><u>Definition:</u><SubList>
				<li><b>Hashing</b> is a method for storing and retrieving records from a database.</li>
				<li>It lets you insert, delete, and search for records based on a search key value. When properly implemented, these operations can be performed in constant time.</li>
				<li>A properly tuned hash system typically looks at only one or two records for each search, insert, or delete operation.</li>
				<li>A hash system stores records in an array called a <b>hash table</b> (called <code>HT</code>).</li>
				<li>A position in the hash table is also known as a <b>slot</b>.</li>
			</SubList></li>
			<li>Basic understanding of how it works:<SubList>
				<li>Hashing works by performing a computation on a search key \(K\) in a way that is intended to identify the position in <code>HT</code> that contains the record with key \(K\).</li>
				<li>The function that does this calculation is called the <b>hash function</b>. Since hashing schemes place records in the table in whatever order satisfies the needs of the address calculation, records are not ordered by value.</li>
				<li>The number of slots in hash table <code>HT</code> will be denoted by the variable \(M\) with slots numbered from \(0\) to \(M-1\).</li>
				<li>The goal for a hashing system is to arrange things such that, for any key value \(K\) and some hash function \(h\), \(i=h(K)\) is a slot in the table such that \(0 \le i \lt M\), and we have the key of the record stored at <code>HT[i]</code> equal to \(K\).</li>
			</SubList></li>
			<li>Hashing is not good for applications where multiple records with the same key value are permitted and also not a good method for answering range searches.</li>
			<li>Hashing is most appropriate for answering the question: <i>"What record, if any, has key value \(K\)?"</i>.</li>
			<li>In most applications, there are many more values in the key range than there are slots in the hash table.</li>
			<li>In most applications, there are many more values in the key range than there are slots in the hash table:<SubList>
				<li>Suppose the key can take any value in the range 0 to 65,535, and that we expect to store approximately 1000 records at any given time.</li>
				<li>It is impractical in this situation to use a hash table with 65,536 slots, because then the vast majority of the slots would be left empty. We must devise a hash function that allows us to store the records in a much smaller table.</li>
				<li>Because the key range is larger than the size of the table, at least some of the slots must be mapped to from multiple key values.</li>
				<li>Given a hash function h and two keys \(k1\) and \(k2\), if \(h(k1)=β=h(k2)\) where \(β\) is a slot in the table, then we say that \(k1\) and \(k2\) have a <b>collision</b> at slot \(β\) under hash function \(h\).</li>
			</SubList></li>
			<li>Finding a record with key value K in a database organized by hashing follows a two-step procedure:<SubList numbered={true}>
				<li>Compute the table location \(h(K)\).</li>
				<li>Starting with slot \(h(K)\), locate the record containing key \(K\) using (if necessary) a <b>collision resolution policy</b>.</li>
			</SubList></li>
			<li>We would like to pick a hash function that maps keys to slots in a way that makes each slot in the hash table have equal probablility of being filled for the actual set keys being used. Unfortunately, we normally have no control over the distribution of key values for the actual records in a given database or collection.</li>
		</ul>
		<h3>Sample Hash Function</h3>
		<ul>
			<li><b>Simple Mod Function:</b><SubList>
				<li>Consider the following hash function used to hash integers to a table of sixteen slots:</li>
				<li><CodePre language="java">{`
int h(int x) {
	return x % 16;
}
				`}</CodePre></li>
				<li>Recall that the values 0 to 15 can be represented with four bits (i.e., 0000 to 1111). The value returned by this hash function depends solely on the least significant four bits of the key.</li>
				<li>This example shows that the size of the table \(M\) can have a big effect on the performance of a hash system because the table size is typically used as the modulus to ensure that the hash function produces a number in the range \(0\) to \(M-1\).</li>
			</SubList></li>
			<li><b>Binning:</b><SubList>
				<li>Say we are given keys in the range 0 to 999, and have a hash table of size 10. In this case, a possible hash function might simply divide the key value by 100 so hash function "bins" the first 100 keys to the first slot, the next 100 keys to the second slot, and so on.</li>
				<li>In general with binning we store the record with key value \(i\) at array position \(\frac{"{i}{X}"}\) for some value \(X\) (using integer division). A problem with Binning is that we have to know the key range so that we can figure out what value to use for \(X\).</li>
				<li>If we pick too big a value for the key range and the actual key values are all relatively small, then most records will hash to slot 0.</li>
				<li>We could take the result of any binning computation and then mod by the table size to be safe. So if we have keys that are bigger than 999 when dividing by 100, we can still make sure that the result is in the range 0 to 9 with a mod by 10 step at the end.</li>
				<li>The mod function, for a power of two, looks at the low-order bits, while binning looks at the high-order bits.</li>
			</SubList></li>
			<li><b>The Mid-Square Method:</b><SubList>
				<li><b>Mid-square method:</b> The key value is squared, and some number of bits from the middle of the resulting value are extracted as the hash code.</li>
				<li>The mid-square method squares the key value, and then takes out the middle \(r\) bits of the result, giving a value in the range \(0\) to \(2^{"{r-1}"}\).</li>
				<li>Consider records whose keys are 4-digit numbers in base 10. The goal is to hash these key values to a table of size 100 (i.e., a range of 0 to 99). This range is equivalent to two digits in base 10. That is, \(r=2\).</li>
				<li>If the input is the number 4567, squaring yields an 8-digit number, 20857489. The middle two digits of this result are 57. All digits of the original key value (equivalently, all bits when the number is viewed in binary) contribute to the middle two digits of the squared value.</li>
				<li>Thus, the result is not dominated by the distribution of the bottom digit or the top digit of the original key value.</li>
				<li>Of course, if the key values all tend to be small numbers, then their squares will only affect the low-order digits of the hash value.</li>
			</SubList></li>
			<li>A Simple Hash Function for Strings:<SubList>
				<li>We start with a simple summation function:</li>
				<li><CodePre language="java">{`
int sascii(String x, int M) {
	char ch[];
	ch = x.toCharArray();

	int i, sum;
	for (sum=0, i=0; i &lt; x.length(); i++) {
		sum += ch[i];
	}
	return sum % M;
}
				`}</CodePre></li>
				<li>If the hash table size \(M\) is small compared to the resulting summations, then this hash function should do a good job of distributing strings evenly among the hash table slots, because it gives equal weight to all characters in the string.</li>
				<li>This is an example of the <b>folding method</b>, a method that  breaks the string into pieces, converts the letter(s) to an integer value, and summing up the pieces.</li>
				<li>If the sum is not sufficiently large, then the modulus operator will yield a poor distribution. <u>Example:</u><SubList>
					<li>The ASCII value for 'A' is 65 and 'Z' is 90, sum will always be in the range 650 to 900 for a string of ten upper case letters.</li>
					<li>For a hash table of size 100 or less, a reasonable distribution results.</li>
					<li>For a hash table of size 1000, the distribution is terrible because only slots 650 to 900 can possibly be the home slot for some key value, and the values are not evenly distributed even within those slots.</li>
				</SubList></li>
			</SubList></li>
			<li><b>String Folding:</b><SubList>
				<li>This function processes the string four bytes at a time, and interprets each of the four-byte chunks as a single long integer value:</li>
				<li><CodePre language="java">{`
// Use folding on a string, summed 4 bytes at a time
int sfold(String s, int M) {
  long sum = 0, mul = 1;
  for (int i = 0; i &lt; s.length(); i++) {
	mul = (i % 4 == 0) ? 1 : mul * 256;
	sum += s.charAt(i) * mul;
  }
  //"aaaa" in integer form:
  //97 + (97*256) + (97*256*256) + (97*256*256*256)
  return (int)(Math.abs(sum) % M);
}
				`}</CodePre></li>
				<li>The integer values for the four-byte chunks are added together. In the end, the resulting sum is converted to the range \(0\) to \(M-1\) using the modulus operator.</li>
				<li>If the string "aaaabbbb" is passed to <code>sfold</code>, then the first four bytes ("aaaa") will be interpreted as the integer value 1,633,771,873, and the next four bytes ("bbbb") will be interpreted as the integer value 1,650,614,882. Their sum is 3,284,386,755 (when treated as an unsigned integer).</li>
				<li>For any sufficiently long string, the sum for the integer quantities will typically cause a 32-bit integer to overflow (thus losing some of the high-order bits) because the resulting values are so large. But this causes no problems when the goal is to compute a hash function.</li>
				<li>The reason that hashing by summing the integer representation of four letters at a time is superior to summing one letter at a time is because the resulting values being summed have a bigger range. This still only works well for strings long enough (say at least 7-12 letters), but the original method would not work well for short strings either.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Collision Resolution Techniques</h3>
		<ul>
			<li>Collision resolution techniques can be broken into two classes: <b>open hashing</b> (also called <b>separate chaining</b>) and <b>closed hashing</b> (also called <b>open addressing</b>).</li>
			<li>The difference between the two has to do with whether collisions are stored outside the table (open hashing), or whether collisions result in storing one of the records at another slot in the table (closed hashing).</li>
			<li><b>Open hashing:</b><SubList>
				<li>The simplest form of open hashing defines each slot in the hash table to be the head of a linked list.</li>
				<li>All records that hash to a particular slot are placed on that slot's linked list.</li>
				<li>Ordering the list by key value provides an advantage in the case of an unsuccessful search, because we know to stop searching the list once we encounter a key that is greater than the one being searched for.</li>
				<li>Given a table of size \(M\) storing \(N\) records, the hash function will (ideally) spread the records evenly among the \(M\) positions in the table, yielding on average \(N/M\) records for each list.</li>
				<li>The average cost for hashing should be \(\Theta(1)\). However, if clustering causes many records to hash to only a few of the slots, then the cost to access a record will be much higher because many elements on the linked list must be searched.</li>
			</SubList></li>
			<li><b>Bucket Hashing:</b><SubList>
				<li>One implementation for closed hashing groups hash table slots into <b>buckets</b>. The \(M\) slots of the hash table are divided into \(B\) buckets, with each bucket consisting of \(M/B\) slots.</li>
				<li>If a bucket is entirely full, then the record is stored in an <i>overflow bucket</i> of infinite capacity at the end of the table. All buckets share the same overflow bucket.</li>
				<li>A good implementation will use a hash function that distributes the records evenly among the buckets so that as few records as possible go into the overflow bucket.</li>
				<li>When searching for a record, the first step is to hash the key to determine which bucket should contain the record. The records in this bucket are then searched. If the desired key value is not found and the bucket still has free slots, then the search is complete. If the bucket is full, then it is possible that the desired record is stored in the overflow bucket.</li>
				<li>A simple variation on bucket hashing is to hash a key value to some slot in the hash table as though bucketing were not being used. If the home position is full, then we search through the rest of the bucket to find an empty slot. If all slots in this bucket are full, then the record is assigned to the overflow bucket.</li>
			</SubList></li>
			<li><b>Simple linear probing:</b><SubList>
				<li>We can view any collision resolution method as generating a sequence of hash table slots that can potentially hold the record. The first slot in the sequence will be the home position for the key. If the home position is occupied, then the collision resolution policy goes to the next slot in the sequence. If this is occupied as well, then another slot must be found, and so on. This sequence of slots is known as the <b>probe sequence</b>, and it is generated by some <b>probe function</b>.</li>
				<li><CodePre language="java">{`
// Insert e into hash table HT
void hashInsert(Key k, Elem e) {
	int home;                     // Home position for e
	int pos = home = h(k);        // Init probe sequence
	for (int i=1; EMPTYKEY != (HT[pos]).key(); i++) {
		if (k == HT[pos].key()) {
			println("Duplicates not allowed");
			return;
		}
		pos = (home + p(k, i)) % M; // probe
	}
	HT[pos] = e;
}
				`}</CodePre></li>
				<li>Function <code>p</code> has two parameters, the key \(k\) and a count \(i\) of where in the probe sequence we wish to be. That is, to get the first position in the probe sequence after the home slot for key \(K\), we call \(p(K,1)\). For the next slot in the probe sequence, call \(p(K,2)\).</li>
				<li>The simplest approach to collision resolution is simply to move down the table from the home slot until a free slot is found. This is known as <b>linear probing</b>. The probe function for simple linear probing is \(p(K,i)=i\). That is, the \(i\)th offset on the probe sequence is just \(i\), meaning that the \(i\)th step is simply to move down \(i\) slots in the table.</li>
				<li>The ideal behavior for a collision resolution mechanism is that each empty slot in the table will have equal probability of receiving the next record inserted (assuming that every slot in the table has equal probability of being hashed to initially).</li>
				<li>Linear probing is one of the worst collision resolution methods. The tendency of linear probing to cluster items together is known as <b>primary clustering</b>. Small clusters tend to merge into big clusters, making the problem worse</li>
			</SubList></li>
			<li><b>Linear Probing by Steps:</b><SubList>
				<li>How can we avoid primary clustering? One possible improvement might be to use linear probing, but to skip slots by some constant \(c\) (other than 1). This would make the probe function \(p(K,i)=ci\), and so the ith slot in the probe sequence will be \((h(K)+ic) \mod M\).</li>
				<li>Constant \(c\) must be relatively prime to \(M\) to generate a linear probing sequence that visits all slots in the table (that is, \(c\) and \(M\) must share no factors). For a hash table of size \(M=10\), if \(c\) is any one of 1, 3, 7, or 9, then the probe sequence will visit all slots for any key.</li>
				<li>Consider the situation where \(c=2\) and we wish to insert a record with key \(k1\) such that \(h(k1)=3\). The probe sequence for \(k1\) is 3, 5, 7, 9, and so on. If another key \(k2\) has home position at slot 5, then its probe sequence will be 5, 7, 9, and so on. The probe sequences of \(k1\) and \(k2\) are linked together in a manner that contributes to clustering. In other words, linear probing with a value of \(c \gt 1\) does not solve the problem of primary clustering.</li>
			</SubList></li>
			<li><b>Pseudo-Random Probing:</b><SubList>
				<li>In <b>pseudo-random probing</b>, the \(i\)th slot in the probe sequence is \((h(K)+r_i) \mod M\) where \(r_i\) is the \(i\)th value in a random permutation of the numbers from 1 to \(M-1\).</li>
				<li>All inserts and searches must use the same sequence of random numbers. The probe function would be \(p(K,i)=Permutation[i]\).</li>
			</SubList></li>
			<li><b>Quadratic Probing:</b><SubList>
				<li>The probe function is some quadratic function \(p(K,i)=c_1i^2+c_2i+c_3\) for some choice of constants \(c_1\), \(c_2\), and \(c_3\).</li>
				<li>For many hash table sizes, this probe function will cycle through a relatively small number of slots.</li>
				<li>Fortunately, it is possible to get good results from quadratic probing at low cost. The right combination of probe function and table size will visit many slots in the table.</li>
			</SubList></li>
			<li><b>Double Hashing:</b><SubList>
				<li>The probe sequences generated by pseudo-random and quadratic probing (for example) are entirely a function of the home position, not the original key value.</li>
				<li>If two keys hash to the same home position, however, then they will always follow the same probe sequence for every collision resolution method that we have seen so far.</li>
				<li>If the hash function generates a cluster at a particular home position, then the cluster remains under pseudo-random and quadratic probing. This problem is called <b>secondary clustering</b>.</li>
				<li>To avoid secondary clustering, we need to have the probe sequence make use of the original key value. A simple technique for doing this is to return to linear probing by a constant step size for the probe function, but to have that constant be determined by a second hash function, \(h_2\). Thus, the probe sequence would be of the form \(p(K,i)=i \times h_2(K)\). This method is called <b>double hashing</b>.</li>
				<li>A good implementation should ensure that all of the probe sequence constants are relatively prime to the table size \(M\).</li>
			</SubList></li>
			<li>Analysis of Closed Hashing:<SubList>
				<li>Define the <b>load factor</b> for the table as \(α=N/M\), where \(N\) is the number of records currently in the table.</li>
				<li>An estimate of the expected cost for an insertion (or an unsuccessful search) can be derived analytically as a function of \(α\) in the case where we assume that the probe sequence follows a random permutation of the slots in the hash table.</li>
				<li>Assuming that every slot in the table has equal probability of being the home slot for the next record, the probability of finding the home position occupied is \(α\).</li>
				<li>The probability of finding both the home position occupied and the next slot on the probe sequence occupied is \(\frac{"{N}"}{"{M}"} \times \frac{"{N-1}"}{"{M-1}"}\).</li>
				<li>The probability of \(i\) collisions is \(\frac{"{N}"}{"{M}"} \times \frac{"{N-1}"}{"{M-1}"} \times \frac{"{N-i+1}"}{"{M-i+1}"}\). If \(N\) and \(M\) are large, then this is approximately \((N/M)^i\).</li>
				<li>The expected number of probes:</li>
				<MathStuff>$${`
					1+\\sum^\\infty_{i=1} \\left( \\frac{N}{M} \\right)^i = \\frac{1}{1-\\alpha}
				`}$$</MathStuff>
			</SubList></li>
		</ul>
		<h3>Deletion</h3>
		<ul>
			<li>When deleting records from a hash table, there are two important considerations:<SubList>
				<li>Deleting a record must not hinder later searches. In other words, the search process must still pass through the newly emptied slot to reach records whose probe sequence passed through this slot. Thus, the delete process cannot simply mark the slot as empty, because this will isolate records further down the probe sequence.</li>
				<li>We do not want to make positions in the hash table unusable because of deletion. The freed slot should be available to a future insertion.</li>
			</SubList></li>
			<li>Both of these problems can be resolved by placing a special mark in place of the deleted record, called a <b>tombstone</b>:<SubList>
				<li>The <b>tombstone</b> indicates that a record once occupied the slot but does so no longer.</li>
				<li>If a tombstone is encountered when searching along a probe sequence, the search procedure continues with the search.</li>
				<li>When a tombstone is encountered during insertion, that slot can be used to store the new record. However, to avoid inserting duplicate keys, it will still be necessary for the search procedure to follow the probe sequence until a truly empty position has been found, simply to verify that a duplicate is not in the table.</li>
			</SubList></li>
			<li>After a series of intermixed insertion and deletion operations, some slots will contain tombstones. This will tend to lengthen the average distance from a record's home position to the record. Two possible solutions are:<SubList>
				<li>Do a local reorganization upon deletion to try to shorten the average path length.</li>
				<li>Periodically rehash the table by reinserting all records into a new hash table. Not only will this remove the tombstones, but it also provides an opportunity to place the most frequently accessed records into their home positions.</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="memory_management">Memory Management</h2>
<div className="content" data-source={20}>
	<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
		<ul>
				<li>Memory manager:<SubList>
						<li><b>Memory pool:</b> Memory that is logically viewed as an array of memory positions. Memory requests are issued for some amount of space in the pool.</li>
						<li>A <b>memory manager</b> has the job of finding a contiguous block of locations of at least the requested size from somewhere within the memory pool. Honoring such a request is called <b>memory allocation</b>.</li>
						<li>The memory manager will typically return some piece of information that the requestor can hold on to so that later it can recover the data that were just stored by the memory manager. This piece of information is called a <b>handle</b>.</li>
						<li>At some point, space that has been requested might no longer be needed, and this space can be returned to the memory manager so that it can be reused. This is called a <b>memory deallocation</b>.</li>
						<li><CodePre language="java">{"\
// Memory Manager abstract class\n\
public interface MemManager {\n\
// Store a record and return a handle to it\n\
public MemHandle insert(byte[] info);\n\
\n\
// Release the space associated with a record\n\
public void release(MemHandle h);\n\
\n\
// Get back a copy of a stored record\n\
public byte[] getRecord(MemHandle h);\n\
}\n\
						"}</CodePre></li>
						<li>The user of the <code>MemManager</code> ADT provides a pointer (in parameter info) to space that holds some message to be stored or retrieved.</li>
						<li>The fundamental idea is that the client gives messages to the memory manager for safe keeping. The memory manager returns a receipt for the message in the form of a <code>MemHandle</code> object. The client holds the <code>MemHandle</code> until it wishes to get the message back.</li>
				</SubList></li>
				<li>Dynamic Storage Allocation:<SubList>
						<li>For the purpose of <b>dynamic storage allocation</b>, we view memory as a single array broken into a series of variable-size blocks, where some of the blocks are <i>free blocks</i> and some are <i>reserved blocks</i> (already allocated).</li>
						<li>The free blocks are linked together to form a freelist used for servicing future memory requests.</li>
						<li>When a memory request is received by the memory manager, some block on the freelist must be found that is large enough to service the request. If no such block is found, then the memory manager must resort to a <b>failure policy</b> (which may include expanding the memory pool, reorganizing the memory pool, etc.).</li>
				</SubList></li>
				<li><a href='https://www.geeksforgeeks.org/difference-between-static-and-dynamic-memory-allocation-in-c/'>In the <b>static memory allocation</b>, variables get allocated permanently, till the program executes or function call finishes. Static Memory Allocation is done before program execution.</a></li>
				<li>Two types of fragmentation:<SubList>
						<li>External fragmentation occurs when a series of memory requests result in lots of small free blocks, no one of which is useful for servicing typical requests.</li>
						<li>Internal fragmentation occurs when more than \(m\) words are allocated to a request for \(m\) words, wasting free storage.</li>
						<li><ImgComp src={"/articlePics/operating_systems/4.PNG"} style={{width: "80%"}}/></li>
				</SubList></li>
				<li><b>Sequential-Fit Methods:</b><SubList>
						<li>Sequential-fit methods attempt to find a "good" block to service a storage request. Let's assume that the free blocks are organized into a doubly linked list.</li>
						<li>A simple linked-list implementation can be used, where each node of the linked list contains a pointer to a single free block in the memory pool. This is fine if there is space available for the linked list itself, separate from the memory pool.</li>
						<li>Another approach to storing the freelist is more complicated but saves space. Because the free space is free, it can be used by the memory manager to help it do its job; that is, the memory manager temporarily "borrows" space within the free blocks to maintain its doubly linked list.</li>
						<li>To do so, each unallocated block must be large enough to hold these pointers. In addition, it is usually worthwhile to let the memory manager add a few bytes of space to each reserved block for its own purposes.</li>
						<li><figure>
								<ImgComp src={"/articlePics/operating_systems/5.png"} style={{width: "80%"}}/>
								<figcaption>(a) A <b>free block</b> contains the tag bit field, the block size field, and two pointers for the freelist. The end of the block contains a second tag field and a second block size field.<br/>(b) A <b>reserved block</b> with a tag bit field and a block size field at the beginning of the block, and a second tag field at the end of the block.</figcaption>
						</figure></li>
						<li>When a block \(F\) is freed, it must be merged into the freelist. The memory manager first checks the unit of memory immediately preceding block \(F\) to see if the preceding block (call it \(P\)) is also free. If it is, then the memory unit before \(P\)'s tag bit stores the size of \(P\), thus indicating the position for the beginning of the block in memory. \(P\) can then simply have its size extended to include block \(F\).</li>
						<li>We also check the bit following the end of block \(F\). If this bit indicates that the following block (call it \(S\)) is free, then \(S\) is removed from the freelist and the size of \(F\) is extended appropriately.</li>
				</SubList></li>
				<li><u>Selecting a suitable free block:</u><SubList>
						<li>Assume that we have a memory pool with 200 units of storage. After some series of allocation requests and releases, we have reached a point where there are four free blocks on the freelist of sizes 25, 35, 32, and 45 (in that order). Assume that a request is made for 30 units of storage.</li>
						<li>The simplest method for selecting a block would be to move down the free block list until a block of size at least 30 is found.</li>
						<li>Any remaining space in this block is left on the freelist. If we begin at the beginning of the list and work down to the first free block at least as large as 30, we select the block of size 35. 30 units of storage will be allocated, leaving a free block with 5 units of space. Because this approach selects the first block with enough space, it is called <b>first fit</b>.</li>
						<li>On the next search, instead of always beginning at the head of the freelist, remember the last position reached in the previous search and start from there. When the end of the freelist is reached, search begins again at the head of the freelist.</li>
						<li>This modification reduces the number of unnecessary searches through small blocks that were passed over by previous requests.</li>
						<li>A strategy that avoids using large blocks unnecessarily is called <b>best fit</b>. Best fit looks at the entire list and picks the smallest block that is at least as large as the request .</li>
						<li>In our example, the best fit for a request of 30 units is the block of size 32, leaving a remainder of size 2.</li>
						<li>A strategy contrary to best fit might make sense because it tends to minimize the effects of external fragmentation. This is called <b>worst fit</b>, which always allocates the largest block on the list hoping that the remainder of the block will be useful for servicing a future request.</li>
						<li>In our example, the worst fit is the block of size 45, leaving a remainder of size 15.</li>
						<li>If the requests are of widely ranging size, best fit might work well. If the requests tend to be of similar size, with rare large and small requests, first or worst fit might work well.</li>
				</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
		<ul>
				<li><b>Buddy Methods:</b><SubList>
						<li>Sequential-fit methods rely on a linked list of free blocks, which must be searched for a suitable block at each memory request. Thus, the time to find a suitable free block would be \(\Theta(n)\) in the worst case for a freelist containing \(n\) blocks.</li>
						<li>We must either use additional space for the linked list, or use space within the memory pool to support the memory manager operations. In the second option, both free and reserved blocks require tag and size fields. Fields in free blocks do not cost any space (because they are stored in memory that is not otherwise being used), but fields in reserved blocks create additional overhead.</li>
						<li>The <b>buddy system</b> assumes that memory is of size \(2^N\) for some integer \(N\). Both free and reserved blocks will always be of size \(2^k\) for \(k \lt N\). At any given time, there might be both free and reserved blocks of various sizes.</li>
						<li>When a request comes in for \(m\) words, we first determine the smallest value of \(k\) such that \(2^k\ge m\). A block of size \(2k\) is selected from the free list for that block size if one exists. The buddy system does not worry about internal fragmentation: The entire block of size \(2k\) is allocated.</li>
						<li>If no block of size \(2^k\) exists, the next larger block is located. This block is split in half (repeatedly if necessary) until the desired block of size \(2^k\) is created. Any other blocks generated as a by-product of this splitting process are placed on the appropriate freelists.</li>
						<li><a href='https://en.wikipedia.org/wiki/Buddy_memory_allocation'>If memory is to be freed:</a><SubList numbered={true}>
								<li>Free the block of memory</li>
								<li>Look at the neighboring block - is it free too?</li>
								<li>If it is, combine the two, and go back to step 2 and repeat this process until either the upper limit is reached (all memory is freed), or until a non-free neighbour block is encountered.</li>
						</SubList></li>
				</SubList></li>
				<li>If the application is sufficiently complex, it might be desirable to break available memory into several memory "zones", where each zone has a different memory management scheme.</li>
				<li>Another approach to memory management is to impose a standard size on all memory requests.</li>
				<li>In some situations, there might be nothing that can be done: There simply might not be enough free memory to service the request, and the application may require that the request be serviced immediately:<SubList>
						<li>In many cases there are alternatives to simply returning an error. The possible options are referred to collectively as <b>failure policies</b>.</li>
						<li>In some cases, there might be sufficient free memory to satisfy the request, but it is scattered among small blocks. In this case, it might be possible to compact memory by moving the reserved blocks around so that the free space is collected into a single block.</li>
						<li>A problem with this approach is that the application must somehow be able to deal with the fact that all of its data have now been moved to different locations. If the application program relies on the absolute positions of the data in any way, this would be disastrous. One approach for dealing with this problem is the use of <b>handles</b>.</li>
						<li>A handle is a second level of indirection to a memory location. The memory allocation routine does not return a pointer to the block of storage, but rather a pointer to a variable that in turn points to the storage. This variable is the handle. The handle never moves its position, but the position of the block might be moved and the value of the handle updated.</li>
						<li>Another failure policy that might work in some applications is to defer the memory request until sufficient memory becomes available. While such a delay might be annoying to the user, it is better than halting the entire system. The assumption here is that other processes will eventually terminate, freeing memory.</li>
						<li>Another option might be to allocate more memory to the memory manager. In a C++ program that implements its own memory manager, it might be possible to get more memory from the system-level <code>new</code> operator.</li>
						<li>The last failure policy that we will consider is <b>garbage collection</b>:<SubList>
								<li><CodePre language="cpp">
Integer p = new Integer[5];
Integer q = new Integer[10];
p = q;
								</CodePre></li>
								<li>This would be considered bad form because the original space allocated to p is lost as a result of the third assignment. This space cannot be used again by the program. Such lost memory is referred to as <b>garbage</b>, also known as a <b>memory leak</b>.</li>
								<li>In LISP, Garbage collection consists of examining the managed memory pool to determine which parts are still being used and which parts are garbage. In particular, a list is kept of all program variables, and any memory locations not reachable from one of these variables are considered to be garbage. When the garbage collector executes, all unused memory locations are placed in free store for future access.</li>
								<li>It has the disadvantage, from a user's point of view, that every so often the system must halt while it performs garbage collection.</li>
								<li>As in LISP, it is common practice in Java to allocate dynamic memory as needed, and to later drop all references to that memory. The garbage collector is responsible for reclaiming such unused space as necessary. This might require extra time when running the program.</li>
								<li><b>Reference count algorithm:</b> Here, every dynamically allocated memory block includes space for a count field. Whenever a pointer is directed to a memory block, the reference count is increased. Whenever a pointer is directed away from a memory block, the reference count is decreased. If the count ever becomes zero, then the memory block is considered garbage and is immediately placed in free store.</li>
								<li>This approach has the advantage that it does not require an explicit garbage collection phase, because information is put in free store immediately when it becomes garbage. The disadvantage is when garbage contains cycles.</li>
								<li><b>Mark/sweep algorithm:</b> Each memory object needs only a single mark bit rather than a reference counter field. When free store is exhausted, a separate garbage collection phase takes place as follows:<SubList numbered={true}>
										<li>Clear all mark bits</li>
										<li>Perform depth-first search (DFS) following pointers from each variable on the system's list of variables. Each memory element encountered during the DFS has its mark bit turned on.</li>
										<li>A "sweep" is made through the memory pool, visiting all elements. Unmarked elements are considered garbage and placed in free store.</li>
								</SubList></li>
								<li>DFS is a recursive algorithm: Either it must be implemented recursively, in which case the compiler's runtime system maintains a stack, or else the memory manager can maintain its own stack.</li>
								<li>A clever technique allows DFS to be performed without requiring additional space for a stack.  At each step deeper into the traversal, instead of storing a pointer on the stack, we "borrow" the pointer being followed. This pointer is set to point back to the node we just came from in the previous step.</li>
								<li>Each borrowed pointer stores an additional bit to tell us whether we came down the left branch or the right branch of the link node being pointed to. At any given instant we have passed down only one path from the root, and we can follow the trail of pointers back up.</li>
								<li>As we return (equivalent to popping the recursion stack), we set the pointer back to its original position so as to return the structure to its original condition. This is known as the <b>Deutsch-Schorr-Waite garbage collection algorithm</b>.</li>
						</SubList></li>
				</SubList></li>
		</ul>
	</div>
</div>

<h2 id="graphs">Graphs</h2>
<div className="content" data-source="20">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<ul>
			<li><u>Terminologies:</u><SubList>
				<li>A graph \(G = (V, E)\) consists of a set of vertices \(V\) and a set of edges \(E\), such that each edge in \(E\) is a connection between a pair of vertices in \(V\).</li>
				<li>The number
				of vertices is written \(|V|\), and the number of edges is written \(|E|\). \(|E|\) can range from zero to a maximum of \(|V|^2 - |V|\). </li>
				<li>A graph with relatively few edges is called <b>sparse</b>, while a graph with many edges is called dense. A graph containing all possible edges is said to be <b>complete</b>.</li>
				<li>A graph with edges directed from one vertex to another is called a <b>directed graph</b> or <b>digraph</b>. A graph whose edges are not directed is called an <b>undirected graph</b>.</li>
				<li>A graph with labels associated with its vertices is called a <b>labeled graph</b>.</li>
				<li>Two vertices are adjacent if they are joined by an <b>edge</b>. Such vertices are also called <b>neighbors</b>.</li>
				<li>An edge connecting Vertices \(U\) and \(V\) is written \((U, V)\). Such an edge is said to be incident on Vertices \(U\) and \(V\). Associated with each edge may be a cost or <b>weight</b>. Graphs whose edges have weights are said to be <b>weighted</b>.</li>
				<li><figure style={{width:"70%"}}><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/28.PNG"}/><figcaption> (a) A graph. (b) A directed graph (digraph). (c) A labeled (directed) graph with weights associated with the edges.</figcaption></figure></li>
				<li>In a directed graph, the <b>out degree</b> for a vertex is the number of neighbors adjacent from it (or the number of edges going out from it), while the <b>in degree</b> is the number of neighbors adjacent to it (or the number of edges coming in to it).</li>
				<li>A sequence of vertices \(v_1, v_2, \ldots, v_n\) forms a <b>path</b> of length \(n - 1\) if there exist edges from \(v_i\) to \(v_i+1\) for \(1 ≤ i &lt; n\). A path is <b>simple</b> if all vertices on the path are distinct. The <b>length</b> of a path is the number of edges it contains.</li>
				<li>A <b>cycle</b> is a path of length three or more that connects some vertex \(v_1\) to itself. A cycle is <b>simple</b> if the path is simple, except for the first and last vertices being the same.</li>
				<li>A <b>subgraph \(S\)</b> is formed from graph \(G\) by selecting a subset \(V_s\) of \(G\)'s vertices and a subset \(E_s\) of \(G\)'s edges such that for every edge \(e ∈ E_s\), both vertices of \(e\) are in \(V_s\). Any subgraph of \(V\) where all vertices in the graph connect to all other vertices in the subgraph is called a <b>clique</b>.</li>
				<li>An undirected graph is <b>connected</b> if there is at least one path from any vertex
					to any other.</li>
				<li><figure style={{width:"50%"}}>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/29.PNG"}/>
					<figcaption> An undirected graph with three connected components. Vertices 0, 1, 2, 3, and 4 form one connected component. Vertices 5 and 6 form a second connected component. Vertex 7 by itself forms a third connected component.</figcaption>
				</figure></li>
				<li>The maximally connected subgraphs of an undirected graph are called <b>connected components</b>.</li>
				<li>A graph without cycles is called an <b>acyclic graph</b>.</li>
				<li className="research">A <b>free tree</b> is a connected, undirected graph with no simple cycles. An equivalent definition is that a free tree is connected and has \(|V| - 1\) edges.</li>
			</SubList></li>
			<li>Representating graphs:<SubList>
				<li>The <b>adjacency matrix</b> for a graph is a \(|V| \times |V|\) array.</li>
				<li>Assume that |V| = n and that the vertices are labeled from \(v0\) through \(v_{"{n-1}"}\). Row \(i\) of the adjacency matrix contains entries for Vertex \(v_i\).</li>
				<li>Column \(j\) in row \(i\) is marked if there is an edge from \(v_i\) to \(v_j\) and is not marked otherwise.  Thus, the adjacency matrix requires one bit at each position.</li>
				<li>Alternatively, if we wish to associate a number with each edge, such as the weight or distance between two vertices, then each matrix position must store that number.</li>
				<li>In either case, the space requirements for the adjacency matrix are \(\Theta(|V|^2)\).</li>
				<li>The second common representation for graphs is the <b>adjacency list</b>. The adjacency list is an array of linked lists. The array is \(|V|\) items long, with position \(i\) storing a pointer to the linked list of edges for Vertex \(v_i\). </li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/30.PNG"}/>
					<figcaption>(a) A directed graph. (b) The adjacency matrix for the graph of (a). (c) The adjacency list for the graph of (a).</figcaption>
				</figure></li>
				<li>The storage requirements for the adjacency list depend on both the number of
					edges and the number of vertices in the graph. There must be an array entry for
					each vertex (even if the vertex is not adjacent to any other vertex and thus has no
					elements on its linked list), and each edge must appear on one of the lists. Thus,
					the cost is \(\Theta(|V| + |E|)\).</li>
				<li>The adjacency list stores information only for those edges that actually appear in the graph, while the adjacency matrix requires space for each potential edge, whether it exists or not.</li>
				<li>However, the adjacency matrix requires no overhead for pointers, which can be a substantial cost, especially if the only information stored for an edge is one bit to indicate its existence.</li>
				<li>As the graph becomes denser, the adjacency matrix becomes relatively more space efficient. Sparse graphs are likely to have their adjacency list representation be more space efficient.</li>
			</SubList></li>
			<li>Graph ADT:<SubList>
				<li>Before showing the adjacency matrix and the adjacency list implementations. We will begin with an interface defining an ADT for graphs that a given implementation must meet:</li>
				<li><CodePre language="java">{`
interface Graph { // Graph class ADT
	// Initialize the graph with some number of vertices
	void init(int n);
	// Return the number of vertices
	int nodeCount();
	// Return the current number of edges
	int edgeCount();
	// Get the value of node with index v
	Object getValue(int v);
	// Set the value of node with index v
	void setValue(int v, Object val);
	// Adds a new edge from node v to node w with weight wgt
	void addEdge(int v, int w, int wgt);
	// Get the weight value for an edge
	int weight(int v, int w);
	// Removes the edge from the graph.
	void removeEdge(int v, int w);
	// Returns true iff the graph has the edge
	boolean hasEdge(int v, int w);
	// Returns an array containing the indicies of the neighbors of v
	int[] neighbors(int v);
}
				`}</CodePre></li>
				<li>This ADT assumes that the number of vertices is fixed when the graph is created, but that edges can be added and removed. The <code>init</code> method sets (or resets) the number of nodes in the graph, and creates necessary space for the adjacency matrix or adjacency list.</li>
				<li>Vertices are defined by an integer index value. In other words, there is a Vertex \(0\), Vertex \(1\), and so on through Vertex \(n-1\).</li>
				<li>Nearly every graph algorithm presented in this chapter will require visits to all neighbors of a given vertex. The neighbors method returns an array containing the indices for the neighboring vertices, in ascending order. The following lines appear in many graph algorithms:</li>
				<li><CodePre language="java">{`
int[] nList = G.neighbors(v);
for (int i=0; i < nList.length; i++) {
	if (G.getValue(nList[i]) != VISITED) {
		DoSomething();
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Adjacency matrix <u>implementation</u>:<SubList>
				<li><CodePre language="java">{`
class GraphM implements Graph {
	private int[][] matrix;
	private Object[] nodeValues;
	private int numEdge;
	
	// No real constructor needed
	GraphM() { }
	
	public void init(int n) {
		matrix = new int[n][n];
		nodeValues = new Object[n];
		numEdge = 0;
	}
	
	public int nodeCount() { return nodeValues.length; }
	public int edgeCount() { return numEdge; }
	public Object getValue(int v) { return nodeValues[v]; }
	public void setValue(int v, Object val) { nodeValues[v] = val; }

	// Adds a new edge from node v to node w
	public void addEdge(int v, int w, int wgt) {
		if (wgt == 0) { return; } // Can't store weight of 0
		if (matrix[v][w] == 0) {
			numEdge++;
		}
		matrix[v][w] = wgt;
	}
	public void removeEdge(int v, int w) {
		if (matrix[v][w] != 0) {
			matrix[v][w] = 0;
			numEdge--;
		}
	}
	public boolean hasEdge(int v, int w) { return matrix[v][w] != 0; }
	public int weight(int v, int w) { return matrix[v][w]; }
	
	
	// Returns an array containing the indicies of the neighbors of v
	public int[] neighbors(int v) {
		int i;
		int count = 0;
		int[] temp;
		for (i=0; i<nodeValues.length; i++) {
			if (matrix[v][i] != 0) { count++; }
		}
		temp = new int[count];
		for (i=0, count=0; i<nodeValues.length; i++) {
			if (matrix[v][i] != 0) { temp[count++] = i; }
		}
		return temp;
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Adjacency list <u>implementation</u>:<SubList>
				<li><CodePre language="java">{`
public class GraphL implements Graph {

	// Doubly linked list node
	private class Edge {
		int vertex, weight;
		Edge prev, next;
		Edge(int v, int w, Edge p, Edge n) {
			vertex = v;
			weight = w;
			prev = p;
			next = n;
		}
	}
	
	private Edge[] nodeArray;
	private Object[] nodeValues;
	private int numEdge;
	
	// No real constructor needed
	GraphL() {}
	
	// Initialize the graph with n vertices
	public void init(int n) {
		nodeArray = new Edge[n];
		// List headers;
		for (int i=0; i<n; i++) {
			nodeArray[i] = new Edge(-1, -1, null, null);
		}
		nodeValues = new Object[n];
		numEdge = 0;
	}
	
	public int nodeCount() { return nodeArray.length; }
	public int edgeCount() { return numEdge; }
	public Object getValue(int v) { return nodeValues[v]; }
	public void setValue(int v, Object val) { nodeValues[v] = val; }
	
	// Return the link in v's neighbor list that preceeds the
	// one with w (or where it would be)
	private Edge find (int v, int w) {
		Edge curr = nodeArray[v];
		while ((curr.next != null) && (curr.next.vertex < w)) {
			curr = curr.next;
		}
		return curr;
	}
	
	// Adds a new edge from node v to node w with weight wgt
	public void addEdge(int v, int w, int wgt) {
		if (wgt == 0) { return; } // Can't store weight of 0
		Edge curr = find(v, w);
		if ((curr.next != null) && (curr.next.vertex == w)) {
			curr.next.weight = wgt;
		}
		else {
			curr.next = new Edge(w, wgt, curr, curr.next);
			numEdge++;
			if (curr.next.next != null) {
				curr.next.next.prev = curr.next;
			}
		}
	}
	
	// Get the weight value for an edge
	public int weight(int v, int w) {
		Edge curr = find(v, w);
		if ((curr.next == null) || (curr.next.vertex != w)) { return 0; }
		else { return curr.next.weight; }
	}
	
	// Removes the edge from the graph.
	public void removeEdge(int v, int w) {
		Edge curr = find(v, w);
		if ((curr.next == null) || curr.next.vertex != w) { return; }
		else {
			curr.next = curr.next.next;
			if (curr.next != null) { curr.next.prev = curr; }
		}
		numEdge--;
	}
	
	// Returns true iff the graph has the edge
	public boolean hasEdge(int v, int w) { return weight(v, w) != 0; }
	
	// Returns an array containing the indicies of the neighbors of v
	public int[] neighbors(int v) {
		int cnt = 0;
		Edge curr;
		for (curr = nodeArray[v].next; curr != null; curr = curr.next) {
			cnt++;
		}
		int[] temp = new int[cnt];
		cnt = 0;
		for (curr = nodeArray[v].next; curr != null; curr = curr.next) {
			temp[cnt++] = curr.vertex;
		}
		return temp;
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Graph Traversals:<SubList>
				<li>Many graph applications need to visit the vertices of a graph in some specific order based on the graph's topology. This is known as a graph <b>traversal</b>.</li>
				<li>Graph traversal algorithms typically begin with a start vertex and attempt to visit the remaining vertices from there. Graph traversals must deal with a number of troublesome cases. First, it might not be possible to reach all vertices from the start vertex. This occurs when the graph is not connected. Second, the graph might contain cycles, and we must make sure that cycles do not cause the algorithm to go into an infinite loop.</li>
				<li>Graph traversal algorithms can solve both of these problems by flagging vertices as <code>VISITED</code> when appropriate.</li>
				<li>Once the traversal algorithm completes, we can check to see if all vertices have been processed by checking whether they have the VISITED flag set. If not all vertices are flagged, we can continue the traversal from another unvisited vertex.</li>
				<li>Note that this process works regardless of whether the graph is directed or undirected. To ensure visiting all vertices, <code>graphTraverse</code> could be called as follows on a graph \(G\):</li>
				<li><CodePre language="java">{`
static void graphTraverse(Graph G) {
	int v;
	for (v=0; v<G.nodeCount(); v++) {
		G.setValue(v, null); // Initialize
	}
	for (v=0; v<G.nodeCount(); v++) {
		if (G.getValue(v) != VISITED) {
			doTraversal(G, v);
		}
	}
}
				`}</CodePre></li>
				<li>Our first method for organized graph traversal is called <b>depth-first search (DFS)</b>.</li>
				<li>Whenever a vertex \(v\) is visited during the search, DFS will recursively visit all of \(v\)'s unvisited neighbors.</li>
				<li>Equivalently, DFS will add all edges leading out of \(v\) to a stack. The next vertex to be visited is determined by popping the stack and following that edge.</li>
				<li><CodePre language="java">{`
static void DFS(Graph G, int v) {
	PreVisit(G, v);
	G.setValue(v, VISITED);
	int[] nList = G.neighbors(v);
	for (int i=0; i < nList.length; i++) {
		if (G.getValue(nList[i]) != VISITED) {
			DFS(G, nList[i]);
		}
	}
	PostVisit(G, v);
}
				`}</CodePre></li>
				<li>This implementation contains calls to functions <code>PreVisit</code> and <code>PostVisit</code>. These functions specify what activity should take place during the search.</li>
				<li>DFS processes each edge once in a directed graph. In an undirected graph, DFS processes each edge from both directions. Each vertex must be visited, but only once, so the total cost is \(\Theta(|V|+|E|)\).</li>
				<li>Our second graph traversal algorithm is known as a <b>breadth-first search (BFS)</b>.</li>
				<li>BFS examines all vertices connected to the start vertex before visiting vertices further away.</li>
				<li><CodePre language="java">{`
static void BFS(Graph G, int v) {
	LQueue Q = new LQueue(G.nodeCount());
	Q.enqueue(v);
	G.setValue(v, VISITED);
	while (Q.length() > 0) { // Process each vertex on Q
		v = (Integer)Q.dequeue();
		PreVisit(G, v);
		int[] nList = G.neighbors(v);
		for (int i=0; i < nList.length; i++) {
			if (G.getValue(nList[i]) != VISITED) { // Put neighbors on Q
				G.setValue(nList[i], VISITED);
				Q.enqueue(nList[i]);
			}
		}
		PostVisit(G, v);
	}
}
				`}</CodePre></li>
			</SubList></li>
		</ul>
	</div>

	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<ul>
			<li><b>Topological Sort:</b><SubList>
				<li>Assume that we need to schedule a series of tasks, such as classes or construction jobs, where we cannot start one task until after its prerequisites are completed. We wish to organize the tasks into a linear order that allows us to complete them one at a time without violating any prerequisites. We can model the problem using a <i>direct acyclic graph</i> (DAG).</li>
				<li><b>Topological sort</b> is the process of laying out the vertices of a DAG in a linear order such that no vertex \(A\) in the order is preceded by a vertex that can be reached by a (directed) path from \(A\).</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/31.PNG"}/>
					<figcaption>Seven tasks have dependencies as shown by the directed graph.</figcaption>
				</figure></li>
				<li>A topological sort may be found by performing a DFS on the graph. When a vertex is visited, no action is taken (i.e., function <code>PreVisit</code> does nothing). When the recursion pops back to that vertex, function <code>PostVisit</code> prints the vertex. This yields a topological sort in reverse order.</li>
				<li><CodePre language="java">{`
static void topsortDFS(Graph G) {
	int v;
	for (v=0; v<G.nodeCount(); v++) {
		G.setValue(v, null); // Initialize
	}
	for (v=0; v<G.nodeCount(); v++) {
		if (G.getValue(v) != VISITED) {
			tophelp(G, v);
		}
	}
}
	
static void tophelp(Graph G, int v) {
	G.setValue(v, VISITED);
	int[] nList = G.neighbors(v);
	for (int i=0; i < nList.length; i++) {
		if (G.getValue(nList[i]) != VISITED) {
			tophelp(G, nList[i]);
		}
	}
	printout(v);
}
				`}</CodePre></li>
				<li>We can implement topological sort using a queue instead of recursion.</li>
				<li>First visit all edges, counting the number of edges that lead to each vertex (i.e., count the number of prerequisites for each vertex). All vertices with no prerequisites are placed on the queue.</li>
				<li>We then begin processing the queue. When Vertex \(v\) is taken off of the queue, it is printed, and all neighbors of \(v\) (that is, all vertices that have \(v\) as a prerequisite) have their counts decremented by one.</li>
				<li>Place on the queue any neighbor whose count becomes zero. If the queue becomes empty without printing all of the vertices, then the graph contains a cycle.</li>
				<li><CodePre language="java">{`
static void topsortBFS(Graph G) {   // Topological sort: Queue
	Queue Q = new LQueue(G.nodeCount());
	int[] Count = new int[G.nodeCount()];
	int[] nList;
	int v;
	for (v=0; v<G.nodeCount(); v++) { Count[v] = 0; } // Initialize
	for (v=0; v<G.nodeCount(); v++) { // Process every edge
		nList = G.neighbors(v);
		for (int i=0; i < nList.length; i++) {
			Count[nList[i]]++;  // Add to v's prereq count
		}
	}
	for (v=0; v<G.nodeCount(); v++) {   // Initialize Queue
		if (Count[v] == 0) {    // V has no prerequisites
			Q.enqueue(v);
		}
	}
	while (Q.length() > 0) {    // Process the vertices
		v = (Integer)Q.dequeue();
		printout(v);    // PreVisit for Vertex V
		nList = G.neighbors(v);
		for (int i=0; i<nList.length; i++) {
			Count[nList[i]]--;  // One less prerequisite
			if (Count[nList[i]] == 0) { // This vertex is now free
				Q.enqueue(nList[i]);
			}
		}
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Shortest-Paths Problems:<SubList>
				<li>On a road map, a road connecting two towns is typically labeled with its distance. We can model a road network as a directed graph whose edges are labeled with real numbers. These labels may be called <b>weights</b>, <b>costs</b>, or <b>distances</b>, depending on the application.</li>
				<li><b>Single-source shortest paths problem:</b> Given a graph with weights (or distances) on the edges, and a designated start vertex \(s\), find the shortest path from \(s\) to every other vertex in the graph.</li>
				<li>For unweighted graphs (or whenever all edges have the same cost), the single-source shortest paths can be found using a simple breadth-first search.</li>
				<li>One approach to solving this problem when the edges have differing weights might be to process the vertices in a fixed order. </li>
				<li>Label the vertices \(v_0\) to \(v_{"{n-1}"}\), with \(S=v_0\). When processing Vertex \(v_1\), we take the edge connecting \(v_0\) and \(v_1\). When processing \(v_2\), we consider the shortest distance from \(v_0\) to \(v_2\) and compare that to the shortest distance from \(v_0\) to \(v_1\) to \(v_2\).</li>
				<li>When processing Vertex \(v_i\), we consider the shortest path for Vertices \(v_0\) through \(v_{"{i-1}"}\) that have already been processed.</li>
				<li>A shortest path from \(S\) to \(X\) must have its next-to-last vertex in \(S\):</li>
				<MathStuff>$${"d(S,X)=\\min_{U∈S} \\ (d(S,U)+\\textbf{w}(U,X))"}$$</MathStuff>
				<li>In other words, the shortest path from \(S\) to \(X\) is the minimum over all paths that go from \(S\) to \(U\), then have an edge from \(U\) to \(X\), where \(U\) is some vertex in \(S\).</li>
				<li>This solution is usually referred to as <b>Dijkstra's algorithm</b>. It works by maintaining a distance estimate \(D(X)\) for all vertices \(X\) in \(V\). The elements of \(D\) are initialized to the value <code>INFINITE</code>. Vertices are processed in order of distance from \(S\). Whenever a vertex \(v\) is processed, \(D(X)\) is updated for every neighbor \(X\) of \(V\).</li>
				<li><CodePre language="java">{`
// Compute shortest path distances from s, store them in D
static void Dijkstra(Graph G, int s, int[] D) {
	for (int i=0; i<G.nodeCount(); i++) {    // Initialize
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) {  // Process the vertices
		int v = minVertex(G, D);     // Find next-closest vertex
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; } // Unreachable
		int[] nList = G.neighbors(v);
		for (int j=0; j<nList.length; j++) {
			int w = nList[j];
			if (D[w] > (D[v] + G.weight(v, w))) {
				D[w] = D[v] + G.weight(v, w);
			}
		}
	}
}
				`}</CodePre></li>
				<li>There are two reasonable solutions to the key issue of finding the unvisited vertex with minimum distance value during each pass through the main for loop. The first method is simply to scan through the list of \(|V|\) vertices searching for the minimum value, as follows:</li>
				<li><CodePre language="java">{`
// Find the unvisited vertex with the smalled distance
static int minVertex(Graph G, int[] D) {
	int v = 0;  // Initialize v to any unvisited vertex;
	for (int i=0; i<G.nodeCount(); i++) {
		if (G.getValue(i) != VISITED) { v = i; break; }
	}
	for (int i=0; i<G.nodeCount(); i++) {  // Now find smallest value
		if ((G.getValue(i) != VISITED) && (D[i] < D[v])) {
			v = i;
		}
	}
	return v;
}
				`}</CodePre></li>
				<li>Because this scan is done \(|V|\) times, and because each edge requires a constant-time update to \(D\), the total cost for this approach is \(\Theta(|V|^2+|E|)=\Theta(|V|^2)\), because \(|E|\)
					is in \(O(|V|^2)\).</li>
				<li>An alternative approach is to store unprocessed vertices in a min-heap ordered by their distance from the processed vertices. The next-closest vertex can be found in the heap in \(Θ(\log|V|)\) time.</li>
				<li>Every time we modify \(D(X)\), we could reorder \(X\) in the heap by deleting and reinserting it. This is an example of a <b>priority queue with priority update</b>.</li>
				<li>To implement true priority updating, we would need to store with each vertex its position within the heap so that we can remove its old distances whenever it is updated by processing new edges.</li>
				<li>The time complexity is \(\Theta((|V|+|E|)\log|E|)\), because for each edge that we process we must reorder the heap.</li>
				<li>We use the <code>KVPair</code> class to store key-value pairs in the heap, with the edge weight as the key and the target vertex as the value.</li>
				<li><CodePre language="java">{`
// Dijkstra's shortest-paths: priority queue version
static void DijkstraPQ(Graph G, int s, int[] D) {
	int v;    // The current vertex
	KVPair[] E = new KVPair[G.edgeCount()];   // Heap for edges
	E[0] = new KVPair(0, s);  // Initial vertex
	MinHeap H = new MinHeap(E, 1, G.edgeCount());
	for (int i=0; i<G.nodeCount(); i++) { // Initialize distance
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) { // For each vertex

		KVPair temp = (KVPair)(H.removemin());
		if (temp == null) { return; }   // Unreachable nodes exist
		v = (Integer)temp.value();

		while (G.getValue(v) == VISITED) {
			temp = (KVPair)(H.removemin());
			if (temp == null) { return; } // Unreachable nodes exist
			v = (Integer)temp.value();
		}

		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; }   // Unreachable
		int[] nList = G.neighbors(v);
		for (int j=0; j<nList.length; j++) {
			int w = nList[j];
			if (D[w] > (D[v] + G.weight(v, w))) { // Update D
				D[w] = D[v] + G.weight(v, w);
				H.insert(new KVPair(D[w], w));
			}
		}
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li><b>Minimal Cost Spanning Trees:</b><SubList>
				<li>The <b>minimal-cost spanning tree (MCST)</b> problem takes as input a connected, undirected graph \(G\), where each edge has a distance or weight measure attached.</li>
				<li className="Opened">The MCST is the graph containing the vertices of \(G\) along with the subset of \(G\)'s edges that:<ol>
					<li>has minimum total cost as measured by summing the values for all of the edges in the subset</li>
					<li>keeps the vertices connected</li>
				</ol></li>
				<li>The MCST is a free tree with \(|V|-1\) edges. The name "minimum-cost spanning tree" comes from the fact that the required set of edges forms a tree, it spans the vertices (i.e., it connects them together), and it has minimum cost.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/32.PNG"}/>
					<figcaption>All edges appear in the original graph. Those edges drawn with heavy lines indicate the subset making up the MCST. Note that edge \((C,F)\) could be replaced with edge \((D,F)\) to form a different MCST with equal cost.</figcaption>
				</figure></li>
			</SubList></li>
			<li><b>Prim's algorithm:</b><SubList>
				<li><b>Prim's Algorithm</b> is a greedy algorithm for computing the MCST of a graph.</li>
				<li>Prim's algorithm is very simple. Start with any Vertex \(N\) in the graph, setting the MCST to be \(N\) initially. Pick the least-cost edge connected to \(N\).</li>
				<li>This edge connects \(N\) to another vertex; call this \(M\). Add Vertex \(M\) and Edge \((N,M)\) to the MCST. Next, pick the least-cost edge coming from either \(N\) or \(M\) to any other vertex in the graph. Add this edge and the new vertex it reaches to the MCST.</li>
				<li>This process continues, at each step expanding the MCST by selecting the least-cost edge from a vertex currently in the MCST to a vertex not currently in the MCST.</li>
				<li>Prim's algorithm is quite similar to Dijkstra's algorithm for finding the single-source shortest paths. The primary difference is that we are seeking not the next closest vertex to the start vertex, but rather the next closest vertex to any vertex currently in the MCST. Thus we replace the lines:</li>
				<li><CodePre language="java">{`
if (D[w] > (D[v] + G.weight(v, w)))
	D[w] = D[v] + G.weight(v, w);
				`}</CodePre></li>
				<li>in Djikstra's algorithm with the lines:</li>
				<li><CodePre language="java">{`
if (D[w] > G.weight(v, w))
	D[w] = G.weight(v, w);
				`}</CodePre></li>
				<li>The following code shows an implementation for Prim's algorithm:</li>
				<li><CodePre language="java">{`
// Compute shortest distances to the MCST, store them in D.
// V[i] will hold the index for the vertex that is i's parent in the MCST
void Prim(Graph G, int s, int[] D, int[] V) {
	for (int i=0; i<G.nodeCount(); i++) {    // Initialize
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) {   // Process the vertices
		int v = minVertex(G, D);    // Find next-closest vertex
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; } // Unreachable
		if (v != s) { AddEdgetoMST(V[v], v); }
		int[] nList = G.neighbors(v);
		for (int j=0; j<nList.length; j++) {
			int w = nList[j];
			if (D[w] > G.weight(v, w)) {
				D[w] = G.weight(v, w);
				V[w] = v;
			}
		}
	}
}
				`}</CodePre></li>
				<li>Array <code>V[I]</code> stores the previously visited vertex that is closest to Vertex \(I\). This information lets us know which edge goes into the MCST when Vertex \(I\) is processed.</li>
				<li>Alternatively, we can implement Prim's algorithm using a <i>priority queue</i> to find the next closest vertex:</li>
				<li><CodePre language="java">{`
// Prims MCST algorithm: priority queue version
void PrimPQ(Graph G, int s, int[] D, int[] V) {
	int v;  // The current vertex
	KVPair[] E = new KVPair[G.edgeCount()]; // Heap for edges
	E[0] = new KVPair(0, s);    // Initial vertex
	MinHeap H = new MinHeap(E, 1, G.edgeCount());
	for (int i=0; i<G.nodeCount(); i++) {   // Initialize distance
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) {    // For each vertex
		KVPair temp = H.removemin();
		if (temp == null) { return; }      // Unreachable nodes exist
		v = (Integer)temp.value();
			while (G.getValue(v) == VISITED) {
				KVPair temp = H.removemin();
				if (temp == null) { return; }   // Unreachable nodes exist
				v = (Integer)temp.value();
			}
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; }  // Unreachable
		if (v != s) { AddEdgetoMST(V[v], v); } // Add edge to MST
		int[] nList = G.neighbors(v);
		for (int j=0; j<nList.length; j++) {
			int w = nList[j];
			if (D[w] > G.weight(v, w)) { // Update D
				D[w] = G.weight(v, w);
				V[w] = v;   // Where it came from
				H.insert(D[w], w);
			}
		}
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li><b>Kruskal's Algorithm:</b><SubList>
				<li>Kruskal's algorithm is also a simple, greedy algorithm.</li>
				<li>First partition the set of vertices into \(|V|\) disjoint sets, each consisting of one vertex. Then process the edges in order of weight. An edge is added to the MCST, and two disjoint sets combine if the edge connects two vertices in different disjoint sets. This process is repeated until only one disjoint set remains.</li>
				<li>The edges can be processed in order of weight by using a <i>min-heap</i>. This is generally faster than sorting the edges first, because in practice we need only visit a small fraction of the edges before completing the MCST.</li>
				<li><CodePre language="java">{`
void Kruskal(Graph G) {
	ParPtrTree A = new ParPtrTree(G.nodeCount());   // Equivalence array
	KVPair[] E = new KVPair[G.edgeCount()]; // Minheap array
	int edgecnt = 0; // Count of edges

	for (int i=0; i<G.nodeCount(); i++) {    // Put edges in the array
		int[] nList = G.neighbors(i);
		for (int w=0; w<nList.length; w++) {
			E[edgecnt++] = new KVPair(G.weight(i, nList[w]), new int[]{ i,nList[w] } );
		}
	}
	MinHeap H = new MinHeap(E, edgecnt, edgecnt);
	int numMST = G.nodeCount(); // Initially n disjoint classes
	for (int i=0; numMST>1; i++) {  // Combine equivalence classes
		KVPair temp = H.removemin();    // Next cheapest edge
		if (temp == null) { return; }   // Must have disconnected vertices
		int v = ((int[])temp.value())[0];
		int u = ((int[])temp.value())[1];
		if (A.differ(v, u)) {   // If in different classes
			A.UNION(v, u);  // Combine equiv classes
			AddEdgetoMST(v, u); // Add this edge to MST
			numMST--;   // One less MST
		}
	}
}
				`}</CodePre></li>
				<li>The total cost of the algorithm is \(\Theta(|E|\log|E|)\) in the worst case, when nearly all edges must be processed before all the edges of the spanning tree are found and the algorithm can stop.</li>
				<li>More often the edges of the spanning tree are the shorter ones,and only about \(|V|\) edges must be processed. If so, the cost is often close to \(\Theta(|V|\log|E|)\) in the average case.</li>
			</SubList></li>
			<li>All-Pairs Shortest Paths:<SubList>
				<li>Define a \(k\)-path from vertex v to vertex \(u\) to be any path whose intermediate vertices (aside from \(v\) and \(u\)) all have indices less than \(k\). A \(0\)-path is defined to be a direct edge from \(v\) to \(u\).</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/33.PNG"}/>
					<figcaption>Path 1-3 is a \(0\)-path by definition. Path 3-0-2 is not a \(0\)-path, but it is a \(1\)-path (as well as a \(2\)-path, a \(3\)-path, and a \(4\)-path) because the largest intermediate vertex is 0. Path 1-3-2 is a \(4\)-path, but not a \(3\)-path because the intermediate vertex is 3. All paths in this graph are \(4\)-paths.</figcaption>
				</figure></li>
				<li>Define \(D_k(v,u)\) to be the length of the shortest \(k\)-path from vertex \(v\) to vertex \(u\). Assume that we already know the shortest \(k\)-path from \(v\) to \(u\). The shortest \((k+1)\)-path either goes through vertex \(k\) or it does not. If it does go through \(k\), then the best path is the best \(k\)-path from \(v\) to \(k\) followed by the best \(k\)-path from \(k\) to \(u\). Otherwise, we should keep the best \(k\)-path seen before.</li>
				<li><b>Floyd's algorithm</b> simply checks all of the possibilities in a triple loop.</li>
				<li><CodePre language="java">{`
/** Compute all-pairs shortest paths */
static void Floyd(Graph G, int[][] D) {
	for (int i=0; i<G.n(); i++) { // Initialize D with weights
		for (int j=0; j<G.n(); j++) {
			if (G.weight(i, j) != 0) { D[i][j] = G.weight(i, j); }
		}
	}
	for (int k=0; k<G.n(); k++) { // Compute all k paths
		for (int i=0; i<G.n(); i++) {
			for (int j=0; j<G.n(); j++) {
				if ((D[i][k] != Integer.MAX_VALUE) &&
				(D[k][j] != Integer.MAX_VALUE) &&
				(D[i][j] > (D[i][k] + D[k][j])))
				{D[i][j] = D[i][k] + D[k][j];}
			}
		}
	}
}
				`}</CodePre></li>
				<li>At the end of the algorithm, array \(D\) stores the all-pairs shortest distances.</li>
				<li>This algorithm requires \(\Theta(|V|^3)\) running time.</li>
			</SubList></li>
		</ul>
	</div>
</div>
</>