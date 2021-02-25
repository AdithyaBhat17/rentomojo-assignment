## mojo.

Take home assignment by Rentomojo. https://mojo.adithyabhat.com

#### Libraries Used
- React
- ReactDOM
- React Router DOM
- Chakra UI
    - Emotion
- SWR (Data fetching using the Stale while re-validate strategy.)

### State Management.

I follow this idea of keeping the application and server (Data from external sources) state separate.  
I've used React hooks to manage local state and SWR to manage server state. SWR provides a better user experience by showing stale data to the users and fetching latest data in the background. If the newly fetched data is different from the cached data, the cache is flushed and replaced with this newly fetched data. SWR also allows us to show the latest data possible when users switch to a different tab and come back to the application. (Read https://swr.now.sh for more details on this.)

### Illustrations and Animations
- LottieFiles (Loading state)
- ManyPixels (404 illustration)

### Fonts Used
- Inter
