export const getYoutubeIdFromUrl = (url: string): string => {
    const regex: RegExp = new RegExp('v=[^ "]{11}');
    const result:string = regex.exec(url)[0];

    const youtubeId: string = result.replace('v=','');

    return youtubeId;
}