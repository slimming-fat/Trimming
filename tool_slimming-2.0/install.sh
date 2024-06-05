#!/bin/bash
 mvn install:install-file "-Dfile=slimming-2.0-1.0.jar" "-DgroupId=neu.lab" "-DartifactId=slimming-2.0" "-Dversion=1.0" "-Dpackaging=jar" "-DpomFile=slimming-2.0-1.0.pom" 