#!/usr/bin/env zsh
logfile="Prophecy.html"
sermon=$(echo "$logfile" | cut -d. -f1)

cat <<EOF > $logfile
      <div class="w3-modal-content w3-padding">
          <ul class="w3-ul w3-border">
EOF

for FILE in *.mp3
do
    XFILE=$(echo "$FILE" | cut -d. -f1 | sed -e 's/_/ /g' | tr "[:lower:]" "[:upper:]")
cat <<EOF >> $logfile
        <li><p>$XFILE</p></li> 
            <audio controls>
            <source src="sermons/$sermon/$FILE" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio></li>
EOF
done

cat <<EOF >> $logfile
    </ul>
</div>
EOF