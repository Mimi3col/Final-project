# Web Development Final Project - _DnD-Share_

Submitted by: **Amanda Coleman**

This web app: **A place to share the attributes of your DnD character**

Time spent: **20** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form that allows the user to create posts**
- [x] **Posts have a title and optionally additional textual content and/or an image added as an external image URL**
- [x] **A home feed displaying previously created posts**
- [x] **By default, the time created , title, and number of upvotes for each post is shown on the feed**
- [x] **Clicking on a post shall direct the user to a new page for the selected post**

  - looking at the search bar each post has its own id value this is noted in the search bar

- [ ] **Users can sort posts by either their created time or upvotes count**
- [ ] **Users can search for posts by title**
- [x] **A separate post page for each created post, where any additional information is shown is linked whenever a user
      clicks a post**
  - there is a separate page but the content is currently blank, the page is specific to each character that has been
    created
- [ ] **Users can leave comments underneath a post on the post's separate page**
- [x] **Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and
      users can upvote any number of times**

  - when you head to the new page you can upvote the post and when you get back to the home page the upVotes remain

- [x] **A previously created post can be edited or deleted from its post page**

  - You can delete and edit the different values

The following **optional** features are implemented:

- [ ] Users can only edit and deleted posts or delete comments by entering the secret key, which is set by the user
      during post creation
- [ ] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and
      comments that they make and displayed on them.
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post, the referenced post
      is displayed and linked, creating a thread
- [ ] Users can customize the interface of the web app
- [ ] Users can share and view web videos
- [ ] Users can set flags while creating a post. Then users can filter posts by flags on the home feed.
- [ ] Users can upload images directly from their local machine as an image file
- [ ] Display a loading animation whenever data is being fetched

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![First Video](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDM1ODQxZDY3NjBhNWEzYjkxMzhhZGQ3MTRhOWM2NTQ1MTcxMjRjNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/RUuaDCHfOJpk8Oo72w/giphy.gif)

![Second Video](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDgyYTgxOTU2NmQ1NDQ4YjQzNjQ0NTI2OWIwNmUzNmQxOGUyMjY4NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/6q7nw72fOY1famYZtA/giphy.gif)

## Notes

Describe any challenges encountered while building the app.

- Using Next js, for the app creation has taken some getting used to, but I find it an easier setup to use then the
  traditional react.
- there is some challenges getting my inputs to pass on to the supabase backend.
- currently working on getting the selection page to show the specific post.

- Before Demo
  - Finish up the Re-direction page, to show the information from Supabase
  - have a comment function on that page
  - delete the post and re-direct the user back to main page

## License

    Copyright [2023] [Amanda Coleman]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
