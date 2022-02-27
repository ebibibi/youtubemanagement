module.exports = async function (context, myTimer) {

    var video = await getRamdomVideo();
    context.log(video);



    async function getRamdomVideo() {
        const { google } = require("googleapis");
        const youtubeClient = google.youtube({
            version: "v3",
            auth: process.env["YouTubeAPIKey"],
        });
    
        // https://developers.google.com/youtube/v3/docs/channels/list
        response = await youtubeClient.channels.list({
            id: process.env["YouTubeUserID"],
            part: 'contentDetails',
        });
    
        if (response.data) {
            playlistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;
            context.log(playlistId);
        }
    
        var videoList = []
        var requestOptions = {
            playlistId: playlistId,
            part: 'snippet',
            maxResults: 50,
        }
        response = await youtubeClient.playlistItems.list(requestOptions);
    
        do {
            if (response.data) {
                response.data.items.forEach(function (item) {
                    videoList.push(item);
                });
            }
    
            if (typeof response.data.nextPageToken === "undefined") {
                hasNext = false;
            } else {
                hasNext = true;
                requestOptions.pageToken = response.data.nextPageToken
                response = await youtubeClient.playlistItems.list(requestOptions);
            }
    
        } while (hasNext)
    
        var video = videoList[Math.floor(Math.random() * videoList.length)];
    
        return video.snippet
    }
    
};







