#/bin/bash

DAY=$(date -v -1d +"%d")
REGISTRATION="xachr"
MONTH=$(LANG=C date -v -1d +"%B")

curl -d "start_hour=00&hour_count=24&start_day=${DAY}&start_month_name=${MONTH}&end_day=31&end_month_name=${MONTH}&year=2015&m_type=All%20Types&m_airport=Geneva&m_noise_charge=Geneva&Search=Search&SelectRegistration=${REGISTRATION}&first_month" http://aragge.ch/cgi-bin/data_frame.pl > hier.html

if grep -q ShowAircraft hier.html; then
  echo "${REGISTRATION} has been detected" | mail -s "Flight detected!" francois@superlocal.ch
fi
