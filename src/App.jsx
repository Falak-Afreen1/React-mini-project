import React from 'react'
import Card from './components/Card'
import { Car } from 'lucide-react'
 
function App() {

 const jobOpenings =  [
  {
    "brandLogo": "https://www.meta.com/favicon.ico",
    "companyName": "Meta",
    "datePosted": "2 days ago",
    "post": "Software Engineer, Product",
    "tag1": "Full-time",
    "tag2": "Mid-level",
    "payPerHour": "$85.00",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://www.apple.com/favicon.ico",
    "companyName": "Apple",
    "datePosted": "3 days ago",
    "post": "Senior Software Engineer, Kubernetes",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "payPerHour": "$115.00",
    "location": "Seattle, WA"
  },
  {
    "brandLogo": "https://www.amazon.com/favicon.ico",
    "companyName": "Amazon",
    "datePosted": "5 days ago",
    "post": "Software Development Engineer II",
    "tag1": "Full-time",
    "tag2": "Mid-level",
    "payPerHour": "$75.00",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://www.netflix.com/favicon.ico",
    "companyName": "Netflix",
    "datePosted": "3 days ago",
    "post": "Distributed Systems Engineer",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "payPerHour": "$240.00",
    "location": "New York, NY"
  },
  {
    "brandLogo": "https://www.google.com/favicon.ico",
    "companyName": "Google",
    "datePosted": "1 week ago",
    "post": "Software Engineer, Gemini Mobile",
    "tag1": "Full-time",
    "tag2": "Junior level",
    "payPerHour": "$70.00",
    "location": "Sunnyvale, CA"
  },
  {
    "brandLogo": "https://www.microsoft.com/favicon.ico",
    "companyName": "Microsoft",
    "datePosted": "2 days ago",
    "post": "Software Engineer 2",
    "tag1": "Full-time",
    "tag2": "Mid-level",
    "payPerHour": "$65.00",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://www.apple.com/favicon.ico",
    "companyName": "Apple",
    "datePosted": "4 days ago",
    "post": "Site Reliability Engineer",
    "tag1": "Full-time",
    "tag2": "Mid-level",
    "payPerHour": "$95.00",
    "location": "Cupertino, CA"
  },
  {
    "brandLogo": "https://www.amazon.com/favicon.ico",
    "companyName": "Amazon",
    "datePosted": "1 day ago",
    "post": "Applied Scientist, Alexa AI",
    "tag1": "Full-time",
    "tag2": "Senior level",
    "payPerHour": "$105.00",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://www.google.com/favicon.ico",
    "companyName": "Google",
    "datePosted": "6 days ago",
    "post": "Software Engineer, Android Trust",
    "tag1": "Full-time",
    "tag2": "Mid-level",
    "payPerHour": "$88.00",
    "location": "Singapore"
  },
  {
    "brandLogo": "https://www.meta.com/favicon.ico",
    "companyName": "Meta",
    "datePosted": "10 days ago",
    "post": "Front End Engineer",
    "tag1": "Full-time",
    "tag2": "Junior level",
    "payPerHour": "$62.00",
    "location": "Menlo Park, CA"
  }
]
  return (
    <div className ='parent'>
      {jobOpenings.map (function(elem,index){

        return <div key = {index}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
          </div>
      })}

      <Card />
      <Card />
      </div>   
  )
}

export default App
