aws IAM
Identity access management

REGISTERING
returns a console sign in link

make sure you go and make a user

to create a virtual MFA download google authenticator and put your MFA codes in it

CREATE ROLES
creating roles adds functionality to your Virtual Machine Server

Add EC2 & give EC2 Full access to the S3 service

Then name it properly

What have we learnt so far...

IAM is universal.

The root account is the first account created when first setup your AWS account it has full access to anything.

New users have NO PERMISSIONS when first created

New users are assigned Access Key ID & Secret Access Keys are not the same as the password

Always setup MFA on your root account

Creating a billing alarm.
Go to billing dashboard
Click Billing Preferences
Enable Billing Alerts

THEN
Click on Alerts then billing
then create a new alarm then confirm it with your email

S3 101

Safe Place to store your files
It is a object based storage
The data is spread across multiple devices and facilities

S3 is object based and it allows you to upload files
Files can be from 0 Bytes to 5TB
There is unlimited storage
Files are stored in Buckets

S3 is a universal namespace. That is, names must be unique globally (TWO PEOPLE CANNOT HAVE THE SAME NAME)

https://s3-eu-west-1.amazonaws.com/<bucketname>

When you upload to s3 you will get a 200 code

S3 Object

> Key (Name of the Object)
> Value (Sequence of Bytes)
> Version ID(Important for versioning) (So you can have version control with the same object)
> Metadata (Data about the data you are storing)
> Subresources .Access Control Lists .Torrent

How does data consistency work in S3

> Read and Write Consistency for puts of new objects
> Eventual Consistency for overwrite puts & deletes (can take some time to propagate) (when you upload version 2 and try to read it you might get version 1 or version 2 but if you wait a second you will get version 2 always)
> If you write a new file you will be able to get that data immediately
> If you update or delete you might get the older version or not because it takes some time for data to propagate.
> Amazon guarantees 11 x 9's durability

S3 has the following features;

> Tiered Storage Available
> Lifecycle Management
> Versioning
> Encryption
> MFA Delete
> Securing data using Access Control Lists and Bucket Policies

S3 Storage Classes

1. S3 Standard - 11 x 9's guarantee stored redundantly accoress multiple devices in multiple facilities and designed to sustain the loss of 2 facilities concurrently
2. S3 - IA (Infrequenly Access) : When you have data that is access less frequently but requires rapid access you are charged with a retrieval fee.
3. S3 One Zone - IA ALSO KNOW AS (S3 Reduced Redundancy Storage) : For where you want a low cost option but do not require fast retrieval
4. S3 - Intelligent Tiering : Will move your S3 in different tiers based on how you access your data.
5. S3 Glacier - Secure Archiving but will take minutes to hours to retrieve
6. S3 Glacier Deep Archive - Same as S3 Glacier but will take 12 hours to retrieve

Everyhitng is miliseconds in retrieval.

You are charged for S3 om the following ways;

> Storage
> Requests
> Storage Management Pricing (Different Tiers)
> Data Transfer Pricing
> Transfer Acceleration (Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distanes between your endd users and an S3 bucket. It takes advantage of cloubfronts globally distributed edge locations. As the data arrives at an edge location,data is routed to Amazon S3 over an optimized network path)
> Cross Region Replication (It replicates objects in different regions from USA -> Sydney)

Exam Tips

> S3 is object based.
> Files can be from 0 bytes to 5TB.
> There is unlimited storage.
> Files are stored in Buckets.
> S3 is a universal namespace. That is names mus be unique globally.
> Not suitable to install an operating system on.
> Successful uploads will get a generate a HTTP 200 status code
> You can turn on MFA Delete
> Key (name of the obj)
> Value (sequence of bytes that makes the object)
> VersionID(versioning)
> Metadata (Data about the data you are storing)
> Subresources (Access Control Lists and Torrent)
> S3 Tiers (S3 Standard, S3 IA, S3 One Zone IA, S3 Intelligent Tiering, S3 Glacier, S3 Glacier Deep Archive)

Creating a S3 bucket

S3 only have a global view

Edit Public Access Settings (To make files public)
Then you have to make your files public through actions
We can make our files public by hitting make public in actions

S3 Exam Tips

> Buckets are a universal namespace
> Upload an object to S3 receive a 200 http code
> S3 , S3 - IA, S3 One Zone,S3 Intelligent Tiering, S3 Glacier, S3 Glacier Deep Archive
> Control access to buckets using Buckets ACL or using Bucket Policies

S3 Security and Encryption

> By Default buckets are private by default
> Can be set by Bucket Policies(bucket by a whole) & Access Control Lists(can go into a file)
> S3 buckets can be configured to create access logs which log all requests made to the S3 bucket.
> It can be sent to a another bucket andd even another bucket in a another account

Encryption in Transit is achieved by

> SSL / TLS (HTTPS)

