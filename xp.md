Jetzerp private limited, karaikudi(18-Jan-2023 to 5-Dec-2024):-
    1. On January 18, 2023, I have joined jetzerp private ltd, in karaikudi, as a management trainee, there i was junior to a flutter developer, so i purchased a 
    course on udemy on flutter development and learned it and supported the development process of jetzerp's mobile application like:
        *Appraiser app:-
        An app that is being developed for car buying and selling American firm named Autobuy, where the appraisers inside Autobuy track their leads, communicate
        with both the car buyer and seller. Since i was a junior, my responsibilities at that time were, adding spinners for api calls, showing loading progress
        bar for image and video uploads, in a seperate sandbox creating a dummy app with attractive designs as instructed by my senior.
        *Inventory Checker app:-
        An app that is being developed for a Borewell drilling products manufacturing company named Apex industries located in Trichy, india. As a manufacturing
        company it has lot of raw materials, semi-finished products, fully assembled products, and they managed their inventory and manufacturing processes
        with a open source erp named odoo, but at each month end they count the products with pen and paper and update it in a xl and upload it to odoo for inventory updation, it was time consuming process, so our company decided to remove the pen and paper work during inventory count with a app. I created that app, which has functionalities like scanning the barcode of the product and the worker need to enter the quantity of the product, which is directly updated in the odoo's database, with the help of api calls.

        While learning flutter, i was at my final semester of my college, So i have developed some apps for my friends final year project and quiz competitions also,
        *Genmo app(Generator Temperature monitoring app):-
            I have collaborated with my friend from Electronics and communication engineering department, who with some sensors and micro-controllers created a device that senses the temperature of fuel powered electricity generating generator, he wanted to see the temperature of the engine in his mobile phone with a app, that's why he came to me, i'm also interested to work with him, so i guided him to put the temperature data into firebase database and i have created a app that fetches the data and display it, other than temperature, there were some additional information about the generator he saved in the firebase and i fetched and displayed them, but i don't remember them exactly, since it was 2.5 years before.
        *Quiz app:-
            I have also created a app for a quiz event which is a part of EEE(Electrical and electronics engineering) symposium, where the participants where asked with multiple choice questions related to EEE, if they choose a wrong answer the app would display a funny quote for their mistake and for correct answers it appreciates them, and at the end it evaluates their score and store it in the firebase db. And my friend who asked me to create this app has a admin login where he can see the participants, their answers and scores, with those data, he can announce the winner at the end.
        
    2. After 4 months as a flutter developer in jetzerp, they switched me to be a junior for odoo developer, since they don't have any projects on app development,  so i started learning odoo development, actually odoo is a erp like SAP, I learned it from a youtube channel named odoomates, and i was guided to use ubuntu for the first time by my senior, he also taught me to host odoo application in a EC2 instance.
    odoo is an erp that is built using MVC(model view controller) architecture, where python is used for its backend, postgresql as database, javascript and xml for the frontend, most of the works need to be done on python, so i enrolled on a python course in udemy, where i learned a lot about development, while pursuing the course:-
     * i recreated the classic snake and pong game with tkinter and turtle graphics
     * created a selenium script that scraps billboard site on provided date and creates a spotify playlist in my spotify account with the songs mentioned on that billboard site on provided date
     * created a pomodoro app
     * created a automatic birthday wisher service which automatically sends a email of birthday wishes to my friends.
      And as a odoo developer in jetzerp, i have done the following,
        Maintained a odoo 14 erp site(Apex industries, trichy) and done the following:
        *A module that imports purchase orders on zoho books and store it in postgresql db which is going to be reflected in the odoo erp, for this feature i have gone throught the zoho's api documentation and understand their endpoints rate limits per minute, created a client in zoho books so that we can get the necessary credentials like client_id and client_secret for successfull integration, learned about access tokens, refresh tokens. For successful purchase order import, before importing the purchase order we need to successfully import the vendors and items mentioned in the purchase order. So the module that i created in odoo is responsible for importing, vendors, items and purchase orders from zoho-books to odoo's postgresql database
        *And as a update on that module, i have learned about webhooks and created a webhook endpoint, which is being triggered by zoho books webhooks on event of creation of a vendor or item or purchase-order in zoho book, and the endpoints "/store_vendor", "/store_item", "/store_po", each get triggered by appropriate zoho books event and the data is stored in odoo db, off-loading a need for clicking the import buttons manually.

        *Created a module that generates following reports:-
            Inventory report(using python xlwt package): Shows the on-hand quantity, inward, outward quantity and remaining quantity of products in odoo inventory for the specified date range, for this feature, i query a table named stock_move_line, filter it out with the date range, implemented some loops to find the on_hand quantity, inward_quantity, outward_quantity, and remaining available quantity within that from-date to to-date, for all products in the iventory
            Vendor Success rate: with this report we can find out the percentage of quality products delivered by the vendor, for this i query a table named quality_check, where i can get the pass and fail quantities of a  product that has gone through quality inspection, with that data i had find out the percentage of passed and failed quantities of a product from a particular vendor, and also this report can be taken by focussing on product, where it shows, who are the vendors delivering this product with what success rate they are giving OR by focussing on vendor, where it shows, what are the products delivered by this vendor with what success rate
        
        *Created a module that displays the inventory count done by the inventory worker, compares the quantity that is correctly reflected as on_hand on odoo's db and the physically counted quantity from the warehouse by the worker and shows the difference, which leads them to diagnose the missing quantities if any. For this feature, i also developed fastapi that gets the quantity of product via api call from a mobile application and the fastapi endpoint is connected with odoo's external api, so the incoming data from mobile application is stored to the postgresql db

        *migrated the odoo14-community erp site to odoo17-community erp site, at that time odoo-community only released migration script until odoo16, for odoo-17 they just started the scaffolding there is no-script at that time, but our boss wanted it to be odoo-17, if it were a enterprise edition it was just a click of button, but we are using community edition, where the developers among odoo-community has to develop the script, at that time i was not that much experienced to create a migration script, but with chatgpt's guidance and some dedicated time i managed to create a script and successfully migrated to odoo17
    
        Maintained a odoo-12 erp site for Sunrise-toyota( Toyota car dealer in america), this site uses python2.8, which is going to be depreciated at that time(2023), and it has made use of aws sns service for some notifications, so boto3 is used inside that, during the eventual update of boto3, then the sns service was not unable to use with python2.8. the boto3 demanded for python3,so the latest python version that odoo12 supports was python3.5, but python3.5 was not supported in ubuntu-16, so i completely did the platform upgrade for the odoo-12 erp site, which involves migrating from ubuntu-16 to ubuntu-22 on aws ec2 instance and making the odoo-12 to use python3.5. That helped me to learn about pyenv for python version management.

        During odoo development, i learned about linux(ubuntu) basic command lines, connecting to a remote ec2 instance with pem key via SSH, writing unit file configuration to run a service as a system service, installing and configuring nginx for routing incoming traffic to the odoo service running port, python project isolation with virtual environments, python version management with pyenv,

    3. After 8 months of odoo development alone in jetzerp, i had a chance to parallely work as a backend developer in a new project along with maintaining the existing odoo projects. The new project is for TI Murugappa groups, Ambattur, India. TI is a cycle manufacturing company, and they are spending too much of time for invoice processing(uploading the invoice data into oracle db). So to enhance their process our company created a service that watches the mail for any incoming message and if the message has the new invoice, the new invoice is parsed into json data using OCR, and the json data is send to a backend service which checks, if this kind of invoice was previously came to the db or not, if it's the first time for that type of invoice, the backend stores it in a seperate table and there is also a web portal, where the user can see the new unprocessed invoices, so the user is asked to process the new type of invoice which is then stored to db, usually they map which column in invoice to be stored to which column of the table column, once they process one invoice, the backend stores the mapping of that invoice, On the next time if the same type of invoice come again the backend knows which invoice column to map to which table column,so the data is automatically stored to the db, i worked on the backend part of this project and learned about sqlalchemy, more on fastapi development, team collaboration,

    4. That invoice processing automation took 4 months to complete and also our company jetz moved from odoo community to odoo enterprise edition and with odoo enterprise edition, i worked for 8 months, when using odoo enterprise edition, i got more exposure to business concepts like Sales, CRM, Manufacturing(BOM), Inventory, Accounting, Marketing, purchase, because everything is a seperate inbuilt module in odoo, and if the client asks for a requirement in any of the module, the dev actually know the business module to decide whether the requirement is really useful, doesn't that already exist in odoo, in case if the requirement already exist on odoo, one don't need to reinvent the wheel, just found it out and train the client on how to use it. While working on odoo enterprise edition, the odoo team got bigger, i became the team lead, i have two juniors devs, 3 business analyst(two seniors ans one junior) and one tester, where i learened a more about team management and collaboration,

