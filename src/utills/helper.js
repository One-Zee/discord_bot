exports.getMessageArgs = ( msg , PREFIX ) => {
    return msg
    .toLowerCase()
    .trim()
    .substring( PREFIX.length ) // removes prefix 
    .split(/\s+/); // Match all whitespaces
}