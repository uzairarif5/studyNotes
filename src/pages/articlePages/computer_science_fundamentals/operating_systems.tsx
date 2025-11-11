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
			<li><b>Primary storage:</b><SubList>
				<li><b>Primary storage</b> or <b>main memory</b> usually refers to <b>Random Access Memory (RAM)</b>.</li>
				<li>They are faster but more expensive memory in a computer.</li>
				<li>Primary memory also includes registers, cache, and video memories, but we will ignore them for this discussion.</li>
				<li>RAM used for main memory is usually <b>volatile</b> - all information is lost with the power.</li>
			</SubList></li>
			<li><b>Secondary storage</b>:<SubList>
				<li><b>Secondary storage</b> refers to slower but cheaper means of storing data.</li>
				<li><u>Examples:</u> hard disk drives, solid state drives, USB sticks, CDs and DVDs.</li>
				<li>Disk, flash, and optical media are <b>persistent</b>, meaning that they are not erased from the media when the power is turned off.</li>
				<li>CDs and USB drives can easily be transferred between computers. This provides a convenient way to take information from one computer to another.</li>
				<li>In exchange for reduced storage costs, persistence, and portability, secondary storage devices pay a penalty in terms of increased access time.</li>
			</SubList></li>
			<li>There are generally two approaches to minimizing disk accesses:<SubList>
				<li>The first is to arrange information so that if you do access data from secondary memory, you will get what you need in as few accesses as possible, and preferably on the first access.</li>
				<li><b>File structure</b> is the term used for a data structure that organizes data stored in secondary memory.</li>
				<li>The other way is to save information previously retrieved (or retrieve additional data with each access at little additional cost) that can be used to minimize the need for future accesses.</li>
				<li>This requires the ability to guess accurately what information will be needed later and store it in primary memory now. This is referred to as <b>caching</b>.</li>
			</SubList></li>
			<li>Logical file:<SubList>
				<li>A programmer typically views a random access file stored on disk as a contiguous series of bytes, with those bytes possibly combining to form data records. This is called the <b>logical file</b>.</li>
				<li>The <b>physical file</b> actually stored on disk is usually not a contiguous series of bytes. It could well be in pieces spread all over the disk.</li>
				<li>The <b>file manager</b>, a part of the operating system, is responsible for taking requests for data from a <b>logical file</b> and mapping those requests to the physical location of the data on disk.</li>
			</SubList></li>
		</ul>
		<h3>Disk Drives</h3>
		<ul>
				<li>Disk drives are often referred to as <b>direct access storage devices</b>:<SubList>
					<li>This means that it takes roughly equal time to access any record in the file.</li>
					<li>This is in contrast to <b>sequential access storage devices</b> such as tape drives, which require the tape reader to process data from the beginning of the tape until the desired position has been reached.</li>
				</SubList></li>
				<li>Disk Drive Architecture (<a href='https://cdn.ttgtmedia.com/rms/onlineImages/disk_drive_components.jpg'>good reference image</a> from this <a href='https://www.techtarget.com/searchstorage/definition/hard-disk-drive'>webpage</a>):<SubList>
					<li>A hard disk drive is composed of one or more round <b>platters</b>, stacked one on top of another and attached to a central <b>spindle</b>.</li>
					<li>Platters spin continuously at a constant rate. Each usable surface of each platter is assigned a <b>read/write head</b> or <b>I/O head</b> through which data are read or written.</li>
					<li>The disk read/write head does not actually touch the surface of a hard disk. Instead, it remains slightly above the surface, and any contact during normal operation would damage the disk.</li>
					<li>A hard disk drive typically has several platters and several read/write heads. Each head is attached to an <b>arm</b>, which connects to the <b>boom</b>.</li>
					<li>The data on a single platter that are accessible to any one position of the head for that platter are collectively called a <b>track</b>.</li>
					<li><ImgComp src={"/articlePics/operating_systems/1.PNG"} style={{width: "60%"}}/></li>
					<li>The collection of all tracks that are a fixed distance from the spindle is called a <b>cylinder</b>.</li>
					<li>Each track is subdivided into <b>sectors</b>. Between each sector there are <b>inter-sector gaps</b> in which no data are stored. These gaps allow the read head to recognize the end of a sector.</li>
					<li>Each sector contains the same amount of data. Because the outer tracks have greater length, they contain fewer bits per inch than do the inner tracks. Only the innermost tracks are stored at the highest possible data density.</li>
					<li>Disk drives today actually group tracks into <b>zones</b> such that the tracks in the innermost zone adjust their data density going out to maintain the same radial data density, then the tracks of the next zone reset the data density to make better use of their storage ability, and so on.</li>
					<li><figure><ImgComp src={"/articlePics/operating_systems/2.png"} style={{width: "85%"}}/><figcaption>(a) Nominal arrangement of tracks showing decreasing data density when moving outward from the center of the disk. (b) A "zoned" arrangement with the sector size and density periodically reset in tracks further away from the center.</figcaption></figure></li>
					<li>In contrast to the physical layout of a hard disk, a <b>CD-ROM</b> consists of a single spiral track. Bits of information along the track are equally spaced, so the information density is the same at both the outer and inner portions of the track.</li>
				</SubList></li>
				<li>Reading/writing data:<SubList>
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
				</SubList></li>
				<li>Contiguous sectors are often grouped to form a <b>cluster</b>:<SubList>
					<li>A <b>cluster</b> is the smallest unit of allocation for a file, so all files are a multiple of the cluster size. The cluster size is determined by the operating system.</li>
					<li>In Microsoft Windows systems, there is a designated portion of the disk called the <b>File Allocation Table</b>, which stores information about which sectors belong to which file.</li>
					<li>Unix does not use clusters. The smallest unit of file allocation and the smallest unit that can be read/written is a sector, which in Unix terminology is called a <b>block</b>.</li>
					<li>Unix maintains information about file organization in certain disk blocks called <b>inodes</b>.</li>
					<li>A group of physically contiguous clusters from the same file is called an <b>extent</b>. Ideally, all clusters making up a file will be contiguous on the disk.</li>
					<li>A file might consist of several extents widely spaced on the disk. The fuller the disk, and the more that files on the disk change, the worse this file fragmentation (and the resulting seek time) becomes.</li>
					<li>File fragmentation leads to a noticeable degradation in performance as additional seeks are required to access data.</li>
				</SubList></li>
				<li><b>Internal fragmentation:</b><SubList>
					<li>When the file's logical record size does not match the sector size, records will not fit evenly within a sector.</li>
					<li>Either the extra space is wasted, or else records are allowed to cross sector boundaries.</li>
					<li>If a record crosses a sector boundary, two disk accesses might be required to read it.</li> 
					<li>If the space is left empty instead, such wasted space is called <b>internal fragmentation</b>.</li>
					<li>A second example of internal fragmentation occurs at cluster boundaries. Files whose size is not an even multiple of the cluster size must waste some space at the end of the last cluster.</li>
					<li>Cluster size is a tradeoff between large files processed sequentially (where a large cluster size is desirable to minimize seeks) and small files (where small clusters are desirable to minimize wasted storage).</li>
				</SubList></li>
				<li>The <b>sector header</b>:<SubList>
					<li>It's a piece of information at the start of a sector that allows the I/O head to recognize the identity (or equivalently, the address) of the current sector.</li>
					<li>It contains address marks and information about the condition (whether usable or not) for each sector, and gaps between sectors.</li>
					<li>The sector header also contains error detection codes to help verify that the data have not been corrupted.</li>
					<li>This is why most disk drives have a "nominal" size that is greater than the actual amount of user data that can be stored on the drive.</li>
					<li><ImgComp src={"/articlePics/operating_systems/3.PNG"} style={{width: "80%"}}/></li>
				</SubList></li>
				<li>Disk Access Costs:<SubList>
					<li>When a seek is required, it is usually the primary cost when accessing information on disk.</li>
					<li>While the actual seek time is highly variable, depending on the distance between the track where the I/O head currently is and the track where the head is moving to, two numbers to consider:<SubList>
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
			<li><b>Buffering:</b><SubList>
				<li>Nearly all disk drives automatically read or write an entire sector's worth of information whenever the disk is accessed, even when only one byte of information is requested.</li>
				<li>Once a sector is read, its information is stored in main memory. This is known as <b>buffering</b> or <b>caching</b> the information.</li>
				<li>Caching is the concept of keeping selected data in main memory. The goal is to have in main memory the data values that are most likely to be used in the near future.</li>
				<li>In practice most disk requests are close to the location (in the logical file at least) of the previous request, a concept referred to as <b>locality of reference</b>.</li>
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
					<li>The same concept can also be applied to output, writing one sector to disk while the CPU is writing to a second output buffer in memory.</li>
					<li>Thus, in an operationg system that support double buffering, it pays to have at least two input buffers and two output buffers available.</li>
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
				<li>When the contents of a block (a unit of storage, usually referring to storage on a disk drive) are modified, we could write the updated information to disk immediately.</li>
				<li>What if the block is changed again? If we write the block's contents after every change, that might be a lot of disk write operations that can be avoided. It is more efficient to wait until either the file is to be closed, or the contents of the buffer containing that block is to be flushed from the buffer pool.</li>
				<li>A Boolean variable with the buffer (often referred to as the <b>dirty bit</b>) is turned on when the buffer's contents are modified by the client. At the time when the block is flushed from the buffer pool, it is written to disk if and only if the dirty bit has been turned on.</li>
			</SubList></li>
			<li><b>Virtual memory</b>:<SubList>
				<li><b>Virtual memory</b> is a technique that allows the programmer to write programs as though there is more of the faster main memory than actually exists.</li>
				<li>Virtual memory makes use of a buffer pool to store data read from blocks on slower, secondary memory (such as on the disk drive).</li>
				<li>The disk stores the complete contents of the virtual memory. Blocks are read into main memory as demanded by memory accesses.</li>
				<li>Naturally, programs using virtual memory techniques are slower than programs whose data are stored completely in main memory. The advantage is reduced programmer effort because a good virtual memory system provides the appearance of larger main memory without modifying the program.</li>
			</SubList></li>
			<li>Implementing Buffer Pools:<SubList>
				<li>When implementing buffer pools, there are two basic approaches that can be taken regarding the transfer of information between the user of the buffer pool and the buffer pool class itself.</li>
				<li>The first approach is to pass "messages" between the two. This approach is illustrated by the following abstract class:</li>
				<li><CodePre language="java">{`\
// ADT for buffer pools using the message-passing style
public interface BufferPoolADT {
	// Copy "sz" bytes from "space" to position "pos" in the buffered storage
	public void insert(byte[] space, int sz, int pos);
	
	// Copy "sz" bytes from position "pos" of the buffered storage to "space"
	public void getbytes(byte[] space, int sz, int pos);
}
				`}</CodePre></li>
				<li>The information is passed between the buffer pool user and the buffer pool through the <code>space</code> parameter.</li>
				<li>Parameter <code>pos</code> indicates where the information will be placed in the buffer pool's logical storage space. Physically, it will actually be copied to the appropriate byte position in some buffer in the buffer pool.</li>
				<li>An alternative interface is to have the buffer pool provide to the user a direct pointer to a buffer that contains the requested information. Such an interface might look as follows:</li>
				<li><CodePre language="java">{`
// ADT for buffer pools using the buffer-passing style
public interface BufferPoolADT {
	// Return pointer to the requested block
	public byte[] getblock(int block);

	// Set the dirty bit for the buffer holding "block"
	public void dirtyblock(int block);
	
	// Tell the size of a buffer
	public int blocksize();
};
				`}</CodePre></li>
				<li>A variation on this approach is to have the <code>getblock</code> function take another parameter to indicate the "mode":<SubList>
					<li>If the mode is READ then the buffer pool assumes that no changes will be made to the buffer's contents (and so no write operation need be done when the buffer is reused to store another block).</li>
					<li>If the mode is WRITE then the buffer pool assumes that the client will not look at the contents of the buffer and so no read from the file is necessary.</li>
					<li>If the mode is READ AND WRITE then the buffer pool would read the existing contents of the block in from disk, and write the contents of the buffer to disk when the buffer is to be reused.</li>
					<li>Using the "mode" approach, the dirtyblock method is avoided.</li>
				</SubList></li>
				<li><b>Stale pointers:</b><SubList>
					<li><b>Stale pointer</b> is a reference to a buffer or memory location that is no longer valid.</li>
					<li>When the buffer pool user is given a pointer to some buffer space at time \(T1\), that pointer does indeed refer to the desired data at that time.</li>
					<li>If the buffer pool user at a later time \(T2\) then refers to the data referred to by the pointer given at time \(T1\), it is possible that the data are no longer valid because the buffer contents have been replaced in the meantime.</li>
					<li>We can solve this problem by introducing the concept of a user (or possibly multiple users) gaining access to a buffer, and then releasing the buffer when done. We will add method <code>acquireBuffer</code> and <code>releaseBuffer</code> for this purpose.</li>
					<li>Method <code>acquireBuffer</code> takes a block ID as input and returns a pointer to the buffer that will be used to store this block. The buffer pool will keep a count of the number of requests currently active for this block.</li>
					<li>Method <code>releaseBuffer</code> will reduce the count of active users for the associated block.</li>
					<li>Buffers associated with active blocks will not be eligible for flushing from the buffer pool. This will lead to a problem if the client neglects to release active blocks when they are no longer needed.</li>
					<li>An additional problem with both ADTs presented so far comes when the user intends to completely overwrite the contents of a block, and does not need to read in the old contents already on disk. However, the buffer pool cannot in general know whether the user wishes to use the old contents or not.</li>
					<li>The following revised buffer-passing ADT does not actually read data in the <code>acquireBuffer</code> method. Users who wish to see the old contents must then issue a readBlock request to read the data from disk into the buffer.</li>
					<li><CodePre language="java">{`
// Improved ADT for buffer pools using the buffer-passing style.
// Most user functionality is in the buffer class,
// not the buffer pool itself.

// A single buffer in the buffer pool
public interface BufferADT {
	// Read the associated block from disk (if necessary) and return a
	// pointer to the data
	public byte[] readBlock();

	// Return a pointer to the buffer's data array
	//(without reading from disk)
	public byte[] getDataPointer();
	
	// Flag buffer's contents as having changed, so that flushing the
	// block will write it back to disk
	public void markDirty();
	
	// Release the block's access to this buffer. Further accesses to
	// this buffer are illegal
	public void releaseBuffer();
}

public interface BufferPoolADT {
	// Relate a block to a buffer, returning a pointer to a buffer object
	Buffer acquireBuffer(int block);
}
					`}</CodePre></li>
					<li>Again, a mode parameter could be added to the <code>acquireBuffer</code> method, eliminating the need for the <code>readBlock</code> and <code>markDirty</code> methods.</li>
				</SubList></li>
				<li>In a buffer pool, the user decides where a given record will be stored but has no control over the precise mechanism by which data are transferred to the backing storage.</li>
			</SubList></li>
		</ul> 
		<h3>The Programmer's View of Files</h3>
		<ul>
			<li>The programmer's logical view of a random access file is a single array of bytes:<SubList>
				<li>Interaction with a file can be viewed as a communications channel for issuing one of three instructions:<SubList opened>
					<li>read bytes from the current position in the file,</li>
					<li>write bytes to the current position in the file and</li>
					<li>move the current position within the file.</li>
				</SubList></li>
				<li>The mapping from logical to physical addresses is done by the file system, and sector-level buffering is done automatically by the disk controller.</li>
				<li>A <b>random access</b> procedure processes records in an order independent of their logical order within the file.</li>
				<li><b>Sequential access</b> processes records in order of their logical appearance within the file.</li>
			</SubList></li>
			<li><code>RandomAccessFile</code> class:<SubList>
				<li>Java provides several mechanisms for manipulating disk files. One of the most commonly used is the <code>RandomAccessFile</code> class.</li>
				<li><code>RandomAccessFile(String name, String mode)</code>: Class constructor, opens a disk file for processing.</li>
				<li><code>read(byte[] b)</code>: Read some bytes from the current position in the file. The current position moves forward as the bytes are read.</li>
				<li><code>write(byte[] b)</code>: Write some bytes at the current position in the file (overwriting the bytes already at that position). The current position moves forward as the bytes are written.</li>
				<li><code>seek(long pos)</code>: Move the current position in the file to pos. This allows bytes at arbitrary places within the file to be read or written.</li>
				<li><code>close()</code>: Close a file at the end of processing.</li>
			</SubList></li>
		</ul>
		<h3>External Sorting</h3>
		<ul>
			<li><b>Internal sorts</b> assume that the records to be sorted are stored in main memory.</li>
			<li><b>External sorting:</b><SubList>
				<li>A sorting algorithm that is applied to data stored in peripheral storage such as on a disk drive.</li>
				<li>When a collection of records is too large to fit in main memory, the only practical way to sort it is to read some records from disk, do some rearranging, then write them back to disk.</li>
				<li>The primary goal of an external sorting algorithm is to minimize the number of times information must be read from or written to disk.</li>
				<li>A <b>block</b> is aunit of storage, usually referring to storage on a disk drive or other peripheral storage device.</li>
				<li>The file to be sorted is viewed by the programmer as a sequential series of fixed-size blocks.</li>
				<li>Assume (for simplicity) that each block contains the same number of fixed-size data records.</li>
				<li>Recall that a <b>sector</b> is the basic unit of I/O. Sector sizes are typically a power of two, in the range 512 to 16K bytes, depending on the operating system and the size and speed of the disk drive.</li>
				<li>The block size used for external sorting algorithms should be equal to or a multiple of the sector size.</li>
				<li>Under this model, a sorting algorithm reads a block of data into a buffer in main memory, performs some processing on it, and at some future time writes it back to disk.</li>
			</SubList></li>
			<li>It is important to understand precisely under what circumstances sequential file processing is actually faster than random access:<SubList>
				<li>The first requirement is that the blocks making up a file are in fact stored on disk in sequential order and close together, preferably filling a small number of contiguous tracks.</li>
				<li>The second requirement is that the disk drive's I/O head remain positioned over the file throughout sequential processing. This will not happen if there is competition of any kind for the I/O head.</li>
				<li>The moral is that, with a single disk drive, there often is no such thing as efficient sequential processing of a data file.</li>
				<li>Thus, a sorting algorithm might be more efficient if it performs a smaller number of non-sequential disk operations rather than a larger number of logically sequential disk operations that require a large number of seeks in practice.</li>
			</SubList></li>
			<li>Simple approaches to external sorting:<SubList>
				<li>If your operating system supports virtual memory, the simplest "external" sort is to read the entire file into virtual memory and run an internal sorting method such as Quicksort.</li>
				<li>One potential drawback is that the size of virtual memory is usually limited to something much smaller than the disk space available. Thus, your input file might not fit into virtual memory.</li>
				<li>Limited virtual memory can be overcome by adapting an internal sorting method to make use of your own buffer pool.</li>
				<li>A more general problem with adapting an internal sorting algorithm to external sorting is that it is not likely to be as efficient as designing a new algorithm with the specific goal of minimizing disk I/O:<SubList>
					<li>Consider the simple adaptation of Quicksort to use a buffer pool.</li>
					<li>Quicksort begins by processing the entire array of records, with the first partition step moving indices inward from the two ends. This can be implemented efficiently using a buffer pool.</li>
					<li>However, the next step is to process each of the subarrays, followed by processing of sub-subarrays, and so on.</li>
					<li>As the subarrays get smaller, processing quickly approaches random access to the disk drive.</li>
					<li>Even with maximum use of the buffer pool, Quicksort still must read and write each record \(\log n\) times on average.</li>
					<li>Finally, even if the virtual memory manager can give good performance using a standard Quicksort, this will come at the cost of using a lot of the system's working memory, which will mean that the system cannot use this space for other work.</li>
				</SubList></li>
				<li>Our approach to external sorting is derived from the Mergesort algorithm:<SubList>
					<li>The simplest form of external Mergesort performs a series of sequential passes over the records, merging larger and larger sublists on each pass.</li>
					<li>A sorted sublist is called a <b>run</b>. Thus, each pass is merging pairs of runs to form longer runs.</li>
					<li>Algorithm:<SubList numbered>
						<li>Split the original file into two equal-sized run files.</li>
						<li>Read one block from each run file into input buffers.</li>
						<li>Take the first record from each input buffer, and write a run of length two to an output buffer in sorted order.</li>
						<li>Take the next record from each input buffer, and write a run of length two to a second output buffer in sorted order.</li>
						<li>Repeat until finished, alternating output between the two output run buffers. Whenever the end of an input block is reached, read the next block from the appropriate input file. When an output buffer is full, write it to the appropriate output file.</li>
						<li>Repeat steps 2 through 5, using the original output files as input files. On the second pass, the first two records of each input run file are already in sorted order. Thus, these two runs may be merged and output as a single run of four elements.</li>
						<li>Each pass through the run files provides larger and larger run.</li>
					</SubList></li>
					<li>This algorithm can easily take advantage of double buffering.</li>
					<li>Note that the various passes read the input run files sequentially and write the output run files sequentially.</li>
					<li>For sequential processing and double buffering to be effective, however, it is necessary that there be a separate I/O head available for each file.</li>
				</SubList></li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="memory_management">Memory Management</h2>