Encryption at Rest (Server Side) is achieved by

> S3 Managed Keys - SSE - S3 (Server Side Encryption S3)
> AWS Key Management Service, Managed Keys - SSE - KMS
> Server Side Encryption With Customer Provided Keys - SSE - C
> Client Side Encryption (you encrypt the object then send it to S3)

Using Versioning with S3

> Stores all Versions of an object (including all writes and even if you delete an object)
> Great backup tool
> Once enabled, Versioning cannot be disabled, only suspendded
> Integrates with Lifecycle rules
> Versioning's MFA Delete capability, which uses multi-facor authentication, can be used to provide an additional layer of security

Exercise

> Create a new bucket
> Enable Versioning
> And you can access versions with th version tab

Versioning Exam Tips

> Versioning Stores all the versions of a object so you dont overwrite them
> Versioning puts delete markers on the items
> You can delete items by showing all the versions
> A great backup tool
> Integrates with Lifecycle Rules
> Versioning's MFA Delete Capabilitty, which muli-factor authentication, can be used to providde an additional layer of security.

S3 Lifecycle Management(Lab)

> Manage it through the Management Tab
> Then create the lifecycle methods

Lifecycle Management Exam Tips

> Automates moving your objects between the different storage tiers
> Can be used in conjunction with versioning
> Can be applied to current versions and previous versions.

Cross Region Replication

> Go to Management and Replication
> Enable versioning if not enabled.
> If you try to add something on the parent bucket it will replicate the item to the cross regioned bucket
> Will not replicate delete markers!!!
> Replicates items in buckets.

Cross Region Replication Exam Tips

> Versioning must be enabled on both the source and destination buckets.
> Regions must be unique
> Files in an existing bucket are not replicated automatically

Transfer Acceleration

> Users from all around the world can transfer data in S3 much faster
> Users will upload to edge locations then edge locations will upload it using amazons backbone network

CloudFront Overview

> Cloudfront is a CDN (Content Delivery Network)
> CDN (Content Delivery Network) - A system of distributed servers that deliver wepages and other web content to a user based on the geographic locations of the user, the origin of the webpage, and a content delivery server.

CloudFront Terminology

> Edge Location - This is the location where content will be cached. This is seperate to an AWS Region/ Availability Zone.
> Origin - This is the origin of all the files that the CDN will distribute. This can be an S3 Bucket, an EC2 Instance, an Elastic Load Balancer, or Route53.
> Distribution - This is the name given to the CDN which consists of a collection of Edge Locations

CloudFront more Overview

> When a user requests content the edge location will cache it for 48/72 hours depending on the server. So when people try to look for the same content they can pull it faster plus the edge location can pull the data using Amazon's backbone network.
> Amazon CloudFront can be used to deliver your entire website, including dynamic, static, streaming, and interactive content using a global network of edge locations. Requests for your content are automatically routed to the nearest edge location, so content is delivered with the best possible performance.
> There are two kinds of distribution. Web Distribution and RTMP (Used for Media Streaming).
> Edge locations are not just READ only. You can write to them too.
> Objects are cached for the life of the TTL (Time to Live).
> You can clear cached objects, but you will be charged.

CloudFront Lab

> CloudFront is Under Distribution Service
> Create a Distribution then Click Web
> There you will select a bucket as a origin domain name
> CloudFront will be accessed using <cloudfrontdomain name>/<iteminthebucket>
> EXAMPLE d3blv6rv451urx.cloudfront.net/carlo-test.jpg
> You can set up a CloudFront File Invalidation in the settings.
> Basically it will invalidate the cached file in the edge location and fetch it from the origin.

CloudFront Exam Tips

> Edge Location - This is the location where content will be cached.
> Origin - This is the origin of all the files the CDN will distribute. Can either be an S3 Bucket, an EC2 Instance, an Elastic Load Balancer, or Route53.
> DIistribution - This is the name given the CDN which consists of a collection of Edge Locations.
> Web Distribution - Typically usedd for Websites.L0
> RTMP - For Adobe Flash and Media Streaming.
> Edge Locations are not just Read Only - You can Write on them too.
> Objects are cached for the life of the TTL
> You can invalidate cached objects, but you will be charged.

Snowball Overview

