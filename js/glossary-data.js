/* Mechatronics Studio glossary data. To extend: add a line to ENTRIES using
   E(category, term, expansion, definition, lessonKey). Leave expansion as "" when not an acronym.
   Lesson keys are listed in LESSONS. Keep prose free of dash punctuation. */
(function () {
  "use strict";

  var CATEGORIES = [
    { id: "fnd", name: "Foundations and systems" },
    { id: "sen", name: "Sensors and measurement" },
    { id: "sig", name: "Signal conditioning and electronics" },
    { id: "dig", name: "Digital and embedded" },
    { id: "act", name: "Actuators" },
    { id: "pwr", name: "Power electronics and drives" },
    { id: "ctl", name: "Control theory" },
    { id: "rob", name: "Robotics" },
    { id: "est", name: "Estimation and sensor fusion" },
    { id: "sw", name: "Software and communications" },
    { id: "ind", name: "Industrial automation" },
    { id: "mech", name: "Mechanical elements and CAD/CAM" },
    { id: "saf", name: "Safety and standards" },
    { id: "ai", name: "AI and modern topics" }
  ];

  var LESSONS = {
    wm: ["01-what-is-mechatronics", "What is mechatronics?"],
    st: ["01-systems-thinking", "Systems thinking and feedback"],
    mc: ["01-measurement-and-control", "Measurement and control"],
    sa: ["02-sensors-and-transducers", "Sensors and transducers"],
    dm: ["02-displacement-motion-force", "Displacement, motion and force"],
    ps: ["02-process-sensors", "Process sensors"],
    sc: ["02-signal-conditioning", "Signal conditioning"],
    ad: ["03-analogue-digital", "Analogue to digital"],
    dl: ["03-digital-logic", "Digital logic"],
    dp: ["03-data-presentation", "Data presentation and DAQ"],
    fp: ["04-fluid-power", "Fluid power"],
    ma: ["04-mechanical-actuation", "Mechanical actuation"],
    ea: ["04-electrical-actuation", "Electrical actuation"],
    mp: ["05-microprocessors", "Microprocessors and MCUs"],
    ce: ["05-c-and-embedded", "C and embedded software"],
    pl: ["05-plcs", "Programmable logic controllers"],
    cf: ["05-communications-and-faults", "Communications and faults"],
    sm: ["06-system-models", "System models"],
    dt: ["06-dynamics-and-transfer", "Dynamics and transfer functions"],
    fs: ["06-frequency-and-stability", "Frequency response and stability"],
    pid: ["06-closed-loop-and-pid", "Closed loop control and PID"],
    ai: ["06-ai-in-mechatronics", "AI in mechatronics"],
    md: ["07-mechatronic-design", "Mechatronic design"],
    cs1: ["07-case-abs-and-camera", "Case studies: ABS and camera"],
    cs2: ["07-case-cnc-and-appliance", "Case studies: CNC and appliance"],
    i4: ["08-industry-40-and-cps", "Industry 4.0 and cyber physical systems"],
    stn: ["08-sensors-then-vs-now", "Sensors: then vs now"],
    dr: ["08-drives-and-actuators-now", "Drives and actuators now"],
    co: ["08-controllers-now", "Controllers now"],
    nw: ["08-industrial-networks", "Industrial networks"],
    ros: ["08-ros2-and-software", "ROS 2 and modern software"],
    twin: ["08-digital-twins-and-edge-ai", "Digital twins and edge AI"],
    cob: ["08-cobots-safety-security", "Cobots, safety and OT security"],
    sp: ["09-spatial-thinking", "Spatial transforms and frames"],
    fk: ["09-forward-kinematics", "Forward kinematics intuition"],
    jac: ["09-jacobians-and-singularities", "Jacobians and singularities"],
    ik: ["09-inverse-kinematics-trajectories", "IK and trajectories"],
    dpid: ["09-discrete-pid-on-mcus", "Discrete PID on MCUs"],
    kal: ["09-sensor-fusion-kalman-intuition", "Sensor fusion intuition"],
    mpl: ["09-motion-planning-overview", "Motion planning overview"],
    mob: ["09-mobile-robots-nonholonomic", "Mobile robots intro"],
    p1: ["10-project-sense-and-display", "Project A Sense and display"],
    p2: ["10-project-closed-loop-position", "Project B Closed loop position"],
    p3: ["10-project-line-follower", "Project C Line or wall follower"],
    p4: ["10-project-two-link-arm", "Project D Two link arm"],
    p5: ["10-project-ros2-mini-stack", "Project E ROS 2 mini stack"]
  };

  var ENTRIES = [];
  function E(cat, term, exp, def, lesson) {
    ENTRIES.push({ cat: cat, term: term, exp: exp || "", def: def, lesson: lesson || "" });
  }

  /* ---------- Foundations and systems ---------- */
  E("fnd","Mechatronics","","The integrated design of mechanical structures, electronics, sensing, control and software so that a product behaves intelligently as one system.","wm");
  E("fnd","System","","A set of connected parts that work together, described by its inputs, outputs and the boundary that separates it from its environment.","st");
  E("fnd","Plant","","The physical process or mechanism that is being measured or controlled.","st");
  E("fnd","Setpoint","","The desired value of a controlled variable, also called the reference.","pid");
  E("fnd","Feedback","","Routing a measured output back to the input side so the system can correct its own behaviour.","st");
  E("fnd","Open loop control","","Control that sends commands without measuring the result, so errors and disturbances go uncorrected.","st");
  E("fnd","Closed loop control","","Control that measures the output, compares it with the setpoint and acts on the difference.","pid");
  E("fnd","Negative feedback","","Feedback that opposes a deviation, which tends to stabilize a system and reduce error.","st");
  E("fnd","Positive feedback","","Feedback that reinforces a deviation, which can cause runaway growth or latching behaviour.","st");
  E("fnd","Disturbance","","An unwanted input such as a load change or ambient shift that pushes the plant away from its target.","st");
  E("fnd","Input","","A signal or energy flow that enters a system or block from outside it.","st");
  E("fnd","Output","","A signal or energy flow that a system or block delivers to its environment.","st");
  E("fnd","Block diagram","","A drawing that shows system parts as boxes joined by arrows carrying signals.","sm");
  E("fnd","Summing junction","","The point in a block diagram where signals are added or subtracted, often to form an error.","sm");
  E("fnd","Error signal","","The difference between the setpoint and the measured value, used by the controller to decide its action.","pid");
  E("fnd","Controlled variable","","The quantity that the control system tries to hold at its setpoint, such as speed or temperature.","pid");
  E("fnd","Manipulated variable","","The quantity the controller adjusts to influence the process, such as valve opening or motor voltage.","pid");
  E("fnd","Transducer","","A device that converts energy from one form to another. Sensors and many actuators are transducers.","sa");
  E("fnd","Sensor","","A device that detects a physical quantity and produces a signal that represents it.","sa");
  E("fnd","Actuator","","A device that turns a control signal into physical action such as force, motion, flow or heat.","wm");
  E("fnd","Embedded system","","A computer built into a product to perform dedicated control or monitoring tasks.","mp");
  E("fnd","Mechatronic design","","A design process that develops the mechanics, electronics and software together rather than one after another.","md");
  E("fnd","V model","","A development process that pairs each design stage on the way down with a matching test stage on the way up.","md");
  E("fnd","Requirements specification","","A written list of what a system must do and how well, used to guide design and testing.","md");
  E("fnd","Concurrent engineering","","Working on several design disciplines at the same time so conflicts are found early.","md");
  E("fnd","Tolerance","","The permitted variation in a dimension or value from its nominal figure.","md");
  E("fnd","Black box model","","A model that describes input to output behaviour without describing what happens inside.","sm");
  E("fnd","Lumped parameter model","","A model that treats a physical system as a few idealized elements such as masses, springs and resistors.","sm");
  E("fnd","Electrical mechanical analogy","","The matching of mathematical form between domains, such as mass and inductance or spring and capacitance, so one method can model many systems.","sm");
  E("fnd","Resolution","","The smallest change in a quantity that a sensor or converter can distinguish.","sa");
  E("fnd","Bandwidth","","The range of frequencies over which a system responds usefully, often measured to the point where gain falls by 3 dB.","fs");
  E("fnd","Signal","","A varying quantity, usually a voltage or a number, that carries information.","mc");
  E("fnd","Noise","","Unwanted random variation added to a signal that hides the information in it.","sc");
  E("fnd","Degrees of freedom","","The number of independent coordinates needed to describe the configuration of a mechanism. Often shortened to DOF.","sp");
  E("fnd","Prototype","","An early working model built to test a design idea before final production.","md");
  E("fnd","Product life cycle","","The stages a product passes through from concept and design to use, maintenance and disposal.","md");
  E("fnd","Reliability","","The probability that a system performs its required function for a stated time under stated conditions.","cf");
  E("fnd","Robustness","","The ability of a design or controller to keep working well when parameters or conditions differ from the nominal case.","pid");
  E("fnd","Model based design","","A workflow in which simulation models are used to design, test and often generate code for the final system.","md");
  E("fnd","Simulation","","Running a model over time on a computer to predict how a system would behave.","sm");
  E("fnd","Hardware in the loop","","A test method where real controller hardware runs against a simulated plant in real time. Often shortened to HIL.","md");
  E("fnd","Software in the loop","","A test method where the controller software runs against a simulated plant on a computer without target hardware.","md");
  E("fnd","Systems engineering","","A discipline that manages requirements, architecture, integration and verification for complex systems.","md");
  E("fnd","Modularity","","Building a system from separable units with clear interfaces so each can be changed or reused.","md");

  /* ---------- Sensors and measurement ---------- */
  E("sen","Measurand","","The quantity that is intended to be measured.","sa");
  E("sen","Accuracy","","How close a measured value lies to the true value.","sa");
  E("sen","Precision","","How closely repeated measurements agree with each other, regardless of the true value.","sa");
  E("sen","Repeatability","","The ability of a sensor to give the same reading when the same input is applied under the same conditions.","sa");
  E("sen","Linearity","","How closely a sensor output follows a straight line against its input.","sa");
  E("sen","Sensitivity","","The change in sensor output per unit change in the measured quantity.","sa");
  E("sen","Range","","The span from the lowest to the highest value a sensor can measure within specification.","sa");
  E("sen","Span","","The algebraic difference between the upper and lower limits of a measuring range.","sa");
  E("sen","Hysteresis","","A difference in output for the same input depending on whether the input is rising or falling.","sa");
  E("sen","Dead band","","A region of input over which the output does not change measurably.","sa");
  E("sen","Drift","","A slow change in a sensor reading over time or temperature while the input stays constant.","sa");
  E("sen","Offset","","A constant error that shifts all readings by the same amount, often seen as a nonzero output at zero input.","sa");
  E("sen","Calibration","","Comparing a sensor against a known reference and adjusting or recording corrections so its readings are trustworthy.","sa");
  E("sen","Signal to noise ratio","","The ratio of useful signal power to noise power, often expressed in decibels. Often shortened to SNR.","sc");
  E("sen","Response time","","The time a sensor needs to reach a stated percentage of its final value after a step change in input.","sa");
  E("sen","Potentiometer","","A variable resistor whose wiper position gives a voltage proportional to linear or angular displacement.","dm");
  E("sen","Strain gauge","","A resistive element that changes resistance when stretched or compressed, used to measure strain and force.","dm");
  E("sen","Gauge factor","","The ratio of fractional resistance change to strain in a strain gauge.","dm");
  E("sen","Load cell","","A force sensor that usually uses strain gauges on an elastic body to produce a signal proportional to load.","dm");
  E("sen","LVDT","Linear variable differential transformer","An inductive position sensor in which a moving core changes the coupling between a primary coil and two secondary coils.","dm");
  E("sen","Capacitive sensor","","A sensor that detects changes in capacitance caused by distance, area or the material between plates.","dm");
  E("sen","Inductive proximity sensor","","A sensor that detects nearby metal objects through changes in an oscillating magnetic field, without contact.","dm");
  E("sen","Hall effect sensor","","A sensor that produces a voltage proportional to the magnetic field passing through a thin conductor carrying current.","dm");
  E("sen","Optical encoder","","A sensor that uses light through or reflected from a patterned disc to report shaft position or speed.","dm");
  E("sen","Incremental encoder","","An encoder that outputs pulses as the shaft moves, so position is found by counting them from a reference.","dm");
  E("sen","Absolute encoder","","An encoder that outputs a unique code for each shaft position, so position is known immediately at power up.","dm");
  E("sen","Quadrature encoding","","Two pulse trains offset by a quarter cycle that let a counter determine both direction and distance of motion.","dm");
  E("sen","Resolver","","A rotary transformer type sensor whose output voltages vary with the sine and cosine of shaft angle.","dm");
  E("sen","Tachogenerator","","A small generator that produces a voltage proportional to shaft speed.","dm");
  E("sen","Accelerometer","","A sensor that measures acceleration, often by sensing the displacement of a small proof mass.","dm");
  E("sen","Gyroscope","","A sensor that measures angular rate. MEMS versions rely on the Coriolis effect on a vibrating structure.","dm");
  E("sen","IMU","Inertial measurement unit","A package that combines accelerometers and gyroscopes, sometimes magnetometers, to report motion and orientation.","kal");
  E("sen","Magnetometer","","A sensor that measures magnetic field strength and is often used as a compass reference.","kal");
  E("sen","MEMS","Micro electromechanical systems","Miniature mechanical structures built on silicon chips together with electronics, common in accelerometers and gyroscopes.","stn");
  E("sen","Piezoelectric sensor","","A sensor using a material that generates electric charge when deformed, suited to dynamic force and vibration.","dm");
  E("sen","Thermocouple","","A temperature sensor made from two different metals joined together, which produces a small voltage that depends on temperature difference.","ps");
  E("sen","RTD","Resistance temperature detector","A temperature sensor whose metal element, often platinum, changes resistance in a predictable way with temperature.","ps");
  E("sen","Thermistor","","A temperature sensitive resistor made of semiconductor material, with a large but nonlinear change in resistance.","ps");
  E("sen","Cold junction compensation","","A correction for the temperature at the point where a thermocouple connects to the measuring circuit.","ps");
  E("sen","Pressure transducer","","A sensor that converts fluid pressure into an electrical signal, commonly using a diaphragm and strain elements.","ps");
  E("sen","Differential pressure","","The difference between two pressures, often used to infer flow or level.","ps");
  E("sen","Orifice plate","","A plate with a hole placed in a pipe so the pressure drop across it indicates flow rate.","ps");
  E("sen","Flow meter","","An instrument that measures the rate at which fluid moves through a pipe.","ps");
  E("sen","Ultrasonic sensor","","A sensor that measures distance by timing the echo of a sound pulse above human hearing.","ps");
  E("sen","Time of flight","","A ranging method that measures how long a pulse of light or sound takes to travel to a target and back.","stn");
  E("sen","LiDAR","Light detection and ranging","A sensor that measures distance by timing laser pulses, often scanned to build a map of surroundings.","stn");
  E("sen","Radar","Radio detection and ranging","A sensor that uses radio waves to detect range, speed and direction of objects.","stn");
  E("sen","Photodiode","","A semiconductor diode that produces current when light falls on it.","sa");
  E("sen","Phototransistor","","A transistor whose current is controlled by incident light, giving more gain than a photodiode.","sa");
  E("sen","Proximity sensor","","A sensor that detects the presence of a nearby object without touching it.","dm");
  E("sen","Limit switch","","A mechanical switch operated by contact with a moving part to signal end of travel or presence.","dm");
  E("sen","Tactile sensor","","A sensor that detects touch, contact force or pressure distribution, used on robot grippers and skins.","sa");
  E("sen","Smart sensor","","A sensor that includes processing and communication so it can scale, filter and report digital data itself.","stn");
  E("sen","Image sensor","","A chip with an array of light sensitive cells that converts a scene into electrical signals, such as CCD or CMOS types.","cs1");
  E("sen","Machine vision","","Using cameras and image processing to inspect, measure or guide automated equipment.","cs1");
  E("sen","Pt100","","A common platinum RTD that has a resistance of 100 ohms at 0 degrees Celsius.","ps");
  E("sen","Sensor fusion","","Combining data from several sensors to obtain a better estimate than any single sensor can give.","kal");
  E("sen","Level sensor","","A sensor that measures the height or presence of a liquid or solid in a container.","ps");
  E("sen","Humidity sensor","","A sensor that measures water vapour in air, often through a capacitance change in a polymer film.","ps");
  E("sen","Torque sensor","","A sensor that measures twisting force on a shaft, commonly using strain gauges.","dm");
  E("sen","Linear scale","","A position sensor with a graduated track read optically or magnetically to give linear displacement.","dm");
  E("sen","RVDT","Rotary variable differential transformer","An inductive angle sensor that works like an LVDT but with a rotating core.","dm");
  E("sen","Sampling","","Measuring a continuous signal at regular instants to produce a sequence of numbers.","ad");

  /* ---------- Signal conditioning and electronics ---------- */
  E("sig","Signal conditioning","","Circuits that scale, filter, isolate and convert a raw sensor signal into a form suited to the next stage.","sc");
  E("sig","Operational amplifier","","A high gain differential amplifier that, with feedback, forms the basis of many analogue circuits. Often shortened to op amp.","sc");
  E("sig","Inverting amplifier","","An op amp circuit whose output is a scaled version of the input with the sign reversed.","sc");
  E("sig","Non inverting amplifier","","An op amp circuit that scales the input with a gain of at least one and no sign reversal.","sc");
  E("sig","Voltage follower","","An op amp circuit with unity gain and very high input impedance that buffers a signal source.","sc");
  E("sig","Differential amplifier","","An amplifier that increases the difference between two inputs while rejecting what they have in common.","sc");
  E("sig","Instrumentation amplifier","","A precision differential amplifier with high input impedance and adjustable gain, used with bridge sensors.","sc");
  E("sig","CMRR","Common mode rejection ratio","A measure of how well a differential amplifier suppresses a signal that appears equally on both inputs.","sc");
  E("sig","Wheatstone bridge","","A four resistor network that turns a small resistance change into a differential voltage.","sc");
  E("sig","Summing amplifier","","An op amp circuit whose output is a weighted sum of several inputs.","sc");
  E("sig","Integrator circuit","","An op amp circuit whose output is proportional to the time integral of the input.","sc");
  E("sig","Differentiator circuit","","An op amp circuit whose output is proportional to the rate of change of the input, and which amplifies noise.","sc");
  E("sig","Comparator","","A circuit that outputs a high or low level depending on which of two inputs is larger.","sc");
  E("sig","Schmitt trigger","","A comparator with hysteresis that gives clean switching from slow or noisy inputs.","sc");
  E("sig","Low pass filter","","A filter that passes low frequencies and attenuates frequencies above a cutoff.","sc");
  E("sig","High pass filter","","A filter that passes high frequencies and attenuates those below a cutoff.","sc");
  E("sig","Band pass filter","","A filter that passes a band of frequencies and attenuates those outside it.","sc");
  E("sig","Notch filter","","A filter that strongly attenuates one narrow frequency band, often used for mains hum or a mechanical resonance.","sc");
  E("sig","Cutoff frequency","","The frequency at which a filter output has fallen to about 70.7 percent of its passband level, or 3 dB down.","sc");
  E("sig","Anti aliasing filter","","A low pass filter placed before an ADC to remove frequencies that would fold into the sampled band.","ad");
  E("sig","Active filter","","A filter that uses amplifiers as well as resistors and capacitors, allowing gain and sharper response.","sc");
  E("sig","Passive filter","","A filter built only from resistors, capacitors and inductors.","sc");
  E("sig","Impedance","","The opposition a circuit presents to alternating current, combining resistance and reactance.","sc");
  E("sig","Impedance matching","","Choosing source and load impedances so signal transfer or signal quality is best for the application.","sc");
  E("sig","Loading effect","","Error caused when a measuring circuit draws current from the source and so changes the value being measured.","sc");
  E("sig","Ground loop","","An unwanted current path between two grounds that injects noise into a measurement.","sc");
  E("sig","Shielding","","Enclosing conductors in a grounded conductive layer to reduce pickup of electromagnetic interference.","sc");
  E("sig","Twisted pair","","Two wires twisted together so that interference couples equally into both and cancels in a differential receiver.","sc");
  E("sig","EMI","Electromagnetic interference","Unwanted electrical disturbance from external sources that corrupts signals.","sc");
  E("sig","EMC","Electromagnetic compatibility","The ability of equipment to work in its electromagnetic environment without causing or suffering unacceptable interference.","sc");
  E("sig","Optocoupler","","A component that uses an LED and a light detector in one package to pass a signal while keeping the two sides electrically isolated.","sc");
  E("sig","Galvanic isolation","","Separation of two circuits so that no direct conducting path exists between them.","sc");
  E("sig","Current loop 4 to 20 mA","","An analogue signal standard in which a current between 4 and 20 milliamps represents the measured range, which makes broken wires detectable.","sc");
  E("sig","Pull up resistor","","A resistor that ties an input to the supply voltage so it has a defined high level when nothing drives it.","dl");
  E("sig","Pull down resistor","","A resistor that ties an input to ground so it has a defined low level when nothing drives it.","dl");
  E("sig","Debouncing","","Removing the rapid false transitions that occur when a mechanical contact opens or closes.","dl");
  E("sig","ADC","Analogue to digital converter","A circuit that converts a continuous voltage into a number.","ad");
  E("sig","DAC","Digital to analogue converter","A circuit that converts a number into a voltage or current.","ad");
  E("sig","Successive approximation","","An ADC method that tests one bit at a time from the most significant bit down to find the digital value.","ad");
  E("sig","Sigma delta converter","","An ADC that oversamples with a coarse quantizer and noise shaping to achieve high resolution at modest bandwidth.","ad");
  E("sig","Flash converter","","A very fast ADC that uses one comparator per level to produce the result in a single step.","ad");
  E("sig","Quantisation","","Mapping a continuous amplitude onto a finite set of discrete levels.","ad");
  E("sig","Quantisation error","","The difference between the true analogue value and the nearest digital level, up to half a step.","ad");
  E("sig","LSB","Least significant bit","The smallest step of a converter, or the bit in a binary word with the lowest weight.","ad");
  E("sig","Aliasing","","Distortion that appears when a signal is sampled too slowly, so high frequencies masquerade as lower ones.","ad");
  E("sig","Nyquist rate","","Twice the highest frequency in a signal, the minimum sampling rate needed to represent it without aliasing.","ad");
  E("sig","Sample and hold","","A circuit that captures a voltage and keeps it steady while the converter works.","ad");
  E("sig","Multiplexer","","A switch that selects one of several inputs and passes it to a single output.","dl");
  E("sig","Decibel","","A logarithmic unit for ratios. For amplitude, gain in dB is 20 times the base ten logarithm of the ratio.","fs");
  E("sig","Thermal noise","","Random voltage across a resistor caused by thermal motion of charge carriers, also called Johnson noise.","sc");
  E("sig","Transistor","","A semiconductor device used as a switch or amplifier, controlled by a small input signal.","ea");
  E("sig","Diode","","A component that conducts current mainly in one direction.","ea");
  E("sig","Flyback diode","","A diode placed across an inductive load to give the current a path when the switch turns off, which limits voltage spikes.","ea");
  E("sig","Zener diode","","A diode designed to conduct in reverse at a set voltage, used for clamping and simple regulation.","sc");
  E("sig","Voltage regulator","","A circuit that keeps a supply voltage steady despite changes in input or load.","sc");
  E("sig","Bridge circuit","","A network of four impedances arranged so that a balance condition reveals a small change in one of them.","sc");
  E("sig","Lock in amplifier","","An instrument that extracts a signal at a known frequency from heavy noise by multiplying and averaging.","sc");

  /* ---------- Digital and embedded ---------- */
  E("dig","Binary","","A number system that uses only the digits 0 and 1.","dl");
  E("dig","Boolean algebra","","The mathematics of true and false values and the operations AND, OR and NOT.","dl");
  E("dig","Logic gate","","A circuit that implements a basic Boolean function on one or more digital inputs.","dl");
  E("dig","Truth table","","A table listing the output of a logic function for every combination of inputs.","dl");
  E("dig","Combinational logic","","Logic whose outputs depend only on the present inputs.","dl");
  E("dig","Sequential logic","","Logic whose outputs depend on present inputs and stored past state.","dl");
  E("dig","Flip flop","","A circuit element that stores one bit and changes state on a clock edge or control input.","dl");
  E("dig","Register","","A small group of flip flops that holds a binary word inside a processor or peripheral.","mp");
  E("dig","Counter","","A sequential circuit that steps through a series of binary values in response to pulses.","dl");
  E("dig","Finite state machine","","A model with a limited set of states and rules for moving between them based on inputs.","dl");
  E("dig","Clock","","A periodic signal that synchronizes the operations of digital circuits.","mp");
  E("dig","Microprocessor","","A processing unit on a chip that needs external memory and peripherals to form a computer.","mp");
  E("dig","MCU","Microcontroller unit","A single chip that combines a processor, memory and peripherals for embedded control.","mp");
  E("dig","CPU","Central processing unit","The part of a computer that fetches and executes instructions.","mp");
  E("dig","ISA","Instruction set architecture","The set of instructions a processor understands, which defines the interface between software and hardware.","mp");
  E("dig","ARM Cortex M","","A family of 32 bit processor cores widely used in microcontrollers.","mp");
  E("dig","RISC","Reduced instruction set computer","A processor design approach that uses a small set of simple instructions.","mp");
  E("dig","Memory map","","The layout that assigns address ranges to memory and peripherals.","mp");
  E("dig","RAM","Random access memory","Fast volatile memory used for variables and the stack while a program runs.","mp");
  E("dig","ROM","Read only memory","Nonvolatile memory that holds fixed program code or data.","mp");
  E("dig","Flash memory","","Nonvolatile memory that can be erased in blocks and rewritten, commonly used to store firmware.","mp");
  E("dig","EEPROM","Electrically erasable programmable read only memory","Nonvolatile memory that can be rewritten byte by byte, used for settings and calibration data.","mp");
  E("dig","GPIO","General purpose input output","A pin that software can configure as a digital input or output.","mp");
  E("dig","Interrupt","","A hardware signal that pauses normal program flow so a handler can respond to an event promptly.","ce");
  E("dig","ISR","Interrupt service routine","The function that runs when an interrupt occurs.","ce");
  E("dig","Polling","","Repeatedly checking a status flag to see whether an event has occurred.","ce");
  E("dig","Timer","","A hardware counter that measures intervals or generates periodic events and PWM signals.","mp");
  E("dig","PWM","Pulse width modulation","Encoding a value in the fraction of each period that a signal is high, which sets an average drive level.","ea");
  E("dig","Duty cycle","","The percentage of a period during which a signal is high.","ea");
  E("dig","DMA","Direct memory access","A mechanism that moves data between peripherals and memory without the CPU handling each transfer.","mp");
  E("dig","Watchdog timer","","A timer that resets the system if software fails to service it in time.","cf");
  E("dig","Brown out detection","","Hardware that resets or warns the processor when the supply voltage falls too low for reliable operation.","cf");
  E("dig","Bootloader","","A small program that starts on reset and can load or update the main application firmware.","ce");
  E("dig","Firmware","","Software stored in nonvolatile memory that runs directly on an embedded device.","ce");
  E("dig","RTOS","Real time operating system","An operating system designed to run tasks with predictable and bounded response times.","ce");
  E("dig","Scheduler","","The part of an operating system that decides which task runs next.","ce");
  E("dig","Task priority","","A ranking that lets more urgent tasks run before less urgent ones in a real time system.","ce");
  E("dig","Latency","","The delay between an event or request and the response to it.","ce");
  E("dig","Jitter","","Variation in the timing of a periodic event from its ideal schedule.","ce");
  E("dig","Determinism","","The property that a system responds in a repeatable and predictable time.","ce");
  E("dig","Hard real time","","A requirement that missing a deadline counts as a system failure, so timing must be guaranteed.","ce");
  E("dig","Soft real time","","A requirement where occasional late results reduce quality but do not cause failure.","ce");
  E("dig","Race condition","","A bug in which the result depends on the unpredictable order of competing operations.","ce");
  E("dig","Mutex","","A lock that lets only one task at a time use a shared resource.","ce");
  E("dig","Volatile qualifier","","A C keyword telling the compiler that a variable can change outside normal program flow, so it must be read from memory each time.","ce");
  E("dig","Stack","","A region of memory used for function calls and local variables in last in, first out order.","ce");
  E("dig","Heap","","A region of memory used for dynamic allocation at run time, often avoided in small embedded systems.","ce");
  E("dig","Fixed point arithmetic","","Representing fractional numbers as scaled integers, which is fast on processors without floating point hardware.","dpid");
  E("dig","FPU","Floating point unit","Hardware that performs arithmetic on numbers with a movable decimal point.","mp");
  E("dig","Endianness","","The order in which the bytes of a multi byte number are stored in memory.","ce");
  E("dig","Bit masking","","Using logical operations to read, set or clear selected bits in a word.","ce");
  E("dig","Cross compiler","","A compiler that runs on one kind of computer and produces code for a different target processor.","ce");
  E("dig","JTAG","Joint Test Action Group","A standard debug and test interface that allows programming and inspecting a chip through a few pins.","ce");
  E("dig","SWD","Serial wire debug","A two pin debug interface used on ARM microcontrollers.","ce");
  E("dig","FPGA","Field programmable gate array","A chip whose logic can be reconfigured to build custom parallel digital circuits.","co");
  E("dig","ASIC","Application specific integrated circuit","A chip designed for one specific purpose, efficient at volume but costly to develop.","co");
  E("dig","SoC","System on chip","An integrated circuit that combines processor cores, memory and peripherals, and sometimes accelerators, on one die.","co");
  E("dig","DSP","Digital signal processor","A processor optimized for fast repetitive mathematics such as filtering and transforms.","co");
  E("dig","UART","Universal asynchronous receiver transmitter","A serial interface that sends bytes one bit at a time without a shared clock.","cf");
  E("dig","SPI","Serial peripheral interface","A fast synchronous serial bus with a clock line and separate data lines, used between a controller and nearby chips.","cf");
  E("dig","I2C","Inter integrated circuit","A two wire synchronous bus in which many devices share a clock and a data line using addresses.","cf");
  E("dig","Baud rate","","The number of signal symbols sent per second on a serial link, which equals bits per second for simple binary signalling.","cf");
  E("dig","Parity bit","","An extra bit added to data so that a single bit error can be detected.","cf");
  E("dig","CRC","Cyclic redundancy check","An error detecting code computed from a block of data to reveal corruption.","cf");
  E("dig","Checksum","","A small value derived from data and sent with it so the receiver can check for errors.","cf");
  E("dig","Memory mapped I/O","","A scheme in which peripheral registers appear at memory addresses and are accessed like variables.","mp");
  E("dig","Edge triggered","","Responding to a signal transition rather than to its steady level.","dl");
  E("dig","Tri state output","","A digital output that can be high, low or disconnected, which lets several devices share a bus.","dl");
  E("dig","Hexadecimal","","A base 16 number system that writes binary values compactly using digits 0 to 9 and letters A to F.","dl");
  E("dig","Two's complement","","The standard way to represent signed integers in binary, in which negative numbers are formed by inverting bits and adding one.","dl");
  E("dig","Sampling rate","","The number of samples taken per second from a signal.","ad");
  E("dig","DAQ","Data acquisition","Hardware and software that digitize and record signals from sensors.","dp");
  E("dig","Data logger","","A device that records measurements over time for later analysis.","dp");

  /* ---------- Actuators ---------- */
  E("act","DC motor","Direct current motor","A motor that runs from DC, with speed set mainly by voltage and torque set mainly by current.","ea");
  E("act","Brushed DC motor","","A DC motor that uses carbon brushes and a commutator to switch current in the rotor windings.","ea");
  E("act","BLDC motor","Brushless DC motor","A motor with permanent magnets on the rotor and electronically switched stator windings, so it needs no brushes.","ea");
  E("act","Commutator","","A rotating switch on a brushed motor that reverses winding current at the right angle to keep torque in one direction.","ea");
  E("act","PMSM","Permanent magnet synchronous motor","An AC motor whose rotor magnets lock to a rotating stator field, common in servo drives.","dr");
  E("act","AC induction motor","","An AC motor in which the stator field induces current in the rotor, so the rotor turns slightly slower than the field.","ea");
  E("act","Slip","","The fractional difference between the speed of the rotating field and the speed of an induction motor rotor.","ea");
  E("act","Synchronous speed","","The speed of the rotating magnetic field, set by supply frequency and number of poles.","ea");
  E("act","Stepper motor","","A motor that moves in fixed angular steps when its windings are energized in sequence.","ea");
  E("act","Step angle","","The angle a stepper motor shaft turns for one step pulse.","ea");
  E("act","Microstepping","","Driving stepper windings with intermediate current levels to obtain finer positions and smoother motion.","ea");
  E("act","Holding torque","","The torque a stepper motor can resist while energized and standing still.","ea");
  E("act","Servo motor","","A motor combined with feedback and a controller so that position, speed or torque follows a command.","ea");
  E("act","Servo drive","","The power electronics and control loops that run a servo motor from a command signal.","dr");
  E("act","Hobby servo","","A small geared motor with built in position feedback that follows a pulse width command.","ea");
  E("act","Linear motor","","A motor that produces straight line force directly, like an unrolled rotary motor.","dr");
  E("act","Voice coil actuator","","A short stroke linear actuator in which force is proportional to coil current in a magnetic field.","dr");
  E("act","Solenoid","","A coil that pulls a ferromagnetic plunger when energized, giving short stroke linear motion.","ea");
  E("act","Relay","","An electrically operated switch that lets a small signal control a separate circuit.","ea");
  E("act","Contactor","","A heavy duty relay designed to switch motor and power circuits.","ea");
  E("act","Torque constant","","The ratio of motor torque to current, often written Kt.","ea");
  E("act","Back EMF","Back electromotive force","The voltage a rotating motor generates that opposes the applied voltage and rises with speed.","ea");
  E("act","Armature","","The part of a machine that carries the main current windings, often the rotor in brushed motors.","ea");
  E("act","Cogging torque","","A ripple in torque caused by attraction between rotor magnets and stator teeth, felt as notchiness at low speed.","dr");
  E("act","Torque ripple","","The fluctuation of torque around its average value during rotation.","dr");
  E("act","Stall torque","","The torque a motor produces at zero speed with rated voltage applied.","ea");
  E("act","Rated torque","","The torque a motor can deliver continuously without overheating.","ea");
  E("act","Inertia matching","","Choosing a gear ratio so that load inertia seen by the motor is comparable to rotor inertia, for good control.","ma");
  E("act","Hydraulic actuator","","A cylinder or motor that uses pressurized liquid to produce large force or torque.","fp");
  E("act","Pneumatic actuator","","A cylinder or motor driven by compressed air, valued for speed, simplicity and cleanliness.","fp");
  E("act","Double acting cylinder","","A cylinder that is driven by fluid pressure in both directions.","fp");
  E("act","Single acting cylinder","","A cylinder driven by fluid in one direction and returned by a spring or load.","fp");
  E("act","Directional control valve","","A valve that routes fluid between ports to start, stop or reverse an actuator.","fp");
  E("act","Solenoid valve","","A valve opened or shifted by an electromagnet, so a control signal can switch fluid flow.","fp");
  E("act","Proportional valve","","A valve whose opening varies in proportion to an electrical command.","fp");
  E("act","Servo valve","","A high performance valve with feedback that gives precise, fast control of hydraulic flow or pressure.","fp");
  E("act","Pressure relief valve","","A valve that opens at a set pressure to protect a hydraulic or pneumatic circuit from overload.","fp");
  E("act","Accumulator","","A vessel that stores pressurized fluid energy and smooths pressure pulses in hydraulic systems.","fp");
  E("act","Hydraulic pump","","A machine that converts mechanical power into fluid flow at pressure.","fp");
  E("act","Compressor","","A machine that raises the pressure of air or gas for pneumatic systems.","fp");
  E("act","Piezoelectric actuator","","An actuator that deforms by tiny, precise amounts when voltage is applied across a piezoelectric material.","dr");
  E("act","Piezoelectric effect","","The generation of charge by mechanical stress in certain crystals, and the reverse, deformation under an applied electric field.","dr");
  E("act","SMA","Shape memory alloy","A metal that returns to a remembered shape when heated, which can be used as a compact actuator.","dr");
  E("act","Electroactive polymer","","A plastic like material that changes size or shape when electrically stimulated, used in artificial muscles.","dr");
  E("act","Magnetostrictive actuator","","An actuator that uses a material that changes length in a magnetic field.","dr");
  E("act","Series elastic actuator","","An actuator with a spring in series with the drive so force can be sensed from spring deflection and impacts are softened.","dr");
  E("act","Electrostatic actuator","","A micro scale actuator that moves by attraction between charged surfaces, common in MEMS.","stn");
  E("act","Electric gripper","","An end effector that grasps objects using an electric motor, with controllable force and position.","dr");
  E("act","Vacuum gripper","","An end effector that holds objects with suction.","dr");
  E("act","Soft actuator","","A compliant actuator, often pneumatic, made of flexible material for safe and adaptive motion.","dr");
  E("act","Muscle wire","","A common name for thin shape memory alloy wire that contracts when heated by current.","dr");
  E("act","Heating element","","A resistive component that converts electrical energy to heat for thermal actuation.","ea");
  E("act","Brake","","A device that slows or holds motion by absorbing energy, often electromagnetic or friction based.","ma");
  E("act","Clutch","","A coupling that connects or disconnects two rotating shafts on command.","ma");

  /* ---------- Power electronics and drives ---------- */
  E("pwr","Power electronics","","The use of switching semiconductors to convert and control electrical power efficiently.","dr");
  E("pwr","MOSFET","Metal oxide semiconductor field effect transistor","A voltage controlled transistor widely used as a fast switch in low and medium voltage power circuits.","ea");
  E("pwr","IGBT","Insulated gate bipolar transistor","A power transistor that combines easy gate drive with high current and voltage capability, used in motor drives.","dr");
  E("pwr","Thyristor","","A four layer semiconductor switch that latches on after a gate pulse and turns off when current falls to zero.","ea");
  E("pwr","Triac","","A thyristor type device that conducts in both directions, used to control AC loads.","ea");
  E("pwr","Wide bandgap semiconductor","","A material such as silicon carbide or gallium nitride that allows faster, cooler and more efficient power switches.","dr");
  E("pwr","Gate driver","","A circuit that supplies the voltage and current needed to switch a power transistor quickly.","dr");
  E("pwr","H-bridge","","Four switches arranged so current can flow through a load in either direction, giving reversible motor drive.","ea");
  E("pwr","Half bridge","","Two switches in series across a supply, with the load connected at the midpoint.","dr");
  E("pwr","Dead time (switching)","","A short delay inserted between turning one switch off and its partner on, to avoid shoot through.","dr");
  E("pwr","Shoot through","","A fault in which both switches of a bridge leg conduct at once and short the supply.","dr");
  E("pwr","Inverter","","A power converter that produces AC output from a DC source.","dr");
  E("pwr","Rectifier","","A circuit that converts AC to DC.","dr");
  E("pwr","DC link","","The DC bus between a rectifier and an inverter, usually with capacitors that store energy.","dr");
  E("pwr","VFD","Variable frequency drive","A drive that changes motor speed by varying the frequency and voltage it supplies.","dr");
  E("pwr","V over f control","","A simple drive method that keeps voltage proportional to frequency to hold motor flux roughly constant.","dr");
  E("pwr","Field oriented control","","A vector control method that regulates the torque producing and flux producing current components of an AC motor separately. Often shortened to FOC.","dr");
  E("pwr","Clarke transform","","A transformation that converts three phase quantities into two stationary axes.","dr");
  E("pwr","Park transform","","A transformation that converts stationary axis quantities into a frame rotating with the rotor, so AC values become DC.","dr");
  E("pwr","Space vector modulation","","A switching strategy that chooses inverter states to synthesize a rotating voltage vector with good use of the DC bus.","dr");
  E("pwr","Trapezoidal commutation","","A simple BLDC drive method that energizes two phases at a time in six steps per electrical cycle.","dr");
  E("pwr","Sinusoidal commutation","","Driving motor phases with sine shaped currents for smoother torque than six step control.","dr");
  E("pwr","Hall sensors for commutation","","Magnetic sensors in a brushless motor that report rotor sector so the drive can switch phases at the right moment.","dr");
  E("pwr","Sensorless control","","Motor control that estimates rotor position from voltages and currents instead of using a position sensor.","dr");
  E("pwr","Current loop","","The innermost, fastest control loop in a drive, which regulates motor current and therefore torque.","dr");
  E("pwr","Cascade control","","A structure in which an outer loop sets the reference of a faster inner loop, as in position over velocity over current.","dr");
  E("pwr","Buck converter","","A switching converter that steps a DC voltage down.","dr");
  E("pwr","Boost converter","","A switching converter that steps a DC voltage up.","dr");
  E("pwr","Buck boost converter","","A switching converter that can produce an output voltage either above or below the input.","dr");
  E("pwr","SMPS","Switched mode power supply","A supply that regulates voltage by rapidly switching and filtering, with much higher efficiency than a linear regulator.","dr");
  E("pwr","Linear regulator","","A regulator that drops excess voltage as heat to hold a steady output.","sc");
  E("pwr","Soft starter","","A device that ramps motor voltage on start to limit inrush current and mechanical shock.","dr");
  E("pwr","Regenerative braking","","Using a motor as a generator during deceleration and returning energy to the supply or storing it.","dr");
  E("pwr","Braking resistor","","A resistor that dissipates excess energy from a decelerating motor when it cannot be returned to the supply.","dr");
  E("pwr","Power factor","","The ratio of real power to apparent power in an AC circuit.","dr");
  E("pwr","Harmonics","","Frequency components at multiples of the supply frequency that distort voltage and current waveforms.","dr");
  E("pwr","Heat sink","","A metal structure that spreads and removes heat from a power device.","dr");
  E("pwr","Thermal derating","","Reducing allowed load as temperature rises so components stay within safe limits.","dr");
  E("pwr","Snubber","","A small circuit that limits voltage spikes or rate of rise across a switching device.","dr");
  E("pwr","Current sensing shunt","","A low value resistor placed in a current path so the voltage across it measures current.","dr");
  E("pwr","Three phase supply","","An AC supply with three sinusoids offset by 120 degrees, which gives smooth power delivery for motors.","dr");
  E("pwr","Integrated motor drive","","A motor with its drive electronics built into the same housing.","dr");
  E("pwr","STO","Safe torque off","A drive safety function that removes the power capable of producing torque so the motor cannot move unexpectedly.","cob");
  E("pwr","BMS","Battery management system","Electronics that monitor and protect a battery pack, tracking charge, voltage, current and temperature.","mob");
  E("pwr","State of charge","","The remaining capacity of a battery as a percentage of its full capacity.","mob");
  E("pwr","Lithium ion battery","","A rechargeable battery with high energy density that is common in robots and portable machines.","mob");
  E("pwr","Efficiency","","The ratio of useful output power to input power.","dr");

  /* ---------- Control theory ---------- */
  E("ctl","Transfer function","","The ratio of the Laplace transform of the output to that of the input for a linear time invariant system.","dt");
  E("ctl","Laplace transform","","A mathematical tool that converts differential equations in time into algebraic equations in the complex variable s.","dt");
  E("ctl","Pole","","A value of s at which a transfer function becomes infinite, which sets natural modes of response.","dt");
  E("ctl","Zero","","A value of s at which a transfer function becomes zero.","dt");
  E("ctl","Characteristic equation","","The denominator of a closed loop transfer function set to zero, whose roots are the closed loop poles.","dt");
  E("ctl","First order system","","A system with a single energy storage, characterized by a time constant.","dt");
  E("ctl","Time constant","","The time for a first order step response to reach about 63 percent of its final value.","dt");
  E("ctl","Second order system","","A system with two energy storages, whose step response can be overdamped, critically damped or oscillatory.","dt");
  E("ctl","Natural frequency","","The frequency at which an undamped second order system would oscillate.","dt");
  E("ctl","Damping ratio","","A dimensionless number that describes how quickly oscillations die out in a second order system.","dt");
  E("ctl","Overshoot","","The amount by which a response exceeds its final value, often given as a percentage.","dt");
  E("ctl","Rise time","","The time for a step response to go from a low fraction to a high fraction of its final value, commonly 10 to 90 percent.","dt");
  E("ctl","Settling time","","The time after which a response stays within a small band, such as 2 percent, around its final value.","dt");
  E("ctl","Steady state error","","The remaining difference between the setpoint and the output after transients have died out.","pid");
  E("ctl","Step response","","How a system output evolves when its input changes suddenly from one level to another.","dt");
  E("ctl","Impulse response","","The output of a system to a very short, unit area input pulse, which characterizes a linear system.","dt");
  E("ctl","Stability","","The property that a system settles to an equilibrium rather than growing without bound.","fs");
  E("ctl","BIBO stability","Bounded input bounded output stability","A condition in which every bounded input produces a bounded output.","fs");
  E("ctl","Routh Hurwitz criterion","","A test that decides stability from the polynomial coefficients without finding the roots.","fs");
  E("ctl","Root locus","","A plot of closed loop pole positions as a gain is varied.","fs");
  E("ctl","Bode plot","","A pair of graphs showing gain in decibels and phase against log frequency.","fs");
  E("ctl","Nyquist plot","","A polar plot of the open loop frequency response used to judge closed loop stability.","fs");
  E("ctl","Gain margin","","The factor by which loop gain can increase before the loop becomes unstable.","fs");
  E("ctl","Phase margin","","The extra phase lag that could be added at the gain crossover frequency before the loop reaches instability.","fs");
  E("ctl","Gain crossover frequency","","The frequency at which the open loop gain equals one, or 0 dB.","fs");
  E("ctl","Resonance","","A large response when a system is driven near its natural frequency.","fs");
  E("ctl","Frequency response","","How the amplitude and phase of a system output change with the frequency of a sinusoidal input.","fs");
  E("ctl","Proportional control","","Control action proportional to the error, which is simple but leaves a steady state error on many plants.","pid");
  E("ctl","Integral action","","Control action that accumulates error over time, which removes steady state error.","pid");
  E("ctl","Derivative action","","Control action based on the rate of change of error, which adds damping but amplifies noise.","pid");
  E("ctl","PID controller","","A feedback controller that adds proportional, integral and derivative actions on the error.","pid");
  E("ctl","Integral windup","","Excessive buildup of the integral term while an actuator is saturated, causing large overshoot afterwards.","pid");
  E("ctl","Anti windup","","Techniques that stop the integral term from growing while the actuator is saturated.","pid");
  E("ctl","Derivative kick","","A spike in controller output caused by a sudden setpoint change passing through the derivative term.","dpid");
  E("ctl","Derivative filter","","A low pass filter applied to the derivative term to limit noise amplification.","dpid");
  E("ctl","Ziegler Nichols tuning","","A classical empirical method that sets PID gains from the ultimate gain and oscillation period of the loop.","pid");
  E("ctl","Lead compensator","","A compensator that adds phase lead to improve damping and speed.","pid");
  E("ctl","Lag compensator","","A compensator that raises low frequency gain to reduce steady state error with little effect on stability.","pid");
  E("ctl","Feedforward control","","Control action computed from the reference or a measured disturbance and applied before an error develops.","pid");
  E("ctl","Two degree of freedom controller","","A structure that shapes reference tracking and disturbance rejection separately.","pid");
  E("ctl","On off control","","Control that switches the actuator fully on or off based on a threshold, often with hysteresis.","pid");
  E("ctl","Saturation","","The limit beyond which an actuator or signal cannot increase further.","pid");
  E("ctl","Dead time","","A pure delay between a change in input and the first response at the output.","dt");
  E("ctl","Smith predictor","","A control structure that compensates for known dead time by using a model of the process.","pid");
  E("ctl","State space model","","A description of a system using first order equations in a vector of internal state variables.","sm");
  E("ctl","State feedback","","A control law that computes the input from a weighted sum of the state variables.","sm");
  E("ctl","Controllability","","The property that inputs can drive the system state from any value to any other in finite time.","sm");
  E("ctl","Observability","","The property that the internal state can be determined from the outputs over time.","sm");
  E("ctl","Observer","","An algorithm that estimates unmeasured states from a model, the inputs and the measured outputs.","kal");
  E("ctl","LQR","Linear quadratic regulator","A state feedback design that minimizes a cost balancing state error against control effort.","sm");
  E("ctl","MPC","Model predictive control","A method that repeatedly solves an optimization over a future horizon using a model and applies the first step.","co");
  E("ctl","Adaptive control","","Control that adjusts its own parameters online as the plant changes.","ai");
  E("ctl","Robust control","","Control designed to keep stability and performance despite model errors and disturbances.","pid");
  E("ctl","Sliding mode control","","A nonlinear method that forces the system onto a chosen surface in state space using fast switching.","pid");
  E("ctl","Gain scheduling","","Changing controller gains according to the operating condition of the plant.","pid");
  E("ctl","Linearization","","Approximating a nonlinear system by a linear one around an operating point.","sm");
  E("ctl","Discretization","","Converting a continuous time model or controller into a form that operates on samples.","dpid");
  E("ctl","Sample time","","The interval between successive updates of a digital controller.","dpid");
  E("ctl","Z transform","","A tool for analyzing discrete time systems, the sampled counterpart of the Laplace transform.","dpid");
  E("ctl","Zero order hold","","A model of a DAC that keeps its output constant between sample instants.","dpid");
  E("ctl","Tustin method","","A discretization that uses the trapezoidal rule, also called the bilinear transform.","dpid");
  E("ctl","Sensitivity function","","A function describing how disturbances and model errors influence the closed loop output across frequency.","fs");
  E("ctl","Loop shaping","","Designing a controller by adjusting the shape of the open loop frequency response.","fs");
  E("ctl","Tracking error","","The difference between a time varying reference and the actual output.","pid");
  E("ctl","Disturbance rejection","","The ability of a control loop to keep the output near its setpoint despite disturbances.","pid");
  E("ctl","Fuzzy logic","","A rule based approach that uses graded degrees of truth instead of strict true or false.","ai");
  E("ctl","Mass spring damper","","A basic mechanical model with inertia, stiffness and damping, used to study vibration and response.","sm");
  E("ctl","Moment of inertia","","A measure of how strongly a body resists changes in rotational speed about an axis.","sm");
  E("ctl","Bond graph","","A diagrammatic method that models energy flow between physical domains using effort and flow variables.","sm");
  E("ctl","Vibration isolation","","Reducing transmission of vibration between a source and a structure using springs, dampers or active control.","sm");
  E("ctl","Lyapunov stability","","A notion of stability proved by finding an energy like function that always decreases along system motion.","fs");

  /* ---------- Robotics ---------- */
  E("rob","Robot","","A programmable machine that senses, decides and acts in the physical world, often with multiple controlled axes.","wm");
  E("rob","Manipulator","","A robot arm made of links and joints that positions an end effector.","fk");
  E("rob","Link","","A rigid body in a mechanism that connects joints.","fk");
  E("rob","Joint","","A connection between links that allows relative motion such as rotation or sliding.","fk");
  E("rob","Revolute joint","","A joint that allows rotation about a single axis.","fk");
  E("rob","Prismatic joint","","A joint that allows sliding along a single axis.","fk");
  E("rob","Spherical joint","","A ball and socket joint that allows rotation about three axes.","fk");
  E("rob","End effector","","The tool or hand at the end of a robot arm that interacts with the work.","fk");
  E("rob","Tool center point","","The reference point on a tool whose position and orientation the robot controls. Often shortened to TCP.","fk");
  E("rob","Configuration space","","The space of all values of the joint variables that describe a mechanism pose.","mpl");
  E("rob","Workspace","","The set of positions that an end effector can reach.","fk");
  E("rob","Dexterous workspace","","The set of points the end effector can reach with any orientation.","fk");
  E("rob","Reference frame","","A coordinate system used to describe positions and orientations.","sp");
  E("rob","Rotation matrix","","A square matrix that describes orientation, with orthogonal columns and determinant one.","sp");
  E("rob","Homogeneous transformation","","A four by four matrix that combines a rotation and a translation in one matrix.","sp");
  E("rob","Euler angles","","Three successive rotations about chosen axes used to describe orientation.","sp");
  E("rob","Quaternion","","A four number representation of orientation that avoids gimbal lock.","sp");
  E("rob","Gimbal lock","","A configuration in which two rotation axes align, so one degree of rotational freedom is lost.","sp");
  E("rob","Pose","","The position and orientation of a body in space.","sp");
  E("rob","Forward kinematics","","Computing the end effector pose from given joint values.","fk");
  E("rob","Inverse kinematics","","Finding joint values that place the end effector at a desired pose.","ik");
  E("rob","Denavit Hartenberg parameters","","A convention that describes each link of a serial robot with four numbers to build the kinematic chain systematically.","fk");
  E("rob","Product of exponentials","","A formulation of forward kinematics that multiplies matrix exponentials of joint screw motions.","fk");
  E("rob","Screw axis","","A line in space with a pitch that describes combined rotation about and translation along it.","fk");
  E("rob","Twist","","A velocity of a rigid body described by angular and linear parts together.","jac");
  E("rob","Jacobian","","A matrix that maps joint velocities to end effector velocity.","jac");
  E("rob","Singularity","","A configuration where the Jacobian loses rank, so some end effector motions are impossible or need huge joint speeds.","jac");
  E("rob","Manipulability","","A measure of how freely the end effector can move in different directions at a given configuration.","jac");
  E("rob","Redundant manipulator","","A robot with more degrees of freedom than the task requires, allowing many joint solutions for one pose.","ik");
  E("rob","Elbow up and elbow down","","The two common inverse kinematics solutions of a planar two link arm for the same end point.","ik");
  E("rob","Pseudoinverse","","A generalized matrix inverse used to solve inverse velocity problems when the Jacobian is not square.","jac");
  E("rob","Damped least squares","","An inverse kinematics method that adds damping so it stays well behaved near singularities.","jac");
  E("rob","Trajectory","","A path in space together with timing, so position, velocity and acceleration are defined over time.","ik");
  E("rob","Path","","A geometric route through space or configuration space without timing.","ik");
  E("rob","Joint space planning","","Planning motion directly in joint variables, which is simple but gives curved paths for the tool.","ik");
  E("rob","Cartesian space planning","","Planning motion of the tool in task coordinates, such as a straight line, then converting to joint motion.","ik");
  E("rob","Trapezoidal velocity profile","","A motion profile that accelerates at a constant rate, cruises, then decelerates.","ik");
  E("rob","S curve profile","","A motion profile that limits jerk by smoothing acceleration changes.","ik");
  E("rob","Jerk","","The rate of change of acceleration.","ik");
  E("rob","Cubic polynomial trajectory","","A smooth path between two points that matches start and end positions and velocities.","ik");
  E("rob","Via point","","An intermediate point a trajectory must pass through.","ik");
  E("rob","Manipulator dynamics","","The relationship between joint torques and the resulting motion, including inertia, Coriolis, gravity and friction terms.","jac");
  E("rob","Gravity compensation","","Adding a torque that cancels the effect of gravity on a robot arm.","jac");
  E("rob","Computed torque control","","A method that uses a dynamic model to cancel nonlinear terms so a simple outer loop can control the arm.","jac");
  E("rob","Impedance control","","Control that makes a robot behave like a chosen virtual mass, spring and damper when it touches the world.","cob");
  E("rob","Compliance","","The degree to which a mechanism yields under force, which can be built into hardware or created in software.","cob");
  E("rob","Force control","","Control of the contact force between a robot and its environment.","cob");
  E("rob","Teach pendant","","A handheld unit used to jog a robot, program points and start programs.","cob");
  E("rob","Lead through teaching","","Programming a robot by physically guiding its arm through the desired motion.","cob");
  E("rob","SCARA robot","Selective compliance assembly robot arm","A robot with rotary joints in the horizontal plane and a vertical axis, stiff vertically and compliant horizontally, common in assembly.","fk");
  E("rob","Delta robot","","A parallel robot with light arms linked to a common platform, used for fast pick and place.","fk");
  E("rob","Parallel manipulator","","A robot in which several chains connect the base to the platform at once, giving stiffness and speed.","fk");
  E("rob","Serial manipulator","","A robot in which links are joined end to end in a single chain.","fk");
  E("rob","Gantry robot","","A robot that moves along linear axes mounted on a frame, also called a Cartesian robot.","fk");
  E("rob","Articulated robot","","A robot arm with several rotary joints, like a human arm.","fk");
  E("rob","Humanoid robot","","A robot with a body shape similar to a person, with legs, arms and a head.","mob");
  E("rob","Legged locomotion","","Movement over ground using intermittent foot contacts, as in walking robots.","mob");
  E("rob","ZMP","Zero moment point","A point on the ground about which the net moment from gravity and inertia has no horizontal component, used in biped balance.","mob");
  E("rob","Mobile robot","","A robot that can move through its environment rather than being fixed to a base.","mob");
  E("rob","Differential drive","","A mobile base with two independently driven wheels on one axis, steered by speed difference.","mob");
  E("rob","Ackermann steering","","A steering geometry in which front wheels turn at slightly different angles so they follow concentric arcs.","mob");
  E("rob","Holonomic constraint","","A constraint that limits configuration only, and so reduces the degrees of freedom of a system.","mob");
  E("rob","Nonholonomic constraint","","A velocity constraint that cannot be integrated into a configuration constraint, such as a wheel that cannot slide sideways.","mob");
  E("rob","Mecanum wheel","","A wheel with angled rollers that allows a vehicle to move in any direction on a plane.","mob");
  E("rob","Odometry","","Estimating position by accumulating measured wheel or joint motion, which drifts over time.","mob");
  E("rob","Dead reckoning","","Estimating present position from a known start point plus measured speed and heading over time.","mob");
  E("rob","Unicycle model","","A simple kinematic model of a mobile robot with forward speed and turn rate as inputs.","mob");
  E("rob","Motion planning","","Finding a collision free path or trajectory from a start to a goal.","mpl");
  E("rob","Obstacle avoidance","","Changing motion in real time to keep clear of obstacles.","mpl");
  E("rob","Sampling based planning","","Planning methods that randomly sample configurations to build a route, such as PRM and RRT.","mpl");
  E("rob","PRM","Probabilistic roadmap","A planner that samples free configurations, connects nearby ones, and searches the resulting graph.","mpl");
  E("rob","RRT","Rapidly exploring random tree","A planner that grows a tree of reachable configurations toward randomly chosen targets.","mpl");
  E("rob","A star search","","A graph search algorithm that finds a least cost path using the cost so far plus a heuristic estimate of the cost to go.","mpl");
  E("rob","Dijkstra algorithm","","A graph search method that finds least cost paths from a start node by expanding the cheapest known node first.","mpl");
  E("rob","Potential field","","A planning idea in which the goal attracts and obstacles repel, so the robot follows the combined gradient.","mpl");
  E("rob","Local minimum","","A point where a planner or optimizer gets stuck because every nearby move looks worse, though it is not the goal.","mpl");
  E("rob","Occupancy grid","","A map that divides space into cells with the probability that each is occupied.","mpl");
  E("rob","Costmap","","A grid map that assigns cost to cells to help planners prefer safe and efficient routes.","mpl");
  E("rob","Collision checking","","Testing whether a robot at a given configuration would hit an obstacle or itself.","mpl");
  E("rob","Visual servoing","","Using camera feedback directly in the control loop to guide robot motion.","cs1");
  E("rob","Pick and place","","A task in which a robot picks an object up and sets it down at a new location.","fk");
  E("rob","Hand eye calibration","","Finding the fixed transform between a camera and a robot so vision results can be used for motion.","sp");
  E("rob","Payload","","The mass a robot can carry at its end effector while meeting its specifications.","fk");
  E("rob","Pose repeatability","","How closely a robot returns to a taught position over many cycles.","fk");
  E("rob","Kinematic chain","","A series or network of links connected by joints.","fk");
  E("rob","Grubler formula","","A counting rule that estimates the degrees of freedom of a mechanism from its links and joints.","fk");

  /* ---------- Estimation and sensor fusion ---------- */
  E("est","State estimation","","Computing the internal state of a system from noisy measurements and a model.","kal");
  E("est","Kalman filter","","A recursive estimator that combines a model prediction with measurements, weighted by their uncertainties, and is optimal for linear systems with Gaussian noise.","kal");
  E("est","EKF","Extended Kalman filter","A Kalman filter variant that linearizes a nonlinear model around the current estimate at each step.","kal");
  E("est","UKF","Unscented Kalman filter","A Kalman variant that passes a small set of chosen sample points through the nonlinear model instead of linearizing it.","kal");
  E("est","Particle filter","","An estimator that represents uncertainty by many weighted samples, suited to strongly nonlinear or multimodal problems.","kal");
  E("est","Complementary filter","","A simple fusion method that blends a low pass filtered signal with a high pass filtered one, such as accelerometer and gyroscope angle.","kal");
  E("est","Covariance","","A matrix that describes the variances and correlations of uncertain quantities.","kal");
  E("est","Process noise","","Uncertainty in a model of how the state changes between time steps.","kal");
  E("est","Measurement noise","","Random error in sensor readings.","kal");
  E("est","Kalman gain","","The weight that decides how much a new measurement corrects the predicted state.","kal");
  E("est","Innovation","","The difference between an actual measurement and the one predicted by the model, also called the residual.","kal");
  E("est","Prediction step","","The part of a filter cycle that projects the state and its uncertainty forward using the model.","kal");
  E("est","Update step","","The part of a filter cycle that corrects the prediction with a new measurement.","kal");
  E("est","Bias","","A systematic offset in a sensor output, such as a gyroscope reading nonzero at rest.","kal");
  E("est","Gyro drift","","Growing angle error that results from integrating a gyroscope signal that has bias and noise.","kal");
  E("est","Gaussian distribution","","A bell shaped probability distribution described by its mean and variance.","kal");
  E("est","Variance","","A measure of how widely a random quantity is spread around its mean.","kal");
  E("est","Standard deviation","","The square root of variance, in the same units as the quantity.","kal");
  E("est","Bayesian estimation","","Updating belief about a quantity by combining prior knowledge with new evidence using Bayes rule.","kal");
  E("est","Attitude estimation","","Determining the orientation of a body, often using gyroscope, accelerometer and magnetometer data.","kal");
  E("est","AHRS","Attitude and heading reference system","A sensor system that outputs orientation by fusing inertial and magnetic measurements.","kal");
  E("est","GNSS","Global navigation satellite system","A satellite positioning service such as GPS that gives position and time.","kal");
  E("est","Localization","","Estimating where a robot is within a known map or frame.","mob");
  E("est","SLAM","Simultaneous localization and mapping","Building a map of an unknown place while estimating the robot position within it.","mob");
  E("est","Loop closure","","Recognizing a previously visited place in SLAM so accumulated drift can be corrected.","mob");
  E("est","Point cloud","","A set of three dimensional points produced by a depth sensor or scanner.","mob");
  E("est","Scan matching","","Aligning two range scans to find how the robot moved between them.","mob");
  E("est","Visual odometry","","Estimating motion by tracking how features move between camera images.","mob");
  E("est","Sensor calibration","","Determining the parameters, such as scale, bias and alignment, that relate a sensor reading to the true quantity.","kal");
  E("est","Extrinsic calibration","","Finding the position and orientation of one sensor relative to another or to the robot body.","sp");
  E("est","Intrinsic calibration","","Finding internal sensor parameters, for example the focal length and distortion of a camera.","sp");
  E("est","Time synchronization","","Aligning timestamps from different sensors so measurements can be fused correctly.","kal");
  E("est","Outlier rejection","","Detecting and discarding measurements that are far from what the model expects.","kal");
  E("est","Moving average","","A simple filter that averages the most recent samples to reduce noise.","dpid");
  E("est","Median filter","","A filter that replaces each sample by the median of a window, which removes spikes well.","dpid");
  E("est","Exponential smoothing","","A simple recursive filter that weights recent samples more than older ones.","dpid");
  E("est","Least squares","","A fitting method that chooses parameters to minimize the sum of squared errors.","kal");
  E("est","System identification","","Building a mathematical model of a system from measured input and output data.","sm");
  E("est","Allan variance","","A time domain analysis used to characterize noise and drift in inertial sensors.","kal");

  /* ---------- Software and communications ---------- */
  E("sw","ROS 2","Robot Operating System 2","A set of libraries and tools for building distributed robot software using nodes that exchange messages.","ros");
  E("sw","Node","","An independent process in ROS 2 that performs one function, such as reading a sensor or running a controller.","ros");
  E("sw","Topic","","A named channel in ROS 2 over which nodes publish and subscribe to messages.","ros");
  E("sw","Publisher","","A node role that sends messages on a topic.","ros");
  E("sw","Subscriber","","A node role that receives messages from a topic.","ros");
  E("sw","Service","","A ROS 2 request and response interaction between two nodes.","ros");
  E("sw","Action","","A ROS 2 interaction for long running tasks, with a goal, feedback and a result.","ros");
  E("sw","Parameter","","A named configuration value that a node reads and can change at run time.","ros");
  E("sw","Launch file","","A script that starts and configures several ROS 2 nodes together.","ros");
  E("sw","DDS","Data distribution service","A publish and subscribe middleware standard that ROS 2 uses for communication.","ros");
  E("sw","QoS","Quality of service","Settings that control reliability, history and timing of message delivery.","ros");
  E("sw","TF2","","The ROS 2 library that tracks coordinate frame transforms over time.","ros");
  E("sw","URDF","Unified robot description format","An XML file format that describes the links, joints and shapes of a robot.","ros");
  E("sw","Gazebo","","A robot simulator used with ROS to test code in a virtual environment.","p5");
  E("sw","RViz","","A ROS tool that visualizes sensor data, frames and robot state.","ros");
  E("sw","Rosbag","","A tool that records and replays ROS message data.","ros");
  E("sw","Nav2","","The ROS 2 navigation stack for planning and controlling mobile robots.","ros");
  E("sw","MoveIt","","A ROS framework for manipulator motion planning, kinematics and collision checking.","ros");
  E("sw","micro ROS","","A version of ROS 2 designed to run on microcontrollers.","ros");
  E("sw","Middleware","","Software that sits between applications and the network or operating system and provides common communication services.","ros");
  E("sw","Publish subscribe","","A messaging pattern in which senders publish to named topics and receivers subscribe without direct links.","ros");
  E("sw","Fieldbus","","A family of digital industrial network standards that replace point to point wiring of sensors and actuators.","nw");
  E("sw","CAN bus","Controller area network","A robust serial bus with message priority and error handling, widely used in vehicles and machines.","nw");
  E("sw","CAN FD","Controller area network flexible data rate","An extension of CAN that allows larger frames and faster data phases.","nw");
  E("sw","CANopen","","A higher layer protocol on top of CAN that defines device profiles and object dictionaries.","nw");
  E("sw","Bus arbitration","","The process by which devices sharing a bus decide who may transmit, as on CAN where lower identifiers win.","nw");
  E("sw","Modbus","","A simple master and slave protocol for industrial devices, available over serial lines and Ethernet.","nw");
  E("sw","PROFIBUS","Process field bus","A fieldbus standard widely used in factory and process automation.","nw");
  E("sw","PROFINET","","An industrial Ethernet standard for real time communication between controllers and devices.","nw");
  E("sw","EtherNet/IP","Ethernet industrial protocol","An industrial Ethernet protocol that applies the Common Industrial Protocol over standard Ethernet.","nw");
  E("sw","EtherCAT","Ethernet for control automation technology","An industrial Ethernet system in which a frame passes through every device and is processed on the fly, giving fast and tightly synchronized control.","nw");
  E("sw","Distributed clocks","","A synchronization method in EtherCAT that gives all devices a shared time base with very small offsets.","nw");
  E("sw","POWERLINK","Ethernet POWERLINK","A real time industrial Ethernet protocol that uses a managed cycle to avoid collisions.","nw");
  E("sw","IO-Link","","A point to point digital interface for smart sensors and actuators, standardized in IEC 61131-9.","nw");
  E("sw","HART","Highway addressable remote transducer","A protocol that adds digital communication on top of a 4 to 20 mA analogue signal.","nw");
  E("sw","OPC UA","Open Platform Communications Unified Architecture","A platform independent standard for secure industrial data exchange with a rich information model.","nw");
  E("sw","Information model","","A structured description of what devices and data mean, so different systems can interpret them consistently.","nw");
  E("sw","MQTT","Message queuing telemetry transport","A lightweight publish and subscribe protocol widely used to send sensor data to servers and cloud services.","nw");
  E("sw","Broker","","A server that receives published messages and forwards them to subscribers.","nw");
  E("sw","REST API","Representational state transfer application programming interface","A web interface style in which resources are accessed through standard HTTP requests.","nw");
  E("sw","JSON","JavaScript object notation","A text format for structured data made of keys and values.","nw");
  E("sw","TSN","Time sensitive networking","A set of Ethernet standards that give bounded latency and time synchronization on shared networks.","nw");
  E("sw","Ethernet","","A family of wired networking standards based on frames sent between connected devices.","nw");
  E("sw","TCP","Transmission control protocol","A network protocol that provides reliable, ordered delivery of data streams.","nw");
  E("sw","UDP","User datagram protocol","A network protocol that sends independent packets without delivery guarantees but with low delay.","nw");
  E("sw","Gateway","","A device that connects networks that use different protocols or addressing.","nw");
  E("sw","Network topology","","The way devices are arranged and connected in a network, such as line, star or ring.","nw");
  E("sw","Wireless sensor network","","A group of low power sensing nodes that communicate wirelessly to collect data.","cf");
  E("sw","Bluetooth Low Energy","","A short range wireless standard designed for low power devices.","cf");
  E("sw","Wi-Fi","","A wireless local area network technology based on IEEE 802.11 standards.","cf");
  E("sw","5G","Fifth generation mobile network","A cellular technology that supports high data rates, low latency and many devices, including private industrial networks.","nw");
  E("sw","LoRaWAN","Long range wide area network","A low power wide area wireless protocol for sparse data from remote devices.","cf");
  E("sw","RS-485","","A differential serial standard that supports long cable runs and several devices on one line.","cf");
  E("sw","RS-232","","An older point to point serial standard that uses single ended voltage levels.","cf");
  E("sw","Version control","","A system that records changes to files over time so work can be shared, compared and restored. Git is a common example.","p5");
  E("sw","Continuous integration","","Automatically building and testing code each time it changes.","ros");
  E("sw","Unit test","","A small automatic test that checks one function or module.","ce");
  E("sw","Containerization","","Packaging software with its dependencies so it runs the same on different computers. Docker is a common tool.","ros");
  E("sw","OTA update","Over the air update","Delivering new firmware to a device through a wireless or network link.","ce");
  E("sw","Behaviour tree","","A hierarchical structure used to organize robot decisions as tasks that return success, failure or running.","ros");
  E("sw","Handshaking","","An exchange of signals that coordinates when data is ready to send or has been received.","cf");
  E("sw","Frame (network)","","A defined package of bits on a network that contains addressing, data and error checking.","cf");

  /* ---------- Industrial automation ---------- */
  E("ind","PLC","Programmable logic controller","A rugged industrial computer that runs control logic in a repeating cycle with real world inputs and outputs.","pl");
  E("ind","Scan cycle","","The repeating PLC sequence of reading inputs, executing the program and updating outputs.","pl");
  E("ind","Input module","","A PLC card that brings signals from field devices into the controller.","pl");
  E("ind","Output module","","A PLC card that drives field devices such as valves, contactors and indicators.","pl");
  E("ind","Rack","","A frame that holds the processor and I/O modules of a modular PLC.","pl");
  E("ind","Sinking and sourcing","","Two ways to wire DC inputs and outputs, depending on whether the device supplies or receives current at the common.","pl");
  E("ind","IEC 61131-3","","The international standard that defines programming languages for PLCs.","pl");
  E("ind","Ladder diagram","","A graphical PLC language that looks like relay wiring, with contacts and coils on rungs. Often shortened to LD.","pl");
  E("ind","Function block diagram","","A graphical PLC language that connects reusable blocks with signal lines. Often shortened to FBD.","pl");
  E("ind","Structured text","","A text based PLC language similar to Pascal. Often shortened to ST.","pl");
  E("ind","Instruction list","","A low level text PLC language that resembles assembly, now deprecated in the standard. Often shortened to IL.","pl");
  E("ind","Sequential function chart","","A PLC language that describes a process as steps and transitions. Often shortened to SFC.","pl");
  E("ind","Rung","","One line of logic in a ladder diagram.","pl");
  E("ind","Latching","","Using a circuit or logic so an output stays on after the triggering input has gone, until it is reset.","pl");
  E("ind","Seal in circuit","","A latching arrangement where a contact of the output coil holds the coil on after a start button is released.","pl");
  E("ind","On delay timer","","A PLC instruction that turns an output on after its input has been true for a set time.","pl");
  E("ind","Function block (PLC)","","A reusable program unit with inputs, outputs and its own stored state.","pl");
  E("ind","Tag","","A named memory location or variable in a PLC or SCADA system.","pl");
  E("ind","Remote I/O","","Input and output modules placed near the machine and linked to the controller over a network.","nw");
  E("ind","PLCopen motion control","","A standard set of function blocks for motion tasks such as move, home and gear.","co");
  E("ind","PAC","Programmable automation controller","A controller that combines PLC reliability with more PC like processing and programming options.","co");
  E("ind","Industrial PC","","A rugged computer built for factory use, often running real time control software.","co");
  E("ind","Soft PLC","","A PLC runtime that runs as software on general computing hardware.","co");
  E("ind","SCADA","Supervisory control and data acquisition","A system that gathers data from many controllers, displays it to operators and sends supervisory commands.","pl");
  E("ind","HMI","Human machine interface","The operator screens and controls used to see machine status and enter commands.","dp");
  E("ind","DCS","Distributed control system","A control architecture for process plants in which controllers are spread across the site and linked to central operator stations.","co");
  E("ind","MES","Manufacturing execution system","Software that tracks and manages production on the factory floor in real time.","i4");
  E("ind","ERP","Enterprise resource planning","Business software that manages resources such as orders, inventory and finance.","i4");
  E("ind","ISA 95","","A standard model for connecting enterprise systems and plant control systems in layers.","i4");
  E("ind","Automation pyramid","","A layered view of industrial systems from field devices up through control, supervision, MES and ERP.","i4");
  E("ind","Process control","","Control of continuous variables such as temperature, pressure and flow in industrial processes.","ps");
  E("ind","Batch process","","Production in distinct lots with a defined sequence, rather than a continuous flow.","pl");
  E("ind","Discrete manufacturing","","Production of countable items such as car parts or appliances.","pl");
  E("ind","P and ID","Piping and instrumentation diagram","A drawing that shows pipes, equipment and instruments in a process plant.","ps");
  E("ind","Control valve","","A valve that adjusts flow in a process loop in response to a controller signal.","fp");
  E("ind","MCC","Motor control center","A cabinet assembly that houses starters, drives and protection for several motors.","dr");
  E("ind","Motor starter","","A device that switches a motor on and off and provides overload protection.","ea");
  E("ind","Overload relay","","A protective device that trips a motor circuit when current stays too high for too long.","ea");
  E("ind","Motion controller","","A device that coordinates the position, speed and timing of several axes.","co");
  E("ind","Electronic gearing","","Making one axis follow another in a fixed ratio through the controller instead of mechanical gears.","co");
  E("ind","Electronic cam","","A software defined relationship between a master axis and a follower axis that replaces a mechanical cam.","co");
  E("ind","Homing","","The procedure that finds a known reference position on an axis after power up.","co");
  E("ind","Jogging","","Moving an axis manually in small amounts, usually for setup.","co");
  E("ind","CNC","Computer numerical control","Automated control of machine tools using stored coded instructions.","cs2");
  E("ind","G code","","The common programming language for CNC machines, made of commands for motion and machine functions.","cs2");
  E("ind","OEE","Overall equipment effectiveness","A measure of manufacturing productivity combining availability, performance and quality.","i4");
  E("ind","Predictive maintenance","","Using condition data and models to schedule maintenance before a failure occurs.","i4");
  E("ind","Condition monitoring","","Tracking measurements such as vibration and temperature to judge the health of equipment.","i4");
  E("ind","MTBF","Mean time between failures","The average operating time between failures of a repairable item.","cf");
  E("ind","Alarm management","","Practices that make sure operator alarms are useful, prioritized and not overwhelming.","dp");
  E("ind","Recipe","","A stored set of parameters that defines how a product is made on a machine.","pl");
  E("ind","Edge controller","","A device near the machine that runs control and analytics close to the data source.","co");
  E("ind","AGV","Automated guided vehicle","A mobile robot that follows fixed paths such as lines or wires to move materials.","mob");
  E("ind","AMR","Autonomous mobile robot","A mobile robot that plans its own route using sensors and maps.","mob");
  E("ind","Flexible manufacturing","","Production systems that can switch between products with little downtime.","i4");
  E("ind","Machine tool","","A powered machine that shapes material by cutting, grinding or forming, such as a lathe or mill.","cs2");

  /* ---------- Mechanical elements and CAD/CAM ---------- */
  E("mech","Gear","","A toothed wheel that transmits motion and torque to another gear.","ma");
  E("mech","Spur gear","","A gear with straight teeth parallel to its axis, used between parallel shafts.","ma");
  E("mech","Helical gear","","A gear with angled teeth that engage gradually, giving quieter and smoother running than spur gears.","ma");
  E("mech","Bevel gear","","A conical gear that transmits motion between shafts that meet at an angle.","ma");
  E("mech","Worm gear","","A screw like gear that meshes with a wheel and gives a large ratio, often with self locking.","ma");
  E("mech","Planetary gearbox","","A gear set with a sun gear, planet gears and a ring, giving high ratio in a compact, coaxial form.","ma");
  E("mech","Harmonic drive","","A compact, near zero backlash gear that uses a flexible spline, common in robot joints.","ma");
  E("mech","Cycloidal drive","","A reducer that uses eccentric motion and lobed discs to provide high torque and shock resistance.","ma");
  E("mech","Gear ratio","","The ratio of input speed to output speed of a gear train, which also scales torque inversely.","ma");
  E("mech","Backlash","","Lost motion in a transmission when the direction of rotation reverses, caused by clearance between parts.","ma");
  E("mech","Belt drive","","A transmission in which a flexible belt carries power between pulleys.","ma");
  E("mech","Timing belt","","A toothed belt that engages pulley teeth to prevent slip and keep position synchronized.","ma");
  E("mech","Chain drive","","A transmission using a chain and sprockets for positive power transfer.","ma");
  E("mech","Lead screw","","A threaded shaft that turns rotation into linear motion, usually with sliding contact.","ma");
  E("mech","Ball screw","","A lead screw with recirculating balls that gives high efficiency and accuracy.","ma");
  E("mech","Rack and pinion","","A pair of gears converting between rotation and straight line motion.","ma");
  E("mech","Cam and follower","","A mechanism in which a shaped cam drives a follower through a defined motion profile.","ma");
  E("mech","Linkage","","An assembly of rigid links and joints that transfers motion and force.","ma");
  E("mech","Four bar linkage","","A closed chain of four links and four pivots that produces a coupler path or motion conversion.","ma");
  E("mech","Ratchet and pawl","","A mechanism that allows motion in one direction and blocks it in the other.","ma");
  E("mech","Geneva mechanism","","A mechanism that turns continuous rotation into intermittent indexed rotation.","ma");
  E("mech","Bearing","","A machine element that supports a moving part and reduces friction.","ma");
  E("mech","Linear guide","","A rail and carriage system that constrains motion to a straight line with low friction.","ma");
  E("mech","Coupling","","A device that joins two shafts to transmit torque while allowing for some misalignment.","ma");
  E("mech","Flexure","","A thin, elastic element that gives guided motion through bending, without friction or backlash.","ma");
  E("mech","Friction","","A force that resists relative motion between surfaces in contact.","sm");
  E("mech","Coulomb friction","","A friction force of constant magnitude that opposes motion, regardless of speed.","sm");
  E("mech","Viscous friction","","A friction force proportional to speed, as in fluids or dampers.","sm");
  E("mech","Stiction","","The higher friction that must be overcome to start motion from rest.","sm");
  E("mech","Stick slip","","Jerky motion caused by alternating sticking and sliding when friction changes with speed.","sm");
  E("mech","Torsional stiffness","","The resistance of a shaft or coupling to twisting.","sm");
  E("mech","Spring constant","","The force needed per unit stretch of a spring.","sm");
  E("mech","Stress","","Internal force per unit area in a material.","md");
  E("mech","Strain","","The relative deformation of a material, given as change in length over original length.","dm");
  E("mech","Factor of safety","","The ratio of the strength of a part to the load expected in use.","md");
  E("mech","Fatigue","","Progressive damage and cracking in a material caused by repeated loading.","md");
  E("mech","FEA","Finite element analysis","A numerical method that divides a structure into small elements to predict stress, vibration or heat flow.","md");
  E("mech","CAD","Computer aided design","Software for creating and modifying digital models and drawings of parts.","md");
  E("mech","CAM","Computer aided manufacturing","Software that turns CAD models into toolpaths and machine instructions.","cs2");
  E("mech","CAE","Computer aided engineering","Software that analyzes and simulates designs, such as FEA and dynamics.","md");
  E("mech","Toolpath","","The route a cutting tool follows to machine a part.","cs2");
  E("mech","Additive manufacturing","","Building parts layer by layer from material, commonly called 3D printing.","md");
  E("mech","Subtractive manufacturing","","Making parts by removing material, as in milling and turning.","cs2");
  E("mech","Injection moulding","","A process that forms plastic parts by injecting molten material into a mould.","md");
  E("mech","PCB","Printed circuit board","A board with copper tracks that connects and supports electronic components.","md");
  E("mech","Design for manufacture","","Designing parts so they are easy and economical to produce.","md");
  E("mech","GD and T","Geometric dimensioning and tolerancing","A symbolic language that defines allowable variation in form, orientation and position of features.","md");
  E("mech","STEP file","","A neutral CAD file format, defined in ISO 10303, that carries 3D geometry between different software systems.","md");
  E("mech","BOM","Bill of materials","A list of all parts and quantities needed to build a product.","md");
  E("mech","Tolerance stack up","","The combined effect of individual part tolerances on a final assembly dimension.","md");
  E("mech","Thermal expansion","","The change in size of a material as its temperature changes.","md");
  E("mech","Compliant mechanism","","A mechanism that gets some or all of its motion from the flexibility of its parts rather than from rigid joints.","ma");
  E("mech","Preload","","A steady force applied to remove play in bearings, screws or gears.","ma");
  E("mech","Spindle","","A rotating shaft that holds a tool or workpiece in a machine tool.","cs2");

  /* ---------- Safety and standards ---------- */
  E("saf","Functional safety","","The part of safety that depends on a system correctly responding to its inputs, including faults, to avoid danger.","cob");
  E("saf","IEC 61508","","The basic international standard for functional safety of electrical, electronic and programmable systems.","cob");
  E("saf","SIL","Safety integrity level","A level from 1 to 4 that expresses the required risk reduction of a safety function under IEC 61508.","cob");
  E("saf","PL","Performance level","A level from a to e that expresses the reliability of a safety control function under ISO 13849.","cob");
  E("saf","ISO 13849","","A standard for the design of safety related parts of machine control systems.","cob");
  E("saf","IEC 62061","","A machinery safety standard that applies functional safety methods to machine control systems.","cob");
  E("saf","ISO 12100","","A basic standard for machinery safety that sets out principles of risk assessment and risk reduction.","cob");
  E("saf","ISO 10218","","The standard that gives safety requirements for industrial robots and robot systems.","cob");
  E("saf","ISO/TS 15066","","A technical specification that gives safety guidance for collaborative robot operation, including contact force and pressure limits.","cob");
  E("saf","IEC 62443","","A series of standards for cybersecurity of industrial automation and control systems.","cob");
  E("saf","ISO 26262","","A functional safety standard for electrical and electronic systems in road vehicles.","cs1");
  E("saf","ISO 9001","","A standard that sets requirements for a quality management system.","md");
  E("saf","CE marking","","A mark showing that a product meets applicable European Union requirements for health, safety and environment.","cob");
  E("saf","Risk assessment","","A structured process of identifying hazards, estimating risk and deciding how to reduce it.","cob");
  E("saf","Hazard","","A potential source of harm.","cob");
  E("saf","Risk","","A combination of the probability of harm and its severity.","cob");
  E("saf","FMEA","Failure mode and effects analysis","A systematic review of how each part could fail and what the effects would be.","cf");
  E("saf","FTA","Fault tree analysis","A top down method that traces how combinations of faults can lead to an undesired event.","cf");
  E("saf","HAZOP","Hazard and operability study","A structured team review that examines deviations from design intent to find hazards.","cf");
  E("saf","Fail safe","","A design property that drives a system to a safe state when a fault occurs.","cob");
  E("saf","Fail operational","","A design property that keeps essential function working after a fault, usually through redundancy.","cob");
  E("saf","Redundancy","","Providing duplicate components or channels so a single fault does not cause loss of function.","cob");
  E("saf","Diversity","","Using different technologies or methods in redundant channels so one common cause does not defeat both.","cob");
  E("saf","Diagnostic coverage","","The fraction of dangerous failures that diagnostics can detect.","cob");
  E("saf","Common cause failure","","A single event or defect that causes several channels or components to fail together.","cob");
  E("saf","Safety function","","A function whose failure would raise risk, such as stopping a machine when a guard opens.","cob");
  E("saf","Safety PLC","","A controller certified to run safety functions, with redundant processing and diagnostics.","cob");
  E("saf","Safety relay","","A relay module with redundant, monitored contacts used for emergency stop and guard circuits.","cob");
  E("saf","Emergency stop","","A manually operated control that quickly brings machinery to a safe condition.","cob");
  E("saf","Interlock","","A mechanism or circuit that prevents an action unless a safe condition exists.","cob");
  E("saf","Light curtain","","A safeguard that uses beams of light across an opening to detect a person and trigger a stop.","cob");
  E("saf","Safety laser scanner","","A device that monitors zones around a machine with a laser and slows or stops it when a person enters.","cob");
  E("saf","Two hand control","","A control that requires both hands on separate buttons so hands are kept away from danger.","cob");
  E("saf","Guard","","A physical barrier that keeps people from reaching a hazard.","cob");
  E("saf","Enabling switch","","A three position device that allows motion only when held in the middle position.","cob");
  E("saf","Stop category","","A classification of how a machine stops. Category 0 removes power at once, category 1 stops under power then removes it, and category 2 stops under power and stays powered.","cob");
  E("saf","Cobot","Collaborative robot","A robot designed to work near people under defined safety modes.","cob");
  E("saf","Speed and separation monitoring","","A collaborative mode in which robot speed falls as a person gets closer, and the robot stops at a minimum distance.","cob");
  E("saf","Power and force limiting","","A collaborative mode in which robot design and control keep contact forces below harmful levels.","cob");
  E("saf","Hand guiding","","A collaborative mode in which the operator moves the robot by hand at a safe speed.","cob");
  E("saf","Safety rated monitored stop","","A collaborative mode in which the robot stops and stays stopped while a person is in the shared area.","cob");
  E("saf","Lockout tagout","","A procedure that isolates and locks energy sources so equipment cannot start during maintenance.","cob");
  E("saf","IP rating","Ingress protection rating","A code that states how well an enclosure resists dust and water.","md");
  E("saf","ATEX","","European requirements for equipment used in explosive atmospheres.","cob");
  E("saf","Cybersecurity","","Protecting systems and data from unauthorized access, tampering and disruption.","cob");
  E("saf","OT","Operational technology","Hardware and software that monitor and control physical processes and equipment.","cob");
  E("saf","Defense in depth","","A security approach that layers several independent protections so one failure does not expose the system.","cob");
  E("saf","Network segmentation","","Dividing a network into zones to limit how far an attacker or fault can spread.","cob");
  E("saf","Secure boot","","A startup process that checks that firmware is authentic before running it.","cob");
  E("saf","Zero trust","","A security model in which no user or device is trusted by default, and every access is verified.","cob");
  E("saf","DMZ","Demilitarized zone","A buffer network segment between an enterprise network and a control network.","cob");
  E("saf","Safe state","","A condition of a system in which it poses no unacceptable risk, such as stopped with energy removed.","cob");
  E("saf","Proof test","","A periodic test that reveals hidden dangerous failures in a safety function.","cob");
  E("saf","PFH","Probability of dangerous failure per hour","A measure of how likely a safety function is to fail dangerously, used to assign SIL.","cob");
  E("saf","Verification and validation","","Checking that a product was built according to its specification and that it meets the real needs of its users.","md");
  E("saf","Traceability","","The ability to link requirements to design, tests and results.","md");

  /* ---------- AI and modern topics ---------- */
  E("ai","Industry 4.0","","A term for the fourth industrial revolution, in which connected cyber physical systems, data and analytics drive flexible production.","i4");
  E("ai","Industry 5.0","","A vision that adds human centricity, sustainability and resilience to Industry 4.0 technology.","i4");
  E("ai","CPS","Cyber physical system","A system in which computation, networking and physical processes are tightly integrated and interact.","i4");
  E("ai","IoT","Internet of Things","A network of physical devices with sensors and connectivity that exchange data.","i4");
  E("ai","IIoT","Industrial Internet of Things","IoT applied in factories and infrastructure, where reliability and security are especially important.","i4");
  E("ai","Digital twin","","A virtual counterpart of a physical asset that is kept in sync with data and used for analysis, prediction and decisions.","twin");
  E("ai","Digital shadow","","A digital copy that receives data from a physical asset but does not send control back to it.","twin");
  E("ai","Digital thread","","The connected flow of data about a product across its entire life cycle.","twin");
  E("ai","Asset administration shell","","A standard digital representation of an industrial asset, used to describe and exchange its data in Industry 4.0.","i4");
  E("ai","Edge computing","","Processing data near where it is produced instead of sending everything to a distant data center.","twin");
  E("ai","Cloud computing","","Using remote shared computing resources over a network for storage and processing.","twin");
  E("ai","Edge AI","","Running machine learning models on devices close to the sensor, with low delay and no need for constant cloud links.","twin");
  E("ai","TinyML","","Machine learning on very small, low power microcontroller class devices.","twin");
  E("ai","Artificial intelligence","","Computer systems that perform tasks associated with human intelligence, such as perception, learning and decision making.","ai");
  E("ai","Machine learning","","Methods in which computers learn patterns from data instead of being explicitly programmed.","ai");
  E("ai","Supervised learning","","Learning from examples that include the correct answers.","ai");
  E("ai","Unsupervised learning","","Finding structure in data that has no labels.","ai");
  E("ai","Reinforcement learning","","Learning to act by trial and error, guided by rewards.","ai");
  E("ai","Neural network","","A model made of layers of simple connected units whose weights are tuned from data.","ai");
  E("ai","Deep learning","","Machine learning with neural networks that have many layers.","ai");
  E("ai","CNN","Convolutional neural network","A neural network that uses shared filters to find local patterns, widely used on images.","ai");
  E("ai","Transformer","","A neural network design that uses attention to relate all parts of a sequence, the basis of many modern language and vision models.","ai");
  E("ai","Training data","","The examples used to fit the parameters of a machine learning model.","ai");
  E("ai","Overfitting","","When a model fits the training data too closely and performs poorly on new data.","ai");
  E("ai","Inference","","Running a trained model to produce an output for new input.","twin");
  E("ai","Model quantization","","Reducing the numerical precision of a model so it runs faster and smaller on limited hardware.","twin");
  E("ai","Anomaly detection","","Finding data that differs from normal behaviour, often to spot faults early.","ai");
  E("ai","Fault detection and diagnosis","","Identifying that something is wrong in a system and locating its cause.","ai");
  E("ai","Computer vision","","Methods that let computers extract information from images and video.","ai");
  E("ai","Object detection","","A vision task that finds and labels objects within an image.","ai");
  E("ai","Imitation learning","","Training a robot policy by learning from demonstrations by a person or expert controller.","ai");
  E("ai","Sim to real transfer","","Moving a controller or policy trained in simulation to real hardware, which requires handling differences between the two.","twin");
  E("ai","Domain randomization","","Varying simulation parameters widely during training so a policy works across real world differences.","twin");
  E("ai","Foundation model","","A large model trained on broad data that can be adapted to many tasks.","ai");
  E("ai","LLM","Large language model","A neural network trained on large amounts of text to predict and generate language.","ai");
  E("ai","Embodied AI","","Artificial intelligence that perceives and acts through a physical body, such as a robot.","ai");
  E("ai","Genetic algorithm","","A search method inspired by evolution that improves a population of candidate solutions through selection and variation.","ai");
  E("ai","Expert system","","A program that applies stored rules from human specialists to make decisions in a narrow area.","ai");
  E("ai","Explainable AI","","Methods that help people understand why a model produced a given result.","ai");
  E("ai","Predictive analytics","","Using data and models to forecast future outcomes, such as machine failures.","i4");
  E("ai","Augmented reality","","Overlaying digital information on a live view of the real world, used for maintenance and training. Often shortened to AR.","i4");
  E("ai","Virtual commissioning","","Testing control software against a virtual model of a machine before the real machine exists.","twin");
  E("ai","Co simulation","","Running models from different tools together, exchanging data at each step.","twin");
  E("ai","FMI","Functional mock up interface","A standard for exchanging simulation models between tools.","twin");
  E("ai","Modelica","","An object oriented language for modelling physical systems across several domains.","sm");
  E("ai","Software defined machine","","A machine whose functions and behaviour are largely set and updated by software.","co");
  E("ai","Autonomy","","The ability of a system to perceive, decide and act toward goals with limited human input.","mob");
  E("ai","Energy harvesting","","Collecting small amounts of energy from the environment, such as vibration or light, to power low energy devices.","stn");
  E("ai","Soft robotics","","The field of robots built from compliant materials for safe and adaptive interaction.","dr");
  E("ai","Swarm robotics","","The study of many simple robots that cooperate through local rules to achieve group tasks.","mob");
  E("ai","Teleoperation","","Controlling a machine from a distance, often with video and force feedback.","cob");
  E("ai","Human robot collaboration","","People and robots working together on shared tasks in a shared space.","cob");
  E("ai","Open source hardware","","Hardware whose design files are public so others can study, modify and build it.","p5");

  window.GLOSSARY = { categories: CATEGORIES, lessons: LESSONS, entries: ENTRIES };
})();
