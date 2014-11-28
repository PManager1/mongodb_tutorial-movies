    
    # DEBUG=del ./bin/www
    # node getMovies.js
        
    while true; do node getMovies.js; sleep 6; done



#!/bin/sh

# if [ $(ps aux | grep $USER | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
# then
        # export NODE_ENV=production
        # export PATH=/usr/local/bin:$PATH
        # DEBUG=del ./bin/www
# fi