<div className="content" data-source={20}>
	<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
		<li>Memory manager:<SubList>
			<li><b>Memory pool:</b> Memory that is logically viewed as an array of memory positions. Memory requests are issued for some amount of space in the pool.</li>
			<li>A <b>memory manager</b> has the job of finding a contiguous block of locations of at least the requested size from somewhere within the memory pool. Honoring such a request is called <b>memory allocation</b>.</li>
			<li>The memory manager will typically return some piece of information that the requestor can hold on to so that later it can recover the data that were just stored by the memory manager. This piece of information is called a <b>handle</b>.</li>
			<li>At some point, space that has been requested might no longer be needed, and this space can be returned to the memory manager so that it can be reused. This is called a <b>memory deallocation</b>.</li>
			<li><CodePre language="java">{`
// Memory Manager abstract class
public interface MemManager {
// Store a record and return a handle to it
public MemHandle insert(byte[] info);

// Release the space associated with a record
public void release(MemHandle h);

// Get back a copy of a stored record
public byte[] getRecord(MemHandle h);
}
			`}</CodePre></li>
			<li>The fundamental idea is that the client gives messages to the memory manager for safe keeping. The memory manager returns a receipt for the message in the form of a <code>MemHandle</code> object. The client holds the <code>MemHandle</code> until it wishes to get the message back.</li>
			<li><a href='https://www.geeksforgeeks.org/difference-between-static-and-dynamic-memory-allocation-in-c/'>In the <b>static memory allocation</b>, variables get allocated permanently, till the program executes or function call finishes. Static Memory Allocation is done before program execution.</a></li>
		</SubList></li>
		<li>Dynamic Storage Allocation:<SubList>
			<li>For the purpose of <b>dynamic storage allocation</b>, we view memory as a single array broken into a series of variable-size blocks, where some of the blocks are <i>free blocks</i> and some are <i>reserved blocks</i> (already allocated).</li>
			<li><b>Heap</b> refers to the memory controlled by a dynamic memory management scheme.</li>
			<li>The free blocks are linked together to form a freelist used for servicing future memory requests.</li>
			<li>When a memory request is received by the memory manager, some block on the freelist must be found that is large enough to service the request. If no such block is found, then the memory manager must resort to a <b>failure policy</b> (which may include expanding the memory pool, reorganizing the memory pool, etc.).</li>
		</SubList></li>
		<li>Two types of fragmentation:<SubList>
			<li>External fragmentation occurs when a series of memory requests result in lots of small free blocks, no one of which is useful for servicing typical requests.</li>
			<li>Internal fragmentation occurs when more than \(m\) words are allocated to a request for \(m\) words, wasting free storage.</li>
			<li><ImgComp src={"/articlePics/operating_systems/4.PNG"} style={{width: "80%"}}/></li>
		</SubList></li>
		<li><b>Sequential-Fit Methods:</b><SubList>
			<li>Sequential-fit methods attempt to find a "good" block to service a storage request. Let's assume that the free blocks are organized into a doubly linked list.</li>
			<li>There are two basic approaches to implementing the freelist. A simple linked-list implementation can be used, where each node of the linked list contains a pointer to a single free block in the memory pool. This is fine if there is space available for the linked list itself, separate from the memory pool.</li>
			<li>Another approach to storing the freelist is more complicated but saves space. Because the free space is free, it can be used by the memory manager to help it do its job; that is, the memory manager temporarily "borrows" space within the free blocks to maintain its doubly linked list.</li>
			<li>To do so, each unallocated block must be large enough to hold these pointers. In addition, it is usually worthwhile to let the memory manager add a few bytes of space to each reserved block for its own purposes.</li>
			<li><figure>
				<ImgComp src={"/articlePics/operating_systems/5.png"} style={{width: "80%"}}/>
				<figcaption>(a) A <b>free block</b> contains the tag bit field, the block size field, and two pointers for the freelist. The end of the block contains a second tag field and a second block size field.<br/>(b) A <b>reserved block</b> with a tag bit field and a block size field at the beginning of the block, and a second tag field at the end of the block.</figcaption>
			</figure></li>
			<li>When a block \(F\) is freed, it must be merged into the freelist. Merging is easily done due to the tag and size fields stored at the ends of each block.</li>
			<li>The memory manager first checks the unit of memory immediately preceding block \(F\) to see if the preceding block (call it \(P\)) is also free. If it is, then the memory unit before \(P\)'s tag bit stores the size of \(P\), thus indicating the position for the beginning of the block in memory.</li>
			<li>\(P\) can then simply have its size extended to include block \(F\).</li>
			<li>We also check the bit following the end of block \(F\). If this bit indicates that the following block (call it \(S\)) is free, then \(S\) is removed from the freelist and the size of \(F\) is extended appropriately.</li>
		</SubList></li>
		<li>Selecting a suitable free block:<SubList>
			<li>Assume that we have a memory pool with 200 units of storage. After some series of allocation requests and releases, we have reached a point where there are four free blocks on the freelist of sizes 25, 35, 32, and 45 (in that order). Assume that a request is made for 30 units of storage.</li>
			<li><b>First fit:</b><SubList>
				<li>The simplest method for selecting a block would be to move down the free block list until a block of size at least 30 is found. Any remaining space in this block is left on the freelist.</li>
				<li>If we begin at the beginning of the list and work down to the first free block at least as large as 30, we select the block of size 35. 30 units of storage will be allocated, leaving a free block with 5 units of space. Because this approach selects the first block with enough space, it is called <b>first fit</b>.</li>
			</SubList></li>
			<li><b>Circular first fit:</b><SubList>
				<li>A simple variation that will improve performance is, instead of always beginning at the head of the freelist, remember the last position reached in the previous search and start from there.</li>
				<li>When the end of the freelist is reached, search begins again at the head of the freelist.</li>
				<li>This modification reduces the number of unnecessary searches through small blocks that were passed over by previous requests.</li>
			</SubList></li>
			<li>There is a potential disadvantage to first fit: It might "waste" larger blocks by breaking them up, and so they will not be available for large requests later.</li>
			<li><b>Best fit:</b><SubList>
				<li>Best fit looks at the entire list and picks the smallest block that is at least as large as the request.</li>
				<li>In our example, the best fit for a request of 30 units is the block of size 32, leaving a remainder of size 2.</li>
				<li>Best fit has the disadvantage that it requires that the entire list be searched.</li>
				<li>Another problem is that the remaining portion of the best-fit block is likely to be small, and thus useless for future requests.</li>
				<li>Best fit tends to maximize problems of external fragmentation while it minimizes the chance of not being able to service an occasional large request.</li>
			</SubList></li>
			<li><b>Worst fit:</b><SubList>
				<li>A strategy contrary to best fit might make sense because it tends to minimize the effects of external fragmentation.</li>
				<li><b>Worst fit</b> allocates the largest block on the list hoping that the remainder of the block will be useful for servicing a future request.</li>
				<li>In our example, the worst fit is the block of size 45, leaving a remainder of size 15.</li>
				<li>Like best fit, worst fit requires searching the entire freelist at each memory request to find the largest block.</li>
				<li>Alternatively, the freelist can be ordered from largest to smallest free block, possibly by using a priority queue implementation.</li>
			</SubList></li>
			<li>If the requests are of widely ranging size, best fit might work well. If the requests tend to be of similar size, with rare large and small requests, first or worst fit might work well.</li>
			<li>Sequential-fit methods rely on a linked list of free blocks, which must be searched for a suitable block at each memory request. Thus, the time to find a suitable free block would be \(\Theta(n)\) in the worst case for a freelist containing \(n\) blocks.</li>
			<li>We also must either use additional space for the linked list, or use space within the memory pool to support the memory manager operations.</li>
			<li>In the second option, both free and reserved blocks require tag and size fields. Fields in free blocks do not cost any space (because they are stored in memory that is not otherwise being used), but fields in reserved blocks create additional overhead.</li>
		</SubList></li>
	</ul>
	<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li><b>Buddy Methods:</b><SubList>
				<li>The <b>buddy system</b> assumes that memory is of size \(2^N\) for some integer \(N\).</li>
				<li>Both free and reserved blocks will always be of size \(2^k\) for \(k \lt N\). At any given time, there might be both free and reserved blocks of various sizes.</li>
				<li>The buddy system keeps a separate list for free blocks of each size. There can be at most \(N\) such lists, because there can only be \(N\) distinct block sizes.</li>
				<li>When a request comes in for \(m\) words, we first determine the smallest value of \(k\) such that \(2^k\ge m\). A block of size \(2^k\) is selected from the free list for that block size if one exists. The buddy system does not worry about internal fragmentation: The entire block of size \(2k\) is allocated.</li>
				<li>If no block of size \(2^k\) exists, the next larger block is located. This block is split in half (repeatedly if necessary) until the desired block of size \(2^k\) is created. Any other blocks generated as a by-product of this splitting process are placed on the appropriate freelists.</li>
				<li><a href='https://en.wikipedia.org/wiki/Buddy_memory_allocation'>If memory is to be freed:</a><SubList numbered={true}>
					<li>Free the block of memory</li>
					<li>Look at the neighboring block - is it free too?</li>
					<li>If it is, combine the two, and go back to step 2 and repeat this process until either the upper limit is reached (all memory is freed), or until a non-free neighbour block is encountered.</li>
				</SubList></li>
				<li>The disadvantage of the buddy system is that it allows internal fragmentation.</li>
				<li>The primary advantages of the buddy system are:<SubList opened>
					<li>There is less external fragmentation.</li>
					<li>Search for a block of the right size is cheaper than, say, best fit because we need only find the first available block on the block list for blocks of size \(2^k\).</li>
					<li>Merging adjacent free blocks is easy.</li>
				</SubList></li>
				<li>The <b>buddy</b> for any block of size \(2^k\) is another block of the same size, and with the same address (i.e., the byte position in memory, read as a binary value) except that the \(k\)th bit is reversed.</li>
			</SubList></li>
			<li><b>Zones:</b><SubList>
				<li>If the application is sufficiently complex, it might be desirable to break available memory into several memory "zones", where each zone has a different memory management scheme.</li>
				<li>The advantage of zones is that some portions of memory can be managed more efficiently.</li>
				<li>The disadvantage is that one zone might fill up while other zones have excess memory if the zone sizes are chosen poorly.</li>
			</SubList></li>
			<li><b>Failure policies:</b><SubList>
				<li>In some situations, there simply might not be enough free memory to service the request, and the application may require that the request be serviced immediately.</li>
				<li>In this case, the memory manager has no option but to return an error, which could in turn lead to a failure of the application program.</li>
				<li>However, in many cases there are alternatives to simply returning an error. The possible options are referred to collectively as <b>failure policies</b>.</li>
				<li>In some cases, there might be sufficient free memory to satisfy the request, but it is scattered among small blocks:<SubList>
					<li>In this case, it might be possible to compact memory by moving the reserved blocks around so that the free space is collected into a single block.</li>
					<li>A problem with this approach is that the application must somehow be able to deal with the fact that all of its data have now been moved to different locations.</li>
					<li>If the application program relies on the absolute positions of the data in any way, this would be disastrous. </li>
					<li>One approach for dealing with this problem is the use of <b>handles</b>:<SubList>
						<li>A handle is a second level of indirection to a memory location.</li>
						<li>The memory allocation routine does not return a pointer to the block of storage, but rather a pointer to a variable that in turn points to the storage. This variable is the handle.</li>
						<li>The handle never moves its position, but the position of the block might be moved and the value of the handle updated.</li>
					</SubList></li>
				</SubList></li>
				<li>Another failure policy that might work in some applications is to defer the memory request until sufficient memory becomes available:<SubList>
					<li>While such a delay might be annoying to the user, it is better than halting the entire system.</li>
					<li>The assumption here is that other processes will eventually terminate, freeing memory.</li>
				</SubList></li>
				<li>Another option might be to allocate more memory to the memory manager:<SubList>
					<li>In a zoned memory allocation system where the memory manager is part of a larger system, this might be a viable option.</li>
					<li>In a C++ program that implements its own memory manager, it might be possible to get more memory from the system-level <code>new</code> operator, such as is done by a freelist.</li>
				</SubList></li>
				<li>The last failure policy that we will consider is <b>garbage collection</b>:<SubList>
					<li><CodePre language="cpp">{`
Integer p = new Integer[5];
Integer q = new Integer[10];
p = q;
					`}</CodePre></li>
					<li>The above would be considered bad form because the original space allocated to \(p\) is lost as a result of the third assignment. This space cannot be used again by the program. Such lost memory is referred to as <b>garbage</b>, also known as a <b>memory leak</b>.</li>
				</SubList></li>
			</SubList></li>
			<li>Garbage collection in LISP and Java:<SubList>
				<li>In particular, the LISP programming language uses a multilist representation, and all storage is in the form either of internal nodes with two pointers or atoms.</li>
				<li>In LISP, list objects are constantly being put together in various ways as temporary variables, and then all reference to them is lost when the object is no longer needed.</li>
				<li>Thus, garbage is normal in LISP, and in fact cannot be avoided during normal processing.</li>
				<li>In LISP, garbage collection consists of examining the managed memory pool to determine which parts are still being used and which parts are garbage.</li>
				<li>In particular, a list is kept of all program variables, and any memory locations not reachable from one of these variables are considered to be garbage.</li>
				<li>When the garbage collector executes, all unused memory locations are placed in free store for future access.</li>
				<li>It has the disadvantage, from a user's point of view, that every so often the system must halt while it performs garbage collection.</li>					
				<li>As in LISP, it is common practice in Java to allocate dynamic memory as needed, and to later drop all references to that memory.</li>
				<li>The garbage collector is responsible for reclaiming such unused space as necessary. This might require extra time when running the program.</li>
			</SubList></li>
			<li>Algorithms for garbage collection:<SubList>
				<li><b>Reference count algorithm:</b><SubList>
					<li>Here, every dynamically allocated memory block includes space for a count field.</li>
					<li>Whenever a pointer is directed to a memory block, the reference count is increased. Whenever a pointer is directed away from a memory block, the reference count is decreased.</li>
					<li>If the count ever becomes zero, then the memory block is considered garbage and is immediately placed in free store.</li>
					<li>This approach has the advantage that it does not require an explicit garbage collection phase, because information is put in free store immediately when it becomes garbage.</li>
					<li>Reference counts have several major disadvantages:<SubList opened>
						<li>A reference count must be maintained for each memory object.</li>
						<li><u>Garbage may contain cycles:</u> When two garbage memory objects contain a pointer to each other, their reference count won't be zero.</li>
					</SubList></li>
				</SubList></li>
				<li><b>Mark/sweep algorithm:</b><SubList>
					<li>Each memory object needs only a single mark bit rather than a reference counter field. When free store is exhausted, a separate garbage collection phase takes place as follows:<SubList numbered={true}>
						<li>Clear all mark bits</li>
						<li>Perform depth-first search (DFS) following pointers from each variable on the system's list of variables. Each memory element encountered during the DFS has its mark bit turned on.</li>
						<li>A "sweep" is made through the memory pool, visiting all elements. Unmarked elements are considered garbage and placed in free store.</li>
					</SubList></li>
					<li>The advantages of the mark/sweep approach are that it needs less space than is necessary for reference counts, and it works for cycles.</li>
					<li>There is a major disadvantage. This is a "hidden" space requirement needed to do the processing.</li>
					<li>DFS is a recursive algorithm: Either it must be implemented recursively, in which case the compiler's runtime system maintains a stack, or else the memory manager can maintain its own stack.</li>
					<li><b>Deutsch-Schorr-Waite garbage collection algorithm:</b><SubList>
						<li>A clever technique allows DFS to be performed without requiring additional space for a stack. At each step deeper into the traversal, instead of storing a pointer on the stack, we "borrow" the pointer being followed. This pointer is set to point back to the node we just came from in the previous step.</li>
						<li>Each borrowed pointer stores an additional bit to tell us whether we came down the left branch or the right branch of the link node being pointed to. At any given instant we have passed down only one path from the root, and we can follow the trail of pointers back up.</li>
						<li>As we return (equivalent to popping the recursion stack), we set the pointer back to its original position so as to return the structure to its original condition. This is known as the <b>Deutsch-Schorr-Waite garbage collection algorithm</b>.</li>
					</SubList></li>
				</SubList></li>
			</SubList></li>
	</ul>
