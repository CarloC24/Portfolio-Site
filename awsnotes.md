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
