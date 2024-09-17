import SubList from "../../articleRelatedStuff/SubList";
import { CodePre } from "../../articleRelatedStuff/Code";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Operating Systems Notes";
export const sourcesColor = {20: null};

export const content = 
<>
	<h1>Operating Systems Notes</h1>
	{getSourcesOL(sourcesColor)}

	<h2 id="file_processing">File Processing</h2>
	<div className="content" data-source={20}>
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<h3>Primary Versus Secondary Storage</h3>
			<ul>
					<li><b>Primary memory</b> usually refers to <b>Random Access Memory (RAM)</b>. They are faster but more expensive memory in a computer.</li>
					<li><b>Secondary storage</b> refers to slower but cheaper means of storing data. <u>Examples:</u> hard disk drives; solid state drives; removable "USB" drives; CDs; and DVDs.</li>
					<li>Disk, flash, and optical media are <b>persistent</b>, meaning that they are not erased from the media when the power is turned off. In contrast, RAM used for main memory is usually <b>volatile</b> - all information is lost with the power.</li>
					<li>The relative speeds in access time between RAM and a disk drive have remained the same for over several decades, in the range between a factor of 100,000 and 1,000,000. There are generally two approaches to minimizing disk accesses:<SubList>
							<li>The first is to arrange information so that if you do access data from secondary memory, you will get what you need in as few accesses as possible, and preferably on the first access. <b>File structure</b> is the term used for a data structure that organizes data stored in secondary memory</li>
							<li>The other way to minimize disk accesses is to save information previously retrieved (or retrieve additional data with each access at little additional cost) that can be used to minimize the need for future accesses. This requires the ability to guess accurately what information will be needed later and store it in primary memory now. This is referred to as <b>caching</b>.</li>
					</SubList></li>
					<li>The <b>file manager</b>, a part of the operating system, is responsible for taking requests for data from a <b>logical file</b> and mapping those requests to the physical location of the data on disk:<SubList>
							<li>A programmer typically views a random access file stored on disk as a contiguous series of bytes, with those bytes possibly combining to form data records. This is called the <b>logical file</b>.</li>
							<li>The <b>physical file</b> actually stored on disk is usually not a contiguous series of bytes. It could well be in pieces spread all over the disk.</li>
					</SubList></li>
			</ul>
			<h3>Disk Drives</h3>
			<ul>
					<li>Disk drives are often referred to as <b>direct access storage devices</b>. This means that it takes roughly equal time to access any record in the file. This is in contrast to <b>sequential access storage devices</b> such as tape drives, which require the tape reader to process data from the beginning of the tape until the desired position has been reached.</li>
					<li>Disk Drive Architecture (<a href='https://cdn.ttgtmedia.com/rms/onlineImages/disk_drive_components.jpg'>good reference image</a> from this <a href='https://www.techtarget.com/searchstorage/definition/hard-disk-drive'>webpage</a>):<SubList>
							<li>A hard disk drive is composed of one or more round <b>platters</b>, stacked one on top of another and attached to a central <b>spindle</b>.</li>
							<li>Platters spin continuously at a constant rate. Each usable surface of each platter is assigned a <b>read/write head</b> or <b>I/O head</b> through which data are read or written, somewhat like the arrangement of a phonograph player's arm "reading" sound from a phonograph record.</li>
							<li>Unlike a phonograph needle, the disk read/write head does not actually touch the surface of a hard disk. Instead, it remains slightly above the surface, and any contact during normal operation would damage the disk.</li>
							<li>A hard disk drive typically has several platters and several read/write heads. Each head is attached to an <b>arm</b>.</li>
							<li>The data on a single platter that are accessible to any one position of the head for that platter are collectively called a <b>track</b>.</li>
							<li><ImgComp src={require("./operating_systems/1.PNG")} style={{width: "30%"}}/></li>
							<li>The collection of all tracks that are a fixed distance from the spindle is called a <b>cylinder</b>.</li>
							<li>Each track is subdivided into <b>sectors</b>. Between each sector there are <b>inter-sector gaps</b> in which no data are stored. These gaps allow the read head to recognize the end of a sector.</li>
							<li><figure><ImgComp src={require("./operating_systems/2.png")} style={{width: "85%"}}/><figcaption>(a) Nominal arrangement of tracks showing decreasing data density when moving outward from the center of the disk. (b) A "zoned" arrangement with the sector size and density periodically reset in tracks further away from the center.</figcaption></figure></li>
							<li>In contrast to the physical layout of a hard disk, a <b>CD-ROM</b> consists of a single spiral track. Bits of information along the track are equally spaced, so the information density is the same at both the outer and inner portions of the track.</li>
							<li>Three separate steps take place when reading a particular byte or series of bytes of data from a hard disk:<SubList numbered={true}>
									<li>The I/O head moves so that it is positioned over the track containing the data. This movement is called a <b>seek</b>.</li>
									<li>The sector containing the data rotates to come under the head. The time spent waiting for the desired sector to come under the I/O head is called <b>rotational delay</b> or <b>rotational latency</b>.</li>
									<li>The actual transfer (i.e., reading or writing) of data. It takes relatively little time to read information once the first byte is positioned under the I/O head, simply the amount of time required for it all to move under the head.</li>
							</SubList></li>
							<li>Disk drives are designed not to read one byte of data, but rather to read an entire sector of data at each request. Thus, a sector is the minimum amount of data that can be read or written at one time.</li>
							<li>It is desirable to keep all sectors for a file together on as few tracks as possible:<SubList numbered={true}>
									<li>Seek time is slow (it is typically the most expensive part of an I/O operation).</li>
									<li>If one sector of the file is read, the next sector will probably soon be read.</li>
							</SubList></li>
							<li>Contiguous sectors are often grouped to form a <b>cluster</b>:<SubList>
									<li>A <b>cluster</b> is the smallest unit of allocation for a file, so all files are a multiple of the cluster size. The cluster size is determined by the operating system.</li>
									<li>A group of physically contiguous clusters from the same file is called an <b>extent</b>. Ideally, all clusters making up a file will be contiguous on the disk.</li>
									<li>A file might consist of several extents widely spaced on the disk. The fuller the disk, and the more that files on the disk change, the worse this file fragmentation (and the resulting seek time) becomes.</li>
									<li>In Microsoft Windows systems, there is a designated portion of the disk called the <b>File Allocation Table</b>, which stores information about which sectors belong to which file. In contrast, Unix does not use clusters. The smallest unit of file allocation and the smallest unit that can be read/written is a sector, which in Unix terminology is called a <b>block</b>.</li>
							</SubList></li>
							<li>When the file's logical record size does not match the sector size, records will not fit evenly within a sector. Either the extra space is wasted, or else records are allowed to cross sector boundaries:<SubList>
							<li>If a record crosses a sector boundary, two disk accesses might be required to read it.</li> 
							<li>If the space is left empty instead, such wasted space is called <b>internal fragmentation</b>.</li>
							</SubList></li>
							<li>The <b>sector header</b>:<SubList>
									<li>It's a piece of information at the start of a sector that allows the I/O head to recognize the identity (or equivalently, the address) of the current sector.</li>
									<li>It contains address marks and information about the condition (whether usable or not) for each sector, and gaps between sectors.</li>
									<li>The sector header also contains error detection codes to help verify that the data have not been corrupted.</li>
									<li><ImgComp src={require("./operating_systems/3.PNG")} style={{width: "80%"}}/></li>
							</SubList></li>
					</SubList></li>
					<li>Disk Access Costs:<SubList>
							<li>When a seek is required, it is usually the primary cost when accessing information on disk.</li>
							<li>Two numbers to consider:<SubList>
									<li>One is the track-to-track cost, or the minimum time necessary for the I/O head to move from a track to an adjacent track. This is appropriate when you want to analyze access times for files that are well placed on the disk.</li>
									<li>The second number is the average seek time for a random access. These two numbers are often provided by disk manufacturers.</li>
							</SubList></li>
							<li>Once under the I/O head, a sector of data can be transferred as fast as that sector rotates under the head.</li>
					</SubList></li>
			</ul>       
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<h3>Buffer Pools</h3>
			<ul>
					<li>Nearly all disk drives automatically read or write an entire sector's worth of information whenever the disk is accessed, even when only one byte of information is requested.</li>
					<li><b>Buffering:</b><SubList>
							<li>Once a sector is read, its information is stored in main memory. This is known as <b>Buffering</b> or <b>caching</b> the information.</li>
							<li>Caching is the concept of keeping selected data in main memory. The goal is to have in main memory the data values that are most likely to be used in the near future.</li>
							<li className="research">In practice most disk requests are close to the location (in the logical file at least) of the previous request, a concept referred to as <b>locality of reference</b>.</li>
							<li>Sector-level buffering is normally provided by the operating system and is often built directly into the disk drive controller hardware.</li>
							<li>Most operating systems maintain at least two buffers, one for input and one for output. Consider what would happen if there were only one buffer during a byte-by-byte copy operation:<SubList>
									<li>The sector containing the first byte would be read into the I/O buffer.</li>
									<li>The output operation would need to destroy the contents of the single I/O buffer to write this byte.</li>
									<li>Then the buffer would need to be filled again from disk for the second byte, only to be destroyed during output.</li>
							</SubList></li>
							<li><b>Double buffering:</b><SubList>
									<li><b>Double buffering:</b> The idea of using multiple buffers to allow the CPU to operate in parallel with a peripheral storage device (like disk drive).</li>
									<li>Imagine that a file is being processed sequentially. While the first sector is being read, the CPU cannot process that information and so must wait or find something else to do in the meantime.</li>
									<li>Once the first sector is read, the CPU can start processing while the disk drive (in parallel) begins reading the second sector.</li>
									<li>If the time required for the CPU to process a sector is approximately the same as the time required by the disk controller to read a sector, it might be possible to keep the CPU continuously fed with data from the file.</li>
							</SubList></li>
							<li>The information stored in a buffer is often called a <b>page</b>, and the collection of buffers is called a <b>buffer pool</b>.</li>
					</SubList></li>
					<li>Replacement Strategies:<SubList>
							<li>When an application continues to read new information from disk, eventually all of the buffers in the buffer pool will become full. Once this happens, some decision must be made about what information in the buffer pool will be sacrificed to make room for newly requested information.</li>
							<li>When replacing information contained in the buffer pool, the goal is to select a buffer that has "unnecessary" information, that is, the information least likely to be requested again.</li>
							<li>Because the buffer pool cannot know for certain what the pattern of future requests will look like, a decision based on some <i>heuristic</i>, or best guess, must be used:<SubList>
									<li>One heuristic is <b>first-in, first-out</b>. This scheme simply orders the buffers in a queue.</li>
									<li>In this way, the buffer to be replaced is the one that has held its information the longest, in hopes that this information is no longer needed.</li>
									<li>However, many programs work with certain key pieces of information over and over again, and the importance of information has little to do with how long ago the information was first accessed.</li>
									<li>Another approach is called <b>least frequently used (LFU)</b>. LFU tracks the number of accesses to each buffer in the buffer pool. When a buffer must be reused, the buffer that has been accessed the fewest number of times is considered to contain the "least important" information, and so it is used next.</li>
									<li>LFU, while it seems intuitively reasonable, has many drawbacks. First, it is necessary to store and update access counts for each buffer. Second, what was referenced many times in the past might now be irrelevant.</li>
									<li>The third approach is called <b>least recently used (LRU)</b>. LRU simply keeps the buffers in a list. Whenever information in a buffer is accessed, this buffer is brought to the front of the list.</li>
							</SubList></li>
					</SubList></li>
					<li><b>The Dirty Bit:</b><SubList>
							<li>The main purpose of a buffer pool is to minimize disk I/O.</li>
							<li>When the contents of a block (a unit of storage, usually referring to storage on a disk drive) are modified, we could write the updated information to disk immediately. But what if the block is changed again? If we write the block's contents after every change, that might be a lot of disk write operations that can be avoided. It is more efficient to wait until either the file is to be closed, or the contents of the buffer containing that block is to be flushed from the buffer pool.</li>
							<li>A Boolean variable with the buffer (often referred to as the <b>dirty bit</b>) is turned on when the buffer's contents are modified by the client. At the time when the block is flushed from the buffer pool, it is written to disk if and only if the dirty bit has been turned on.</li>
					</SubList></li>
					<li>Modern operating systems support <b>virtual memory</b>:<SubList>
							<li><b>Virtual memory</b> is a technique that allows the programmer to write programs as though there is more of the faster main memory than actually exists.</li>
							<li>The disk stores the complete contents of the virtual memory. Blocks are read into main memory as demanded by memory accesses.</li>
							<li>Naturally, programs using virtual memory techniques are slower than programs whose data are stored completely in main memory. The advantage is reduced programmer effort because a good virtual memory system provides the appearance of larger main memory without modifying the program.</li>
					</SubList></li>
					<li>Implementing Buffer Pools:<SubList>
							<li>When implementing buffer pools, there are two basic approaches that can be taken regarding the transfer of information between the user of the buffer pool and the buffer pool class itself.</li>
							<li>The first approach is to pass "messages" between the two. This approach is illustrated by the following abstract class:</li>
							<li><CodePre language="java">{"\
// ADT for buffer pools using the message-passing style\n\
public interface BufferPoolADT {\n\
// Copy \"sz\" bytes from \"space\" to position \"pos\" in the buffered storage\n\
public void insert(byte[] space, int sz, int pos);\n\
// Copy \"sz\" bytes from position \"pos\" of the buffered storage to \"space\"\n\
public void getbytes(byte[] space, int sz, int pos);\n\
}\n\
							"}</CodePre></li>
							<li>An alternative interface is to have the buffer pool provide to the user a direct pointer to a buffer that contains the requested information. Such an interface might look as follows:</li>
							<li><CodePre language="java">{"\
// ADT for buffer pools using the buffer-passing style\n\
public interface BufferPoolADT {\n\
// Return pointer to the requested block\n\
public byte[] getblock(int block);\n\
// Set the dirty bit for the buffer holding \"block\"\n\
public void dirtyblock(int block);\n\
// Tell the size of a buffer\n\
public int blocksize();\n\
};\n\
							"}</CodePre></li>
							<li>A variation on this approach is to have the <code>getblock</code> function take another parameter to indicate the "mode":<SubList>
									<li>If the mode is READ then the buffer pool assumes that no changes will be made to the buffer's contents (and so no write operation need be done when the buffer is reused to store another block).</li>
									<li>If the mode is WRITE then the buffer pool assumes that the client will not look at the contents of the buffer and so no read from the file is necessary.</li>
									<li>If the mode is READ AND WRITE then the buffer pool would read the existing contents of the block in from disk, and write the contents of the buffer to disk when the buffer is to be reused.</li>
									<li>Using the "mode" approach, the dirtyblock method is avoided.</li>
							</SubList></li>
							<li><b>Stale pointers:</b><SubList>
									<li><b>Stale pointer</b> is a reference to a buffer or memory location that is no longer valid.</li>
									<li>A program might make a memory request to a buffer pool, and be given a reference to the buffer holding the requested data. Over time, due to inactivity, the contents of this buffer might be flushed. If the program holding the buffer reference then tries to access the contents of that buffer again, then the data contents will have changed.</li>
									<li>We can solve this problem by introducing the concept of a user (or possibly multiple users) gaining access to a buffer, and then releasing the buffer when done. We will add method <code>acquireBuffer</code> and <code>releaseBuffer</code> for this purpose.</li>
									<li>Method <code>acquireBuffer</code> takes a block ID as input and returns a pointer to the buffer that will be used to store this block. The buffer pool will keep a count of the number of requests currently active for this block.</li>
									<li>Method <code>releaseBuffer</code> will reduce the count of active users for the associated block. Buffers associated with active blocks will not be eligible for flushing from the buffer pool.</li>
									<li><CodePre language="java">{"\
// Improved ADT for buffer pools using the buffer-passing style.\n\
// Most user functionality is in the buffer class,\n\
//not the buffer pool itself.\n\
// A single buffer in the buffer pool\n\
public interface BufferADT {\n\
// Read the associated block from disk (if necessary) and return a\n\
// pointer to the data\n\
public byte[] readBlock();\n\
// Return a pointer to the buffer's data array\n\
//(without reading from disk)\n\
public byte[] getDataPointer();\n\
// Flag buffer's contents as having changed, so that flushing the\n\
// block will write it back to disk\n\
public void markDirty();\n\
// Release the block's access to this buffer. Further accesses to\n\
// this buffer are illegal\n\
public void releaseBuffer();\n\
}\n\
public interface BufferPoolADT {\n\
// Relate a block to a buffer, returning a pointer to a buffer object\n\
Buffer acquireBuffer(int block);\n\
}\n\
									"}</CodePre></li>
									<li>Again, a mode parameter could be added to the <code>acquireBuffer</code> method, eliminating the need for the <code>readBlock</code> and <code>markDirty</code> methods.</li>
							</SubList></li>
					</SubList></li>
					<li>In a buffer pool, the user decides where a given record will be stored but has no control over the precise mechanism by which data are transferred to the backing storage.</li>
			</ul> 
			<h3>The Programmer's View of Files</h3>
			<ul>
					<li>A <b>random access</b> procedure processes records in an order independent of their logical order within the file.</li>
					<li><b>Sequential access</b> processes
							records in order of their logical appearance within the file.</li>
					<li>The Java programmer's logical view of a random access file is a single stream
							of bytes.</li>
					<li>Interaction with a file can be viewed as a communications channel for issuing one of three instructions:<SubList>
							<li>Read bytes from the current position in the file</li>
							<li>Write bytes to the current position in the file</li>
							<li>Move the current position within
							the file</li>
							</SubList></li>
					<li>You do not normally see how the bytes are stored in sectors, clusters, and
							so forth. The mapping from logical to physical addresses is done by the file system,
							and sector-level buffering is done automatically by the disk controller.</li>
					<li>Java provides several mechanisms for manipulating disk files. One of the most
							commonly used is the <code>RandomAccessFile</code> class:<SubList>
									<li><code>RandomAccessFile(String name, String mode)</code>: Class constructor, opens a disk file for processing.</li>
									<li><code>read(byte[] b)</code>: Read some bytes from the current position in the file. The current position moves forward as the bytes are read.</li>
									<li><code>write(byte[] b)</code>: Write some bytes at the current position in the file (overwriting the bytes already at that position). The current position moves forward as the bytes are written.</li>
									<li><code>seek(long pos)</code>: Move the current position in the file to pos. This allows bytes at arbitrary places within the file to be read or written.</li>
									<li><code>close()</code>: Close a file at the end of processing.</li>
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
							<li><ImgComp src={require("./operating_systems/4.PNG")} style={{width: "80%"}}/></li>
					</SubList></li>
					<li><b>Sequential-Fit Methods:</b><SubList>
							<li>Sequential-fit methods attempt to find a "good" block to service a storage request. Let's assume that the free blocks are organized into a doubly linked list.</li>
							<li>A simple linked-list implementation can be used, where each node of the linked list contains a pointer to a single free block in the memory pool. This is fine if there is space available for the linked list itself, separate from the memory pool.</li>
							<li>Another approach to storing the freelist is more complicated but saves space. Because the free space is free, it can be used by the memory manager to help it do its job; that is, the memory manager temporarily "borrows" space within the free blocks to maintain its doubly linked list.</li>
							<li>To do so, each unallocated block must be large enough to hold these pointers. In addition, it is usually worthwhile to let the memory manager add a few bytes of space to each reserved block for its own purposes.</li>
							<li><figure>
									<ImgComp src={require("./operating_systems/5.png")} style={{width: "80%"}}/>
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

</>