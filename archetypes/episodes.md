---
title: "{{ replace .Name "-" " " | humanize }}"
date: {{ .Date }}
description: >
    Brief episode description goes here.
explicit: "yes"
---

{{< podcast "" >}}

Episode description and content goes here.

{{< transcript "" >}}