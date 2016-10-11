$(document).ready(function() {
    createStoryJS({
        type: 'timeline',
        width: '100%',
        height: '100%',
        source: 'https://docs.google.com/spreadsheets/d/1cc3YrnfRjqSWtgsoVInvhYI4Y4PHhLa2L2W7vYRwpSs/pubhtml&output=html',
        embed_id: 'my-timeline'
    });
});