</div>

<h2>Indexing</h2>
<div className="content" data-source={20}>
	<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
		<li><b>Indexing:</b><SubList>
			<li>An <b>entry-sequenced file</b> stores records in the order that they were added to the file.</li>
			<li>Entry-sequenced files are the disk-based equivalent to an unsorted list and so do not support efficient search.</li>
			<li>A typical database might contain multiple search keys.</li>
			<li>Indexing is the process of associating a key with the location of a corresponding data record.</li>
			<li><b>External sort:</b> A sorting algorithm that is applied to data stored in peripheral storage such as on a disk drive.</li>
			<li>An external sort typically uses the concept of a key sort, in which an <b>index file</b> is created whose records consist of key/pointer pairs.</li>
			<li>Each key is associated with a pointer to a complete record in the main database file.</li>
			<li>The index file could be sorted or organized using a tree structure, thereby imposing a logical order on the records without physically rearranging them.</li>
			<li>One database might have several associated index files, each supporting efficient access through a different key field.</li>
		</SubList></li>
		<li>Primary and secondary key:<SubList>
			<li>Each record of a database normally has a unique identifier, called the <b>primary key</b>.</li>
			<li>A key field such as salary, where a particular key value might be duplicated in multiple records, is called a <b>secondary key</b>.</li>
			<li>The <b>secondary key index</b> (or more simply, <b>secondary index</b>) will associate a secondary key value with the primary key of each record having that secondary key value.</li>
			<li>At this point, the full database might be searched directly for the record with that primary key, or there might be a <b>primary key index</b> (or primary index) that relates each primary key value with a pointer to the actual record on disk.</li>
		</SubList></li>
		<li><b>Linear indexing:</b><SubList>
			<li>A <b>linear index</b> is an index file organized as a sequence of key-value pairs where the keys are in sorted order and the pointers either<SubList opened>
				<li>point to the position of the complete record on disk</li>
				<li>point to the position of the primary key in the primary index</li>
				<li>or are actually the value of the primary key.</li>
			</SubList></li>
			<li>A linear index provides convenient access to variable-length database records, because each entry in the index file contains a fixed-length key field and a fixed-length pointer to the beginning of a (variable-length) record.</li>
			<li><ImgComp src={"/articlePics/operating_systems/6.jpeg"} style={{width: "80%"}}/></li>
			<li>If the database contains enough records, the linear index might be too large to store in main memory. This makes search of the index more expensive because many disk accesses would typically be required by the search process.</li>
			<li>One solution to this problem is to store a second-level linear index in main memory that indicates which disk block in the index file stores a desired key:<SubList>
				<li>Because the second-level index is stored in main memory, accessing a record by this method requires two disk reads: one from the index file and one from the database file for the actual record.</li>
				<li><ImgComp src={"/articlePics/operating_systems/7.jpeg"} style={{width: "80%"}}/></li>
				<li>Every time a record is inserted to or deleted from the database, all associated secondary indices must be updated. Updates to a linear index are expensive, because the entire contents of the array might be shifted.</li>
				<li>Another problem is that multiple records with the same secondary key each duplicate that key value within the index.</li>
				<li>When the secondary key field has many duplicates, this duplication might waste considerable space.</li>
			</SubList></li>
			<li>One improvement on the simple sorted array is a two-dimensional array where each row corresponds to a secondary key value:<SubList>
				<li>A row contains the primary keys whose records have the indicated secondary key value.</li>
				<li>Now there is no duplication of secondary key values, possibly yielding a considerable space savings.</li>
				<li>The cost of insertion and deletion is reduced, because only one row of the table need be adjusted.</li>
				<li><ImgComp src={"/articlePics/operating_systems/8.jpeg"} style={{width: "80%"}}/></li>
				<li>A drawback to this approach is that the array must be of fixed size, which imposes an upper limit on the number of primary keys that might be associated with a particular secondary key.</li>
				<li>Those secondary keys with fewer records than the width of the array will waste the remainder of their row.</li>
			</SubList></li>
			<li>A better approach is to have a one-dimensional array of secondary key values, where each secondary key is associated with a linked list:<SubList>
				<li>This works well if the index is stored in main memory, but not so well when it is stored on disk because the linked list for a given key might be scattered across several disk blocks.</li>
				<li>The secondary key index in such an organization is also known as an <b>inverted list</b> or <b>inverted file</b>.</li>
				<li>It is inverted in that searches work backwards from the secondary key to the primary key to the actual data record. It is called a list because each secondary key value has (conceptually) a list of primary keys associated with it.</li>
			</SubList></li>
			<li>The main problem with the linear index is that it is a single, large array that does not adjust well to updates because a single update can require changing the position of every key in the index.</li>
			<li>Inverted lists reduce this problem, but they are only suitable for secondary key indices with many fewer secondary key values than records.</li>
		</SubList></li>
		<li><b>ISAM:</b><SubList>
			<li>The linear index would perform well as a primary key index if it could somehow be broken into pieces such that individual updates affect only a part of the index.</li>
			<li>ISAM is based on a modified form of the linear index.</li>
			<li>Records are stored in sorted order by primary key. The disk file is divided among a number of cylinders on disk. Each cylinder holds a section of the list in sorted order.</li>
			<li>Initially, each cylinder is not filled to capacity, and the extra space is set aside in the cylinder overflow.</li>
			<li>In memory is a table listing the lowest key value stored in each cylinder of the file.</li>
			<li>Each cylinder contains a table listing the lowest key value for each block in that cylinder, called the <b>cylinder index</b>.</li>
			<li>When new records are inserted, they are placed in the correct cylinder's overflow area (in effect, a cylinder acts as a bucket). If a cylinder's overflow area fills completely, then a system-wide overflow area is used.</li>
			<li>Search proceeds by determining the proper cylinder from the system-wide table kept in main memory.</li>
			<li>After initial construction of the database, so long as no new records are inserted or deleted, access is efficient because it requires only two disk fetches:<SubList>
				<li>The first disk fetch recovers the block table for the desired cylinder.</li>
				<li>The second disk fetch recovers the block that, under good conditions, contains the record.</li>
			</SubList></li>
			<li>After many inserts, the overflow list becomes too long, resulting in significant search time as the cylinder overflow area fills up.</li>
			<li>Under extreme conditions, many searches might eventually lead to the system overflow area.</li>
			<li>The "solution" to this problem is to periodically reorganize the entire database. This means re-balancing the records among the cylinders, sorting the records within each cylinder, and updating both the system index table and the within-cylinder block table.</li>
			<li>ISAM break down for a truly large database where the number of cylinders is too great for the top-level index to fit in main memory.</li>
		</SubList></li>
	</ul>
	<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
		<li>Tree-based indexing:<SubList>
			<li>Linear indexing is efficient when the database is static, that is, when records are inserted and deleted rarely or never.</li>
			<li>ISAM is adequate for a limited number of updates, but not for frequent changes.</li>
			<li>In their most general form, database applications have the following characteristics:<SubList>
				<li>Large sets of records that are frequently updated.</li>
				<li>Search is by one or a combination of several keys.</li>
				<li>Key range queries or min/max queries are used.</li>
			</SubList></li>
			<li>For such databases, a better organization must be found. One approach would be to use the binary search tree (BST) to store primary and secondary key indices.</li>
			<li>Unfortunately, the BST can become unbalanced. Even under relatively good conditions, the depth of leaf nodes can easily vary by a factor of two.</li>
			<li>This might not be a significant concern when the tree is stored in main memory but when the tree is stored on disk, the depth of nodes in the tree becomes crucial.</li>
			<li>Many times a node is not on the same block as its parent. Thus, each access to a BST node could potentially require that another block to be read from disk.</li>
			<li>We can solve these problems by selecting another tree structure that automatically remains balanced after updates, and which is amenable to storing in blocks.</li>
		</SubList></li>
		<li><b>2-3 Trees:</b><SubList>
			<li>The <b>2-3 tree</b> is not a binary tree, but instead its shape obeys the following definition:<SubList opened>
				<li>A node contains one or two keys.</li>
				<li>Every internal node has either two children (if it contains one key) or three children (if it contains two keys).</li>
				<li>All leaves are at the same level in the tree, so the tree is always height balanced.</li>
				<li>For every node, the values of all descendants in the left subtree are less than the value of the first key, while values in the center subtree are greater than or equal to the value of the first key.</li>
				<li>If there is a right subtree (equivalently, if the node stores two keys), then the values of all descendants in the center subtree are less than the value of the second key, while values in the right subtree are greater than or equal to the value of the second key.</li>
			</SubList></li>
			<li><ImgComp src={"/articlePics/operating_systems/9.jpeg"} style={{width: "80%"}}/></li>
			<li>Nodes are shown as rectangular boxes with two key fields. Internal nodes with only two children have an empty right key field. Leaf nodes might contain either one or two keys.</li>
			<li>A 2-3 tree of height \(k\) has at least \(2^{"{k-1}"}\) leaves, because if every internal node has two children it degenerates to the shape of a complete binary tree.</li>
			<li>A 2-3 tree of height \(k\) has at most \(3^{"{k-1}"}\) leaves, because each internal node can have at most three children.</li>
			<li>Searching for a value in a 2-3 tree is similar to searching in a BST.</li>
			<li>Insertion:<SubList>
				<li>Insertion into a 2-3 tree is similar to insertion into a BST to the extent that the new record is placed in the appropriate leaf node.</li>
				<li>Unlike BST insertion, a new child is not created to hold the record being inserted, that is, the 2-3 tree does not grow downward.</li>
				<li>The first step is to find the leaf node that would contain the record if it were in the tree.</li>
				<li>If this leaf node contains only one value, then the new record can be added to that node with no further modification to the tree.</li>
				<li>If we insert the new record into a leaf node \(L\) that already contains two records, then more space must be created.</li>
				<li>The first step is to split \(L\) into two nodes. Thus, a new node, call it \(L'\), must be created from free store.</li>
				<li>\(L\) receives the record with the least of the three key values. \(L'\) receives the greatest of the three.</li>
				<li>The record with the middle of the three key value is passed up to the parent node along with a pointer to \(L'\). This is called a <b>promotion</b>. The promoted key is then inserted into the parent.</li>
				<li>If the parent currently contains only one record (and thus has only two children), then the promoted record and the pointer to \(L'\) are simply added to the parent node.</li>
				<li>If the parent is full, then the split-and-promote process is repeated.</li>
				<li>When deleting a record from the 2-3 tree, there are three cases to consider:<SubList>
					<li>The simplest occurs when the record is to be removed from a leaf node containing two records. In this case, the record is simply removed, and no other nodes are affected.</li>
					<li>The second case occurs when the only record in a leaf node is to be removed.</li>
					<li>The third case occurs when a record is to be removed from an internal node. In both the second and the third cases, the deleted record is replaced with another that can take its place while maintaining the correct order, similar to removing a node from a BST.</li>
					<li> If the tree is sparse enough, there is no such record available that will allow all nodes to still maintain at least one record. In this situation, sibling nodes are merged together.</li>
				</SubList></li>
				<li>The 2-3 tree insert and delete routines do not add new nodes at the bottom of the tree. Instead they cause leaf nodes to split or merge, possibly causing a ripple effect moving up the tree to the root.</li>
				<li>If necessary the root will split, causing a new root node to be created and making the tree one level deeper.</li>
			</SubList></li>
		</SubList></li>
		<li><b>B-trees:</b><SubList>
			<li>The B-tree is shallow, in part because the tree is always height balanced.</li>
			<li>Update and search operations affect only those disk blocks on the path from the root to the leaf node containing the query record. The fewer the number of disk blocks affected during an operation, the less disk I/O is required.</li>
			<li>B-trees keep related records (that is, records with similar key values) on the same disk block, which helps to minimize disk I/O on range searches.</li>
			<li>B-trees guarantee that every node in the tree will be full at least to a certain minimum percentage.</li>
			<li>A B-tree of order \(m\) is defined to have the following shape properties:<SubList>
				<li>The root is either a leaf or has at least two children.</li>
				<li>Each internal node, except for the root, has between \(⌈m/2⌉\) and \(m\) children.</li>
				<li>All leaves are at the same level in the tree, so the tree is always height balanced.</li>
			</SubList></li>
			<li>A 2-3 tree is a B-tree of order three.</li>
			<li>In a typical application, the B-tree's access to the disk file will be managed using a buffer pool and a block-replacement scheme such as LRU.</li>
			<li>B-tree insertion is a generalization of 2-3 tree insertion.</li>
			<li>The first step is to find the leaf node that should contain the key to be inserted, space permitting. If there is room in this node, then insert the key.</li>
			<li>If there is not, then split the node into two and promote the middle key to the parent. If the parent becomes full, then it is split in turn, and its middle key promoted.</li>
		</SubList></li>
		<li><b>B+ trees:</b><SubList>
			<li>The most significant difference between the B+ tree and the BST or the standard B-tree is that the B+ tree stores records only at the leaf nodes.</li>
			<li>Internal nodes store key values, but these are used solely as placeholders to guide the search.</li>
			<li>Depending on the size of a record as compared to the size of a key, a leaf node in a B+ tree of order \(m\) might have enough room to store more or less than \(m\) records. The requirement is simply that the leaf nodes store enough records to remain at least half full.</li>
			<li>The leaf nodes of a B+ tree are normally linked together to form a doubly linked list.</li>
			<li>Each internal node should be assumed to hold in the leftmost position an additional key that is less than or equal to any possible key value in the node's leftmost subtree.</li>
			<li>B+ tree implementations typically store an additional dummy record in the leftmost leaf node whose key value is less than any legal key value.</li>
			<li>B+ trees are exceptionally good for range queries. Once the first record in the range has been found, the rest of the records with keys in the range can be accessed by sequential processing of the remaining records in the first node, and then continuing down the linked list of leaf nodes as far as necessary.</li>
			<li>B+ tree insertion is similar to B-tree insertion:<SubList>
				<li>First, the leaf \(L\) that should contain the record is found.</li>
				<li>If \(L\) is not full, then the new record is added, and no other B+ tree nodes are affected.</li>
				<li>If \(L\) is already full, split it in two (dividing the records evenly among the two nodes) and promote a copy of the least-valued key in the newly formed right node.</li>
				<li>As with the 2-3 tree, promotion might cause the parent to split in turn, perhaps eventually leading to splitting the root and causing the B+ tree to gain a new level. B+ tree insertion keeps all leaf nodes at equal depth.</li>
			</SubList></li>
			<li>Deletion:<SubList>
				<li>To delete record \(R\) from the B+ tree, first locate the leaf \(L\) that contains \(R\). If \(L\) is more than half full, then we need only remove \(R\), leaving \(L\) still at least half full.</li>
				<li>If deleting a record reduces the number of records in the node below the minimum threshold (called an <b>underflow</b>), then we must do something to keep the node sufficiently full.</li>
				<li>The first choice is to look at the node’s adjacent siblings to determine if they have a spare record that can be used to fill the gap.</li>
				<li>This process might require that the parent node has its placeholder key value revised to reflect the true first key value in each node.</li>
				<li>If neither sibling can lend a record to the under-full node (call it \(N\)), then \(N\) must give its records to a sibling and be removed from the tree.</li>
				<li>This merge process combines two subtrees of the parent, which might cause it to underflow in turn. If the last two children of the root merge together, then the tree loses a level.</li>
			</SubList></li>
			<li>Because B-trees have become so popular, many algorithm designers have tried to improve B-tree performance. One method for doing so is to use the B+ tree variant known as the B* tree:<SubList>
				<li>The B* tree is identical to the B+ tree, except for the rules used to split and merge nodes.</li>
				<li>Instead of splitting a node in half when it overflows, the B* tree gives some records to its neighboring sibling, if possible.</li>
				<li>If the sibling is also full, then these two nodes split into three. Similarly, when a node underflows, it is combined with its two siblings, and the total reduced to two nodes. Thus, the nodes are always at least two thirds full.</li>
			</SubList></li>
			<li>The asymptotic cost of search, insertion, and deletion of records from B-trees, B+ trees, and B* trees is \(\Theta(\log n)\) where \(n\) is the total number of records in the tree.</li>
			<li>However, the base of the log is the (average) branching factor of the tree. Typical database applications use extremely high branching factors, perhaps 100 or more.</li>
		</SubList></li>
	</ul>
</div>

</>