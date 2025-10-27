import SubList from "../../articleRelatedStuff/SubList";
import { CodePre } from "../../articleRelatedStuff/Code";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Operating Systems Notes";
export const sourcesColor = {20: null};

export const content = 
<>
<h1>Operating Systems Notes</h1>

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
						<li><ImgComp src={"/articlePics/operating_systems/1.PNG"} style={{width: "30%"}}/></li>
						<li>The collection of all tracks that are a fixed distance from the spindle is called a <b>cylinder</b>.</li>
						<li>Each track is subdivided into <b>sectors</b>. Between each sector there are <b>inter-sector gaps</b> in which no data are stored. These gaps allow the read head to recognize the end of a sector.</li>
						<li><figure><ImgComp src={"/articlePics/operating_systems/2.png"} style={{width: "85%"}}/><figcaption>(a) Nominal arrangement of tracks showing decreasing data density when moving outward from the center of the disk. (b) A "zoned" arrangement with the sector size and density periodically reset in tracks further away from the center.</figcaption></figure></li>
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
								<li><ImgComp src={"/articlePics/operating_systems/3.PNG"} style={{width: "80%"}}/></li>
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


</>