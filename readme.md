npm i -g @aws-amplify/cli@latest

amplify configure
    region: ap-southeast-1
    username: haripriya
    access key and secret key present in numbers file, ask haripriya for the credentials
    Profile Name: haripriya

amplify init
    AWS profile
    Profile: serverless-amplify

amplify add api
    GraphQL
    graphql schema: 
        type UserData @model {
            id: ID!
            name: String!
            email: String!
            phoneNumber: String!
            bookingId: String!
        }

npm i @aws-amplify/core @aws-amplify/datastore

amplify codegen models

amplify push
    Do you want to generate code for your newly created GraphQL API :  yes

npm i aws-amplify

