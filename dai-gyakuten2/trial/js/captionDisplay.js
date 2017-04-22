var CaptionManager = (function () {
    function CaptionManager() {
    }
    // CaptionManager.getCurrentCaption = function (arr) {
    //     var outputArr = arr.slice();
    //     var i = outputArr.length;
    //     var temp;
    //     var indexA = 0;
    //     var indexB = 0;
    //     while (i) {
    //         indexA = i - 1;
    //         indexB = Math.floor(Math.random() * i);
    //         i--;
    //         if (indexA == indexB)
    //             continue;
    //         temp = outputArr[indexA];
    //         outputArr[indexA] = outputArr[indexB];
    //         outputArr[indexB] = temp;
    //     }
    //     return outputArr;
    // };

    
    function updateCaptionCursor(currentTime) {  
   
         // special case: if playback is missing caption or past the last caption
         if (noCaption) {
            cursorID = searchCaption(currentTime);
            if(noCaption){
               hideCaption();
               return;
            }
            updateCaptionText();
            return;
         }
         
         var cursor = captions[cursorID];
         if (isWithinCursor(currentTime, cursor) == 0) {
            // case 1: if playback stays in the same caption; do nothing
         } else {
            if (currentTime > cursor.endTime && (currentTime - cursor.endTime) < 500) {
               // case 2: video plays continously and move to the next (when change is less than 500ms)
               cursorID++;
               
               // check if we reached the end of the caption
               if (cursorID > captions.length - 1){
                  noCaption = true;
               }
            } else {
               // case 3: user changed playback (fastforward/backtrack); find new caption cursor
               cursorID = searchCaption(currentTime);
            }
         
            if (noCaption) {
               hideCaption();
            } else {
               updateCaptionText();
            }
         }
      }
})