> Snowballs are a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of AWS.
> Using Snowball addresses common challenges with large-scale data transfers including high network costs, long transfer times, and security concerns.
> Transferring data with Snowball is simple, fast, secure, and can be as little as one-fifth the cost of high-speed internet
> Snowball comes in either 50TB or 80TB size.
> Snowball uses multiple layers of security designed to protect your data including tamper-resistant enclosures, 256-bit encryption, and an industry-standard Trusted Platform Module (TPM) designed to ensure both security and full chain-of-custody of your data.
> Once the data transfer job has been processed and verified, AWS performs a software erasure of the Snowball Appliance.
> AWS Snowball Edge is a 100TB data transfer device with on-board storage and compute capabilities (AWS LAMBDA FUNCTIONS). You can use Snowball Edge to move large amounts of data into and out of AWS, as a temporary storage tier for large local datasets, or to support local workloads in remote or offline locations.
> Snowball Edge connects to your existing applications and infrastructure using standard storage interfaces, streamlining the data transfer process and minimizing setup and integration.
> Snowball Edge can cluster together to form a local storage tier andd process your data on-premises, helping ensure your applications continue tot run even when they are not able to access the cloud.
> AWS Snowmobile is a Exabyte-scale data transfer service used to move extremely large amounts of data to AWS.
> You can transer up 100PB per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck. Snowmobile makes it easy to move massive volumes of data to the cloud, including video libraries, image repositories, or even a complete data center migration. Transferring data with Snowmobile is secure, fast, and cost effective.

Snowball Exam Tips

> Snowball and import and export from S3

Storage Gateway

> AWS Storage Gateway is a service that connects an on-premises software appliance with cloud-based storage to provided seamless and secure integration between an organization's on-premises IT enviorment and AWS's storage infrastructure. The service enables you to securely store data to the AWS cloud for scalable and cost-effective storage.
> AWS Storage Gateway is a physical or virtual device that will replicate items into a AWS Storage Space.
> AWS Storage Gateway is available as a virtual machine image that you install on a host in your data center.
> Storage Gateway supports either VMware ESXi or Microsoft Hyper-V.
> Once you've installed your gateway and associated it with your AWS account through the activation process, you can use the AWS Management Console to create the storage gateway option that is right for you!
> Storage Gateways have Three different types

1. File Gateway(NFS & SMB) - Used for storing files.
   > Files are stored as Objects in your S3 Bucket accessed thorugh a Network File System (NFS).
   > Ownership, permissions, and timestamps are durably storedd in S3 in the user-metadata of the object associated with the file.
   > Once objects are transferred to S3, they can be managed as native S3 objects, and bucket policies such as versioning, lifecycle management, andd cross-region replication apply directly to objects stored in your bucket.
2. Volume Gateway (iSCSI) - Used to store copies of hard drives. (Stored Volumes & Cached Volumes)
   > The volume interface presents your applications with disk volumes using the iSCSI block protocol.
   > Data written to these volumes can be asynchronously backed up as point-in-time snapshots of your volumes, and stored in the cloud as Amazon EBS snapshots.
   > Snapshots are incremental backups that capture only changed blocks. All snapshot storage is also compressed to minimize your storage charges.
   > Types of Volume Gateway
   > (Stored Volumes)
   > Stored Volumes let you store your primary data locally, while asynchronously backing up that data to AWS.
   > Stored Volumes provide your on-premises applications with low-latency access to their entire datasets, while providing durable, off-site backups.
   > You can create storage volumes and mount them as iSCSI devices from your on-premises application servers.
   > Data written to your stored volumes is stored on your on-premises storage hardware. This data is asynchronously backed up to Amazon Simple Storage Service (Amazon S3) in the form of Amazon Elastic Block Store (Amazon EBS) snapshots. 1GB - 1TB in size for Stored Volumes.
   > ( Cached Volumes )
   > Cached Volumes let you Amazon Simple Storage Service (S3) as your primary data storage while retaining frequently accessed data locally in your storage gateway.
   > Cached Volumes minimized the need to scale your on-premise storage infrastructure, while still providing your applications with low-latency access to their frequently accessed data.
   > You can create storage volumes up to 32 TB in size and attach them as iSCSI devices from your on-premises application servers.
   > Your gateway stores data that you write to the volumes in Amazon S3 and retains recently read data in your on-premises storage gateway's cache and uploadd buffer storage. 1GB - 32TB in size for Cached Volumes.
3. Tape Gateway (VTL Virtual Tape Library)
   > Tape Gateway offers a durable, cost effective solution to archive your data in the AWS Cloud.
   > The VTL interface it provides lets you leverage your existing tape-basedd backup application infrastructure to store data on virtual tape cartridges that your create on your tape gateway.
   > Each tape gateway is preconfigured with a media changer and tape drives, which are available to your exisiting client backup applications as iSCSI devices.
   > You add tape cartridges as you need archive your data. Supported by NetBackup, Backup Exec, Veeam etc.

Exam Tips Storage Gateway

> File Gateway - For flat files stored directly on S3
> Volume Gateway - Stored Volumes - Entire Dataset is Stored on site and is asyncronously backed up to S3. Cached Volumes - Dataset is stored in S3 and most frequently accessed data is cached on site.
> Gateway Virtual Tape Library

Summarization of S3 & IAM
Identity Access Management Consists of The Following:
1. Users
2. Groups
3. Roles
4. Policies
