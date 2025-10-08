Name: Monishwaran.C
email: monishwaran41046@gmail.com
phone: +91 7868049170
location: Chennai
github: https://github.com/monishwaran57
linkedin: https://linkedin.com/in/mongineer

Bapon IT Services(9-Dec-2024 to 30-june-2025):-
    1. On 9th december 2024 i joined bapon IT services as a backend developer intern, It's a product based company, when i joined they have already launched a product named hyr-sense, Hyr-sense is a AI based interview conducting web application, which is capable of conducting a voice based interview for provided job description and finally assess the candidate's skill for the job, for this the tech stack include python fastapi for backend development,mongodb as database, react for frontend development, aws as hosting platform, agora for meeting channel provider, openai(gpt-40 + whisper) and aws polly for ai voice generation and some more aws services, and the first job assigned to me was record the interview of the candidates and store it in db, for that i gone through the agora docs, who was our meeting channel provider and also he offered cloud recording as a additional feature, with which one can record the meeting and store it in cloud storage, to achieve this, i have done the following:-
        * created function, which is structured to make a call to agora's api endpoint that initiates cloud recording and store the recording of the interview on aws s3 bucket, for this feature i need to provide the aws access_key and secret_key on the agora's api payload, So when the frontend calls the start-interview endpoint, i internally call the function that i created to trigger the starting of the cloud recording
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

Bapon IT Services(01-july-2025 to Present):
    After 7 months of intership, the gave me a full-time role as a software engineer, and provided with responsibility to build a web assessment platform named skillfulsense, which is currently live(https://skillfulsense.com) and marketing activities where going on
    1. Skillfulsene: With skillfulsense a user can select among wide of range of topics, and know their current level of the selected topic by attending a level finding assessment, which includes Mcq round, Coding round(if applicable), Ai-interview. after knowing his level the user is asked for his expected level on that topic, and for the expected level, the platform suggests the user with hand-picked courses from alison platform to attain the level, after studying the courses if the candidate is ready to take a assessment for certification on his expected level, then he can take a certificate assessment, if the candidate passes the platform issues the certificate for that topic. It also has a voice assistant that answers for the questions asked by the candidate on a selected topic, for this application, i have done the following:-
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
        * Voice agent service was hosted in ec2(t2.micro), behind application load balancer and Automatic scaling groups
        * Used github for version control
        * Derived the overall infra cost and the minimal number of users needed to compensate the infra cost,
        * And also there is a feature to fetch free useful courses from the web and youtube for any topic, for this feature integrated google's custom search api and youtube data api to get the course material links and with deepseek curation is made to get the top free-courses and stored to db

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