# 05 Homework - Work Day Scheduler

## Current time and blank schedule

![Time and blank schedule](./Assets/images/picture1.png)
```
At the top: current date and time, updating at 1 second intervals
Work schedule from 9am-5pm broken into hourly intervals
Color coded hourly intervals based on current time. Grey = past, red = present, green = future. 
```

## Task entered

![task entered into textarea](./Assets/images/picture2.png)
```
Upon clicking the task box, a textarea box appears, a task has been written in 9am as an example

```

## Save task

![saving task in text area to local storage](./Assets/images/picture3.png)
```
Upon clicking the save button:
-the textarea content is saved to local storage
-the local storage key value pair is then parse from local storage into the text area. This is done at each save button event click, and also every time the page loads 

```

## Local storage render and page refresh

![Local storage render and page refresh](./Assets/images/picture4.png)
```
As an example, various tasks have been entered:
-each task is individually saved in local storage in a key value pair
-with each save button event click and each page refresh, the local storage data is parse into the task textarea

```



To access github repository please click [here](https://github.com/B3nj1e/05-Work-Day-Scheduler). To access webpage please click [here](https://b3nj1e.github.io/05-Work-Day-Scheduler/). 