Bapon IT Services(9-Dec-2024 to present):-
    1. On 9th december 2024 i joined bapon IT services as a software engineer, It's a product based company, when i joined they have already launched a product named hyr-sense, Hyr-sense is a AI based interview conducting web application, which is capable of conducting a voice based interview for provided job description and finally assess the candidate's skill for the job, for this the tech stack include python fastapi for backend development,mongodb as database, react for frontend development, aws as hosting platform, agora for meeting channel provider, openai(gpt-40 + whisper) and aws polly for ai voice generation and some more aws services, and the first job assigned to me was record the interview of the candidates and store it in db, for that i gone through the agora docs, who was our meeting channel provider and also he offered cloud recording as a additional feature, with which one can record the meeting and store it in cloud storage, to achieve this, i have done the following:-
        * created function, which is structured to make a call to agora's api endpoint that initiates cloud recording and on the agora's api payload, we need to pass aws access keys, that's why i deal the start trigger from the backend, since it's not safe to provide the access keys from frontend, where someone can inspect and get the keys. So when the frontend calls the start-interview endpoint, i internally call the function that i created to trigger the starting of the cloud recording
        *And in the end-interview endpoint, i have again internally called a function that stops the cloud recording
    
    2.SenseScript: Then our boss has idea to meeting conversation summarizing app, he named it as sensescript, with which a user can upload the audio of a recorded meeting into sensescript and it transcribes and summarizes the meeting audio, for this i worked on the backend side, where i did the following:-
        * Created all the api endpoints using fastapi
        * Used Cognito for userpool management
        * mongodb as the database
        * transcribed the audio using aws transcribe
        * summarized the transcribe using gpt-4o model
        * hosted the backend service in aws lambda function behind api gateway,
        * Used github for version control

    3. Hrsuite: At that time we used zoho people for managing timesheets, so our boss, wants us to build Bapon's own timesheet management app, Hrsuite is bapon's timesheet management portal, there also i worked on the backend development, where i have done the following:-
        * Created around 90+ api endpoints using fastapi, which holds the logic for modules like timesheet, leave, organization, attendance, Documents, Projects, Jobs, Role based access control
        * Used Postgresql as a database and used SQLAlchemy to write queries in a pythonic way
        * Used aws ses for email notifications
        * used Cognito integrated with our organizations Azure Directory for SSO login into the application
        * Used github for version control

    4. Skillfulsene: With skillfulsense a user can select among wide of range of topics, and know their current level of the selected topic by attending a level finding assessment, which includes Mcq round, Coding round(if applicable), Ai-interview. after knowing his level the user is asked for his expected level on that topic, and for the expected level, the platform suggests the user with hand-picked courses from alison platform to attain the level, after studying the courses if the candidate is ready to take a assessment for certification on his expected level, then he can take a certificate assessment, if the candidate passes the platform issues the certificate for that topic. It also has a voice assistant that answers for the questions asked by the candidate on a selected topic, for this application, i have done the following:-
        * Created 40+ api endpoints using fastapi
        * Used Cognito for user pool management
        * Integrated Razorpay(india) and stripe(global) for payment gateway
        * Integrated alison platform, to show topics and roadmap guidelines for users
        * For Mcq and coding round generation used deepseek-chat model to generate questions
        * For AI-interview meeting, integrated agora for meeting channel
        * For AI model used gpt-4o and for ai-voice used aws Polly
        * For user audio to text used whisper via api calls,since gpt-4o can only accept text-tokens
        * Used SES for email notifications
        * Used mongodb as database
        * Used gpt-4o-mini-realtime-preview as model for voice assisstant that answers the questions, since it can accept audio tokens directly, it provides faster responses
        * After Session with voice assistant, the platform shows related helpful links based on the conversatoin with voice assistant, for this feature, gpt-4.1 with web search tool was used
        * Entire api endpoints were hosted among 6 different lambda functions following the decoupled architecture
        * Voice agent service was hosted as ecs fargate task, since has limitations like maximum 15 mins of runtime and size limitation with a max of 250MB
        * Used github for version control
        * Derived the overall infra cost and the minimal number of users needed to compensate the infra cost,

    Extras:-
    * completed the aws cloud practitioner examination with 96.2%
    * Pipe Dia Optimizer(https://opti.mklabs.work):-
        i have a friend who is working on designing pipelines for water distribution system, where he needs to work on optimizing the diameter of the pipe to prevent unnecessary increase in dia, which incur to additional cost, while optimizing the dia, there were some criteria for each design they make according to the nature of land where the lay pipes, for eg, the velocity of water inside the pipe shouldn't be less than 'x', the residual head at end of the parent pipe should be the residual head at start of the child pipe, the residual head of the village endpoints shouldn't go below 'y',,,etc. it's iterative process and consumes more time, so he wants me to create a python script that automates iterative process and save him some time. So, i have created a web application which accepts a xl_file, optimizes the pipe dia by 80% and returns the optimized_xl_file, for this application, 
        * i used pandas for xl file manipulation,
        * created fastapi endpoints "/download-sample-xl" and "/optimize-input-xl"
        * hosted the endpoints as aws lambda
        * developed frontend with claude-ai
        * hosted the frontend using s3 static site hosting
        * Route 53 for DNS