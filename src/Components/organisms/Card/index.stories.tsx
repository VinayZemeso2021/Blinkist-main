import Card from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const CardComponent = {
    title : 'Organisms/Card',
    component: Card,
    parameters: {
        actions: {
          handles: ['mouseover'],
        },
    },
} as ComponentMeta<typeof Card>;

 const Template: ComponentStory<typeof Card>  = (args:any) => <BrowserRouter><Card {...args} /></BrowserRouter> 


export const Library = Template.bind({});

Library.args = {
    imgHeight: 300,
    url: 'https://s3-alpha-sig.figma.com/img/9ef8/4879/159f1a8fdf9dafb9b0fd0b3a69170efb?Expires=1644796800&Signature=JJjU6hQr5F8lu2Oav7XHt2X7hWCLbVKXNFaeamZR2bTCPBrba3NRIBDxheS6pLGM5~n3gVV98RRdBeoOFsEbg6sFgaoXnJBvYKXJnakYrT9yQglUc3P3m7yL-MprWCsF-oxmL0umoV189LrIi~n6SeTwqFVysMLw3v8AURZQcpR-RNUCS1VNLJUPNf68uqT9cUbA3sDYh1gm-CjAIUcIcOeCdBSumOY5wm1k9oKkGTuktN8H7eck~14yoI-BqSXZRREfhQ-nbB8hrABgToLuun5wtRc8MhvuNwhcTWlYIlXgvOhEKu6TXBi2x2VHBQrbLSTnl96v1U16mSs12qCJVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    bookName: "Beyond Entrepreneurship",
    writerName: "Jim Collins & Bill Lazier",
    timeRead: "14-minute read",
    width: 350,
    progress: 60,
    inLibrary: true,
}


export const Finished = Template.bind({})

Finished.args = {
    imgHeight: 300,
    url: 'https://s3-alpha-sig.figma.com/img/d6ff/11bb/88b0e65d07ed5e88976fd6ef79c2890d?Expires=1644796800&Signature=T~7H15x6hpXhpjT23JCdCxWPkjeXZjG8vMyk9-5F2aSvM~Q3Xm53aBErjFYFZtysIoWTlxMcHQAVi~oy95cDbUGaboO65EnTj-gt-YqsOTaDNayHE3c1Mtp6M0RB-eLp0s2WvFGDY06tHMbjPiqe5Nc5sOSY~LlAwApis7NQC0TBYFvQNt3zzeC3Bjd8LXoTsPuMTs5r60yzCKJvC5kMEXvknM8mfSW9Aa7Jsy2srNqSSKrl6EkNu6GvzSObawUvP7OgbDt25k6rlidlVvQYZ24222z0gOZws3ox9ClWYXo5-NiSc46aFJpwGoHc2xRaVMGw-Smj6vGQSwjGS-K71w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 350,
    inLibrary: false,
}

export default CardComponent;