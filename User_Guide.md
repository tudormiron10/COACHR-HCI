# COACHR — User Guide

A reference for the head coach, assistant coach, and tactical staff using the COACHR ecosystem during pre-match preparation, live matches, and post-match review.

This guide is structured around what you actually do on match day, not feature lists. Each section answers *"how do I get this done?"* with the gestures, the screens, and the expected behaviour.

---

## 1. Before kick-off

### 1.1 What COACHR is

COACHR is a three-device tactical system designed for the touchline:

- **Tablet** — your central data hub. Real-time statistics, passing networks, a tactical drawing pad, a comms channel to your staff, and a player wellness monitor.
- **AR Glasses** — your live overlay. Tactical data drawn directly on the pitch in front of you. The lenses go transparent when nothing is being shown; activate the HUD when you need it.
- **Smartwatch** — your touchline relay. Worn by the assistant coach. Receives tactics from you, sends back confirmation, surfaces alerts (fatigue spikes, low connectivity).

All three devices communicate over a **dedicated private LTE channel** at the stadium. No Wi-Fi dependency, no public network. Median latency is around 22 ms.

### 1.2 Setting up

Charge all three devices the night before the match. Pair them by logging in with the same club account on the COACHR app:

1. Open the COACHR app on the tablet
2. Sign in with your UEFA Pro coach credentials
3. Add your assistant coach (he'll receive a pairing prompt on his smartwatch)
4. Slip the glasses on; they'll auto-pair when you tap **Connect** on the tablet

Once paired, the three devices act as one system. You don't think about syncing — it just happens.

---

## 2. The Tablet — tactical control centre

The tablet is your primary surface during the match. Use it on the touchline cart or with a stand on the bench. It's a 13-inch landscape device.

### 2.1 The Home Dashboard

When you open COACHR, you land on the **Coach Home Dashboard**. At the top, the live score and minute. Below, four tiles for the main sections:

- **Live Match Hub** — real-time match data
- **TacticPad Studio** — draw tactics and send them
- **Comms Relay** — your staff message log
- **Player Wellness** — roster wellness data

Above the tiles, you may see a **highlighted yellow card** labelled *"1 new synced tactic"*. This means your AR glasses captured a tactical moment and synced it to the tablet — tap it to open that moment directly in the TacticPad Studio.

### 2.2 Reading live statistics

Tap **Live Match Hub** from the Home Dashboard. You see five live stat cards updated every second:

- **Possession** — % for both teams
- **Shots (on target)** — total and on-target
- **Passes (accuracy)** — total and completion rate
- **Distance covered** — kilometres per team
- **xG (expected goals)** — both teams

To go deeper into the build-up, tap **Open Passing Networks**.

### 2.3 Reading the passing network

The Passing Networks screen shows a live diagram of your team's structure based on the last 15 minutes of play. Each player is a numbered circle. Lines between players represent passes; thicker lines mean more passes.

- A **Volt Yellow line** indicates the strongest connection (8+ passes).
- A **white line** indicates a moderate connection (5–7 passes).
- A thin grey line indicates a weak connection (1–4 passes).
- A circle outlined in **Energy Orange** indicates a player flagged by AI — usually a fatigue spike or position issue. The player's label has a small ⚠ next to it.
- The **highlighted Volt Yellow node** is the network hub: the player handling the most ball.
- The bottom-right chip summarises the headline insight: who the hub is, how many passes, completion rate.

If you want to act on something you see — say, the right flank is exposed — tap into the right pane to open the captured AR view in **TacticPad Studio**.

### 2.4 Drawing and sending a tactic

The **TacticPad Studio** is where you author and dispatch tactical changes. Open it either from the Home Dashboard or by tapping a synced moment.

You see a top-down pitch with the current situation overlaid. To draw:

1. Tap **Pen**, **Curve**, **Arrow**, or **Eraser** in the top toolbar
2. Draw the movement directly on the pitch with your finger or a stylus
3. Use **Saved Formations** at the bottom to load a preset (e.g. *4-3-3 High Press*)
4. When ready, tap **SEND TACTIC** (the Volt Yellow button bottom-right)

The system transmits your tactic via private LTE. The transit screen shows the destination (your assistant's smartwatch) and the latency. Within about three seconds, you'll see a confirmation screen showing the tactic was received and acknowledged by the assistant.

End-to-end time from drawing the first line to your assistant acknowledging: typically under **5 seconds**.

### 2.5 The staff comms channel

Tap **Comms Relay** from the Home Dashboard. You see:

- **Active channel** — which staff are online, their device, and their latency
- **Connected staff** — your assistant, team doctor, fitness coach, set-piece coach, etc.
- **Recent activity** — a chronological log of every event in the second half: tactics sent, alerts auto-routed, voice notes received, confirmations

Status indicators on each event:

- **Delivered** — the message reached the recipient's device
- **Acknowledged** — the recipient confirmed seeing it
- **Confirmed** — the recipient confirmed acting on it

The Comms Relay is also where you compose a new alert outside the TacticPad flow — useful for shorter messages like *"Press higher in 2 minutes."*

### 2.6 Monitoring player wellness

Tap **Player Wellness** from the Home Dashboard. You see a roster of your players with morning-report data:

- **Sleep** — hours from the player's self-report (sent from his phone before training)
- **Fatigue** — percentage relative to his personal baseline
- **Video clips** — how many AI-flagged moments are awaiting his review
- **AI Skeleton** — a biomechanical score out of 100

Players with fatigue ≥ 70% get an Energy Orange chip and rise to the top of the list. Tap **View scan** on any row to open the detailed biomechanical view.

Players self-report from their personal mobile app each morning. You don't enter data manually.

---

## 3. The AR Glasses — live overlay

The glasses are worn during the match. They're rated for outdoor stadium glare and weigh under 50 grams. The lenses are transparent except when the HUD is showing something — you see the pitch normally.

### 3.1 The Live HUD (passive mode)

When you're not actively using the HUD, two small chips float at the top of your vision:

- **Top-left** — current score and team codes
- **Top-right** — match minute

Everything else is transparent. You see the pitch as you normally would.

### 3.2 Opening the HUD menu

To open the menu, **double-tap the right rim** of the glasses. A floating radial menu appears with four options arranged in a compass layout:

- **Field Radar** (top, highlighted as the default gaze target)
- **AI Diagnostics** (right)
- **Sync Gallery** (bottom)
- **HUD Settings** (left)

To select an item, simply **look at it and hold your gaze for 600 ms**. A Volt Yellow ring forms around the item you're staring at; when it completes, the item activates.

To dismiss the menu without selecting, **look at the Resume HUD chip** at the bottom or tap the right rim again.

### 3.3 Field Radar — passing lanes

The Field Radar overlays live tactical data on top of your view of the pitch. By default it shows **passing lanes** — Volt Yellow arrows showing where your team is currently trying to build, with player rings around the active participants.

The bottom-left chip reports **defensive compactness** — the spread of your back line in metres. If it drops below your team's standard, the chip turns orange.

Tap **Heat Maps ⇄** at the bottom-right to switch from passing lanes to heat-map mode, which shows where the ball has spent the most time.

### 3.4 AI Diagnostics — position errors

While in Field Radar, **focus your gaze on a player or a zone** to inspect it. The HUD switches to AI Diagnostics: a Volt Yellow skeleton appears on the player, and any positioning error is highlighted with an Energy Orange concentric ring.

The chip below the ring tells you who and what — for example: *"Position error · #3 Balde · LB out of line."*

The top-right corner shows the AI's reasoning and confidence — e.g. *"Left flank exposed for the last 18s. Recommend defensive reshuffle."*

### 3.5 Capturing the moment

When you see a tactical issue worth acting on, **press and hold the right rim for 600 ms** (a "long-press"). The Volt Yellow capture ring expands outward from the press point. When it completes, a confirmation appears: *"Frame captured · Synced to Tablet at [minute]'."*

That captured frame now appears as a **synced tactic card** on your tablet's Home Dashboard. Walk to the tablet and act on it.

### 3.6 Sync Gallery & Settings

From the HUD menu:

- **Sync Gallery** — review your last few captured frames. Each card shows the captured pitch view, the minute, and a short description. Useful for half-time and post-match review.
- **HUD Settings** — adjust display preferences: passing-lane visibility (on by default), heat-map mode (off by default), skeleton-tracking opacity, auto-capture on AI-detected errors (on by default), voice annotations (off — stadium noise makes them unreliable), target frame rate.

---

## 4. The Smartwatch — touchline relay

Worn by the **assistant coach** standing at the touchline. It's a round-square device with a digital crown and a side button. You don't pair the smartwatch yourself — the head coach pairs it from the tablet during setup.

### 4.1 Standby

When nothing is happening, the watch shows the match score, the minute (large), and the wearer's heart rate. The Volt Yellow LTE indicator at the bottom-right confirms the private channel is live.

### 4.2 Receiving a tactic

When the head coach sends a tactic, the watch **vibrates strongly** and the screen flashes Volt Yellow — designed to be felt and seen even with the stadium at full noise. The display shows:

- **TACTIC INCOMING** banner
- The sender (e.g. *"From Coach Munteanu · 73'45″"*)
- A bright **VIEW** pill

Press **VIEW** to see the actual tactical schema.

### 4.3 The visual tactic

The schema is the simplest possible view of what to do. For a substitution, you see two large rows:

- **IN: 9 Lewandowski** (the player coming on)
- **OUT: 10 Ansu Fati** (the player coming off)

Or for a positional change, you see the IN/OUT zones and the player number.

Confirm by pressing the **CONFIRM ✓** pill — this acknowledges to the head coach that you've understood, and starts the execution on the pitch.

### 4.4 Sending a quick substitution

You can also initiate a substitution from the touchline. Tap the **Substitutions** zone on the watch face's left side. You see a quick-swap UI: two player slots with an `↕` arrow. Set the incoming and outgoing players, then tap **Send to Coach**. The head coach's tablet receives your suggestion for confirmation.

### 4.5 Player alerts

When the system flags a fatigue spike or other physical issue, the watch shows a **Player Alert** screen:

- The player number (with Energy Orange ring)
- The player name and position
- The fatigue percentage in large numerals
- A clear recommendation (e.g. *"FATIGUE SPIKE · CONSIDER SUB · RED ZONE"*)

Press **← Back** to return to standby. The alert is also logged on the head coach's Comms Relay.

### 4.6 LTE connectivity

The watch displays the LTE bars in two places: the bottom of the standby screen, and on the Player Alert screen as a detailed strength readout (e.g. *"LTE strength: 4/5 bars · 22ms latency"*). If bars drop below 2, the system warns you on both watch and tablet.

---

## 5. A typical match-day moment (the 4-second tactic)

Here's how the three devices work together in a real situation. Times are example only.

| Time | Device | Event |
| :--- | :--- | :--- |
| `73'24″` | **AR Glasses** | AI flags `#3 Balde` out of position. Energy Orange ring appears on the player; the AI Insight chip explains *"Left flank exposed for the last 18s."* |
| `73'42″` | **AR Glasses** | Head coach long-presses the right rim. Frame captures. *"Synced to Tablet"* confirmation. |
| `73'42″` | **Tablet** | Synced tactic card appears on the Home Dashboard. Coach taps to open in TacticPad Studio. |
| `73'42″–73'45″` | **Tablet** | Coach draws three Energy Orange arrows showing Balde reset + Christensen shift + Gavi press trigger. Taps **SEND TACTIC**. |
| `73'45″` | **Smartwatch** | Assistant feels haptic, glances at wrist. Sees `TACTIC INCOMING · From Coach Munteanu`. Taps **VIEW**. |
| `73'45″–73'47″` | **Smartwatch** | Assistant sees the substitution + arrow. Taps **CONFIRM ✓**. |
| `73'47″` | **Tablet** | Coach's tablet displays *"Tactic delivered · Confirmed by Andrei Popa at 73'47″"*. |
| `73'52″` | **Pitch** | The substitution is executed on the pitch. |

End-to-end: 5 seconds from detection to execution.

---

## 6. Tips for outdoor use

- The Carbon Black background and Volt Yellow accents are chosen specifically for **direct sunlight** readability. If the screen still feels dim, slightly tilt the tablet to angle the polarisation correctly.
- The smartwatch's **haptic alert** is calibrated for a Champions League-noise stadium (≈ 108 dB). You will feel it.
- Voice annotations on the AR glasses are **off by default** because crowd noise defeats voice recognition. Leave them off in matches; turn them on for training sessions.
- If the LTE channel drops to 1 bar or below, the system switches to a degraded-bandwidth mode — alerts still go through, but live statistics update every 5 s instead of every 1 s.

---

## 7. Glossary

| Term | What it means |
| :--- | :--- |
| **Compactness** | The spread of the defensive line measured in metres. Lower = tighter back four. |
| **Field Radar** | The AR Glasses' main tactical overlay layer. |
| **Frame capture** | A snapshot of the current AR view, saved to the Sync Gallery and routed to the tablet. |
| **Gaze + dwell** | The AR Glasses' selection gesture. Look at an item, hold for 600 ms. |
| **Private LTE** | The stadium's dedicated cellular channel used by COACHR. No Wi-Fi. |
| **Skeleton Tracking** | AI-powered biomechanical analysis of player posture. |
| **Synced tactic** | A tactical moment captured on the AR Glasses and delivered to the tablet. |
| **TacticPad** | The drawing surface on the tablet for authoring tactics. |
| **xG** | Expected goals — a statistical model estimating the quality of scoring chances. |

---

## 8. Support

Issues with the COACHR system should be reported to your club's tactical-tech officer or directly via the in-app **Help** option (top-right gear on every screen). Support engineers are on call during all top-flight LaLiga matches.

For coaches and staff in countries other than Spain, the same system works on any private-LTE-equipped stadium with a COACHR licence.
